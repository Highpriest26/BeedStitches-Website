"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Upload,
  X,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import {
  getTodayIsoDateString,
  validateBookingPayload,
} from "@/lib/bookingValidation";

interface SubmissionSuccess {
  referenceId: string;
  whatsappFollowUpUrl: string;
  summary: {
    full_name: string;
    service: string;
    consultation_type: string;
    preferred_date: string;
    preferred_time?: string | null;
    location: string;
  };
}

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  const preselectedLook = searchParams.get("look");

  const [todayMin, setTodayMin] = useState("2026-01-01");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState<string>(
    siteConfig.booking.serviceOptions[0]
  );
  const [consultationType, setConsultationType] = useState<string>(
    siteConfig.booking.consultationTypes[0]
  );
  const [occasion, setOccasion] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [referenceFile, setReferenceFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<SubmissionSuccess | null>(
    null
  );

  useEffect(() => {
    setTodayMin(getTodayIsoDateString());
  }, []);

  useEffect(() => {
    if (preselectedService) {
      const matched = siteConfig.booking.serviceOptions.find(
        (opt) => opt.toLowerCase() === preselectedService.toLowerCase()
      );
      if (matched) {
        setService(matched);
      }
    }
    if (preselectedLook) {
      setMessage((prev) =>
        prev
          ? prev
          : `I am interested in booking a look inspired by "${preselectedLook}".`
      );
    }
  }, [preselectedService, preselectedLook]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setErrors((prev) => {
      const next = { ...prev };
      delete next.reference_image;
      return next;
    });

    if (!selected) {
      setReferenceFile(null);
      setFilePreviewUrl(null);
      return;
    }

    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(selected.type)) {
      setErrors((prev) => ({
        ...prev,
        reference_image: "Please select a JPEG, PNG, or WebP image file.",
      }));
      return;
    }
    if (selected.size > 8 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        reference_image: "Reference image must be 8 MB or smaller.",
      }));
      return;
    }

    setReferenceFile(selected);
    const objectUrl = URL.createObjectURL(selected);
    setFilePreviewUrl(objectUrl);
  };

  const clearSelectedFile = () => {
    setReferenceFile(null);
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
    }
    setFilePreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const clientValidation = validateBookingPayload({
      full_name: fullName,
      phone,
      email,
      location,
      service,
      consultation_type: consultationType,
      occasion,
      event_date: eventDate,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      message,
      honeypot,
      reference_image_name: referenceFile?.name,
      reference_image_type: referenceFile?.type,
      reference_image_size: referenceFile?.size,
    });

    if (!clientValidation.valid) {
      setErrors(clientValidation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("location", location);
      formData.append("service", service);
      formData.append("consultation_type", consultationType);
      formData.append("occasion", occasion);
      formData.append("event_date", eventDate);
      formData.append("preferred_date", preferredDate);
      formData.append("preferred_time", preferredTime);
      formData.append("message", message);
      formData.append("company_website", honeypot);
      if (referenceFile) {
        formData.append("reference_image", referenceFile);
      }

      const res = await fetch("/api/bookings", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrors(
          data.errors || {
            form: "Please check your details and try submitting again.",
          }
        );
        setIsSubmitting(false);
        return;
      }

      setSuccessData({
        referenceId: data.referenceId,
        whatsappFollowUpUrl: data.whatsappFollowUpUrl,
        summary: data.summary,
      });
      setIsSubmitting(false);
    } catch {
      setErrors({
        form: "Network error while sending request. Please try again or message us directly on WhatsApp.",
      });
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="rounded-2xl border border-brand-gold/40 bg-brand-charcoal p-8 sm:p-12 space-y-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 border border-brand-gold text-brand-gold">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Reference: {successData.referenceId} • Pending Manual Confirmation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
              {siteConfig.booking.success.heading}
            </h2>
            <p className="text-base text-brand-off-white/90 leading-relaxed max-w-xl">
              {siteConfig.booking.success.message}
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="rounded-xl border border-white/10 bg-brand-black p-6 space-y-4">
          <p className="text-xs uppercase tracking-luxury text-brand-gold">
            Consultation Request Summary
          </p>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-sm">
            <div>
              <dt className="text-xs text-brand-muted">Client Name</dt>
              <dd className="text-brand-white font-medium mt-0.5">
                {successData.summary.full_name}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-brand-muted">Service Requested</dt>
              <dd className="text-brand-white font-medium mt-0.5">
                {successData.summary.service}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-brand-muted">Consultation Type</dt>
              <dd className="text-brand-white font-medium mt-0.5">
                {successData.summary.consultation_type}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-brand-muted">
                Preferred Date &amp; Time
              </dt>
              <dd className="text-brand-white font-medium mt-0.5">
                {successData.summary.preferred_date}
                {successData.summary.preferred_time
                  ? ` at ${successData.summary.preferred_time}`
                  : ""}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
          <a
            href={successData.whatsappFollowUpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Send Request Summary via WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => {
              setSuccessData(null);
              setOccasion("");
              setMessage("");
              clearSelectedFile();
            }}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 text-xs uppercase tracking-luxury text-brand-off-white hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-brand-charcoal p-6 sm:p-10 space-y-8"
    >
      {/* Top Notice Banner */}
      <div className="flex items-start gap-3 border-b border-white/10 pb-6">
        <ShieldCheck className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-luxury text-brand-white">
            Request-Based Consultation • Manually Confirmed
          </p>
          <p className="text-xs text-brand-muted leading-relaxed">
            Every appointment and custom garment commission is personally reviewed by
            BEEDSTITCHES before confirmation. Available for in-person fittings in Enugu
            and remote/international clients worldwide.
          </p>
        </div>
      </div>

      {errors.form && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-500/40 bg-red-950/30 p-4 text-sm text-red-200"
        >
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Honeypot Spam Trap (Hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company Website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Section 1: Contact & Location */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="full_name"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Chukwudi Okafor"
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
          {errors.full_name && (
            <p className="text-xs text-red-400">{errors.full_name}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Phone / WhatsApp <span className="text-brand-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +234 800 000 0000"
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone}</p>
          )}
        </div>

        {/* Email (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Email <span className="text-brand-muted text-[10px]">(Optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourname@example.com"
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Your Location <span className="text-brand-gold">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Enugu, Lagos, Abuja, London, Houston..."
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
          {errors.location && (
            <p className="text-xs text-red-400">{errors.location}</p>
          )}
        </div>
      </div>

      {/* Section 2: Service & Consultation Type */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-white/10 pt-6">
        {/* Service */}
        <div className="space-y-2">
          <label
            htmlFor="service"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            What would you like us to make?{" "}
            <span className="text-brand-gold">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            {siteConfig.booking.serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-brand-black">
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-xs text-red-400">{errors.service}</p>
          )}
        </div>

        {/* Consultation Type */}
        <div className="space-y-2">
          <label
            htmlFor="consultation_type"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Consultation Type <span className="text-brand-gold">*</span>
          </label>
          <select
            id="consultation_type"
            name="consultation_type"
            required
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          >
            {siteConfig.booking.consultationTypes.map((typeOption) => (
              <option
                key={typeOption}
                value={typeOption}
                className="bg-brand-black"
              >
                {typeOption}
              </option>
            ))}
          </select>
          {errors.consultation_type && (
            <p className="text-xs text-red-400">{errors.consultation_type}</p>
          )}
        </div>

        {/* Occasion */}
        <div className="space-y-2">
          <label
            htmlFor="occasion"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            What is the outfit for?{" "}
            <span className="text-brand-muted text-[10px]">(Optional)</span>
          </label>
          <input
            id="occasion"
            name="occasion"
            type="text"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            placeholder="e.g. Traditional wedding, Birthday, Executive wardrobe..."
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>

        {/* Event / Needed By Date */}
        <div className="space-y-2">
          <label
            htmlFor="event_date"
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            <Calendar className="h-3.5 w-3.5 text-brand-gold" />
            <span>Event / Needed By Date</span>
            <span className="text-brand-muted text-[10px]">(Optional)</span>
          </label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            min={todayMin}
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold [color-scheme:dark]"
          />
          {errors.event_date && (
            <p className="text-xs text-red-400">{errors.event_date}</p>
          )}
        </div>
      </div>

      {/* Section 3: Preferred Consultation Date & Time */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-white/10 pt-6">
        {/* Preferred Consultation Date */}
        <div className="space-y-2">
          <label
            htmlFor="preferred_date"
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            <Calendar className="h-3.5 w-3.5 text-brand-gold" />
            <span>
              Preferred Consultation Date{" "}
              <span className="text-brand-gold">*</span>
            </span>
          </label>
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            required
            min={todayMin}
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold [color-scheme:dark]"
          />
          {errors.preferred_date && (
            <p className="text-xs text-red-400">{errors.preferred_date}</p>
          )}
        </div>

        {/* Preferred Time */}
        <div className="space-y-2">
          <label
            htmlFor="preferred_time"
            className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            <Clock className="h-3.5 w-3.5 text-brand-gold" />
            <span>Preferred Time</span>
            <span className="text-brand-muted text-[10px]">(Optional)</span>
          </label>
          <input
            id="preferred_time"
            name="preferred_time"
            type="time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full rounded-xl border border-white/15 bg-brand-black px-4 py-3.5 text-sm text-brand-white focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold [color-scheme:dark]"
          />
        </div>
      </div>

      {/* Section 4: Reference Image Upload & Outfit Notes */}
      <div className="space-y-6 border-t border-white/10 pt-6">
        {/* Upload Inspiration / Reference */}
        <div className="space-y-2">
          <label
            htmlFor="reference_image"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Upload Inspiration / Reference{" "}
            <span className="text-brand-muted text-[10px]">
              (Optional • JPEG, PNG, or WebP)
            </span>
          </label>

          {!referenceFile ? (
            <label
              htmlFor="reference_image"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-brand-black px-6 py-7 text-center transition-colors hover:border-brand-gold/60"
            >
              <Upload className="h-6 w-6 text-brand-gold mb-2" />
              <span className="text-xs font-medium uppercase tracking-luxury text-brand-off-white">
                Click to select a style reference photo
              </span>
              <span className="mt-1 text-[11px] text-brand-muted">
                Supports JPG, PNG, WebP up to 8 MB
              </span>
              <input
                id="reference_image"
                name="reference_image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
          ) : (
            <div className="flex items-center justify-between rounded-xl border border-brand-gold/40 bg-brand-black p-3.5">
              <div className="flex items-center gap-3.5">
                {filePreviewUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={filePreviewUrl}
                    alt="Selected inspiration reference preview"
                    className="h-14 w-14 rounded-lg object-cover border border-white/15"
                  />
                )}
                <div>
                  <p className="text-xs font-medium text-brand-white truncate max-w-[220px] sm:max-w-xs">
                    {referenceFile.name}
                  </p>
                  <p className="text-[11px] text-brand-muted">
                    {(referenceFile.size / 1024).toFixed(0)} KB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={clearSelectedFile}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-brand-muted hover:border-brand-gold hover:text-brand-white"
                aria-label="Remove selected reference image"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {errors.reference_image && (
            <p className="text-xs text-red-400">{errors.reference_image}</p>
          )}
        </div>

        {/* Message / Tell us about the outfit */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs font-medium uppercase tracking-luxury text-brand-off-white"
          >
            Tell us about the outfit{" "}
            <span className="text-brand-muted text-[10px]">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your preferred colors, fabric preferences, fit details, number of outfits, or training questions..."
            className="w-full rounded-xl border border-white/15 bg-brand-black p-4 text-sm text-brand-white placeholder:text-brand-muted/50 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
          />
        </div>
      </div>

      {/* Submit & Secondary WhatsApp Action */}
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-all hover:bg-brand-gold-highlight disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-highlight"
        >
          <span>
            {isSubmitting
              ? "Submitting Request..."
              : "Submit Consultation Request"}
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <div className="text-xs text-brand-muted">
          Prefer immediate chat?{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold underline underline-offset-4 hover:text-brand-gold-highlight"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </form>
  );
}
