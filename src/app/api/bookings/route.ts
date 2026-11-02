import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import {
  validateBookingPayload,
  type BookingRequestPayload,
} from "@/lib/bookingValidation";
import { siteConfig } from "@/data/siteConfig";

// Simple in-memory rate limit map per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 12;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "local-client";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          ok: false,
          errors: {
            form: "Too many consultation requests sent recently. Please wait a few minutes or message us on WhatsApp.",
          },
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const file = formData.get("reference_image") as File | null;
    const hasFile = file && file.size > 0;

    const payload: BookingRequestPayload = {
      full_name: String(formData.get("full_name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      location: String(formData.get("location") || ""),
      service: String(formData.get("service") || ""),
      consultation_type: String(formData.get("consultation_type") || ""),
      occasion: String(formData.get("occasion") || ""),
      event_date: String(formData.get("event_date") || ""),
      preferred_date: String(formData.get("preferred_date") || ""),
      preferred_time: String(formData.get("preferred_time") || ""),
      message: String(formData.get("message") || ""),
      honeypot: String(formData.get("company_website") || ""),
      reference_image_name: hasFile ? file.name : undefined,
      reference_image_type: hasFile ? file.type : undefined,
      reference_image_size: hasFile ? file.size : undefined,
    };

    const validation = validateBookingPayload(payload);
    if (!validation.valid) {
      return NextResponse.json(
        {
          ok: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Generate human-friendly consultation request reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `BS-${new Date().getFullYear()}-${randomSuffix}`;
    const createdAt = new Date().toISOString();

    const record = {
      referenceId,
      status: "pending_manual_confirmation",
      createdAt,
      full_name: payload.full_name.trim(),
      phone: payload.phone.trim(),
      email: payload.email?.trim() || null,
      location: payload.location.trim(),
      service: payload.service,
      consultation_type: payload.consultation_type,
      occasion: payload.occasion?.trim() || null,
      event_date: payload.event_date || null,
      preferred_date: payload.preferred_date,
      preferred_time: payload.preferred_time || null,
      message: payload.message?.trim() || null,
      reference_image: hasFile
        ? {
            name: file.name,
            type: file.type,
            size: file.size,
          }
        : null,
    };

    // Persist locally in development if filesystem is writable (safe fallback on serverless)
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "bookings.json");
      let existing: unknown[] = [];
      try {
        const raw = await fs.readFile(filePath, "utf8");
        existing = JSON.parse(raw);
        if (!Array.isArray(existing)) existing = [];
      } catch {
        existing = [];
      }
      existing.unshift(record);
      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
    } catch {
      // Read-only serverless filesystem fallback: log structured booking output
      console.info("[BEEDSTITCHES CONSULTATION REQUEST]", JSON.stringify(record));
    }

    // Build pre-populated WhatsApp follow-up link for instant convenience
    const whatsappLines = [
      `Hello BEEDSTITCHES Fashion, I just submitted a Consultation Request (${referenceId}).`,
      `• Name: ${record.full_name}`,
      `• Service: ${record.service}`,
      `• Consultation Type: ${record.consultation_type}`,
      `• Location: ${record.location}`,
      `• Preferred Date: ${record.preferred_date}${
        record.preferred_time ? ` (${record.preferred_time})` : ""
      }`,
      record.occasion ? `• Occasion: ${record.occasion}` : null,
      record.event_date ? `• Needed By: ${record.event_date}` : null,
      record.message ? `• Notes: ${record.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappFollowUpUrl = `https://wa.me/${
      siteConfig.contact.whatsappNumberClean
    }?text=${encodeURIComponent(whatsappLines)}`;

    return NextResponse.json({
      ok: true,
      referenceId,
      bookingMode: "request_based_manual_confirmation",
      whatsappFollowUpUrl,
      summary: record,
    });
  } catch (err) {
    console.error("Booking submission error:", err);
    return NextResponse.json(
      {
        ok: false,
        errors: {
          form: "Unable to process your request right now. Please try again or reach us directly on WhatsApp.",
        },
      },
      { status: 500 }
    );
  }
}
