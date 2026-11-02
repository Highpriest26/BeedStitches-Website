import { siteConfig } from "@/data/siteConfig";

export interface BookingRequestPayload {
  full_name: string;
  phone: string;
  email?: string;
  location: string;
  service: string;
  consultation_type: string;
  occasion?: string;
  event_date?: string;
  preferred_date: string;
  preferred_time?: string;
  message?: string;
  reference_image_name?: string;
  reference_image_type?: string;
  reference_image_size?: number;
  honeypot?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_IMAGE_SIZE_BYTES = 8 * 1024 * 1024; // 8 MB

export function getTodayIsoDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isDateInPast(dateStr: string): boolean {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return false;
  }
  const today = getTodayIsoDateString();
  return dateStr < today;
}

export function validateBookingPayload(
  payload: BookingRequestPayload
): ValidationResult {
  const errors: Record<string, string> = {};

  // Spam honeypot check
  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    return {
      valid: false,
      errors: { form: "Submission flagged by spam protection." },
    };
  }

  // Full name
  const fullName = (payload.full_name || "").trim();
  if (!fullName || fullName.length < 2) {
    errors.full_name = "Please enter your full name.";
  } else if (fullName.length > 120) {
    errors.full_name = "Name is too long.";
  }

  // Phone / WhatsApp
  const phone = (payload.phone || "").trim();
  if (!phone) {
    errors.phone = "Please provide your Phone or WhatsApp number.";
  } else if (!/^[+\d\s()-]{7,24}$/.test(phone)) {
    errors.phone = "Please enter a valid phone or WhatsApp number.";
  }

  // Optional Email
  const email = (payload.email || "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address or leave blank.";
  }

  // Location
  const location = (payload.location || "").trim();
  if (!location || location.length < 2) {
    errors.location = "Please enter your city/state or country.";
  }

  // Service
  const service = (payload.service || "").trim();
  const allowedServices = siteConfig.booking.serviceOptions as readonly string[];
  if (!service || !allowedServices.includes(service)) {
    errors.service = "Please select what you would like us to make.";
  }

  // Consultation Type
  const consultationType = (payload.consultation_type || "").trim();
  const allowedTypes =
    siteConfig.booking.consultationTypes as readonly string[];
  if (!consultationType || !allowedTypes.includes(consultationType)) {
    errors.consultation_type = "Please select a consultation type.";
  }

  // Preferred Date (Required, cannot be in the past)
  const preferredDate = (payload.preferred_date || "").trim();
  if (!preferredDate) {
    errors.preferred_date = "Please choose a preferred consultation date.";
  } else if (isDateInPast(preferredDate)) {
    errors.preferred_date = "Preferred consultation date cannot be in the past.";
  }

  // Event / Needed By Date (Optional, cannot be in the past)
  const eventDate = (payload.event_date || "").trim();
  if (eventDate && isDateInPast(eventDate)) {
    errors.event_date = "Event / needed-by date cannot be in the past.";
  }

  // Optional Reference Image
  if (payload.reference_image_size && payload.reference_image_size > 0) {
    if (
      payload.reference_image_type &&
      !ALLOWED_IMAGE_TYPES.includes(payload.reference_image_type)
    ) {
      errors.reference_image =
        "Only JPEG, PNG, or WebP inspiration images are accepted.";
    }
    if (payload.reference_image_size > MAX_IMAGE_SIZE_BYTES) {
      errors.reference_image = "Image must be 8 MB or smaller.";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
