import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  GraduationCap,
  Scissors,
  MessageCircle,
  Users,
  Award,
  Camera,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Fashion Training & Tailoring Mentorship in Enugu",
  description:
    "Learn fashion through practice at BEEDSTITCHES in Enugu, Nigeria. Practical training and mentorship in fabric selection, cutting, garment construction, stitching, and finishing.",
  openGraph: {
    title: "Fashion Training | BEEDSTITCHES Fashion",
    description:
      "Practical training and mentorship in fabric selection, cutting, garment construction, stitching, finishing and professional presentation.",
  },
};

export default function FashionTrainingPage() {
  const trainingWhatsAppUrl = getWhatsAppUrl(
    "Hello BEEDSTITCHES Fashion, I would like to enquire about enrolling in your practical Fashion Training & Tailoring Mentorship program in Enugu."
  );

  const { studentsInTraining, graduatedStudents } =
    siteConfig.fashionTraining.studentShowcase;

  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Hero Section */}
      <section className="relative border-b border-white/10 py-20 sm:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/35 bg-brand-charcoal px-4 py-1.5 text-[11px] uppercase tracking-editorial text-brand-gold">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>BEEDSTITCHES Fashion Academy &amp; Mentorship</span>
                </div>
                <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-semibold text-brand-white leading-tight">
                  {siteConfig.fashionTraining.heroHeading}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-off-white/90 sm:text-lg">
                  {siteConfig.fashionTraining.intro}
                </p>
              </Reveal>

              {/* Proof Points strictly from YAML */}
              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                  <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-5">
                    <Award className="h-5 w-5 text-brand-gold mb-2" />
                    <p className="font-serif text-lg font-semibold text-brand-white">
                      Certified Fashion Educator
                    </p>
                    <p className="mt-1 text-xs text-brand-muted">
                      Structured, hands-on instruction led by {siteConfig.founder.name}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-5">
                    <Scissors className="h-5 w-5 text-brand-gold mb-2" />
                    <p className="font-serif text-lg font-semibold text-brand-white">
                      8+ Years Experience
                    </p>
                    <p className="mt-1 text-xs text-brand-muted">
                      Practical bespoke tailoring &amp; garment production mastery
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-5">
                    <Users className="h-5 w-5 text-brand-gold mb-2" />
                    <p className="font-serif text-lg font-semibold text-brand-white">
                      15+ Students Trained
                    </p>
                    <p className="mt-1 text-xs text-brand-muted">
                      Apprentices and emerging tailors mentored in real production
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="flex flex-col gap-4 pt-3 sm:flex-row">
                  <Link
                    href="/book-consultation?service=Fashion+Training"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
                  >
                    <span>{siteConfig.fashionTraining.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={trainingWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-brand-charcoal px-8 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-gold" />
                    <span>Ask About Training on WhatsApp</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Authentic Atelier Sketch & Sewing Machine Visual */}
            <Reveal delay={0.14} className="lg:col-span-5">
              <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-3 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-black">
                  <Image
                    src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg"
                    alt="BEEDSTITCHES sewing machine and hand-drawn garment construction sketch"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1 text-[11px] uppercase tracking-luxury text-brand-muted">
                  <span>BEEDSTITCHES Workshop</span>
                  <span className="text-brand-gold">Enugu, Nigeria</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl space-y-3 mb-14">
              <p className="text-xs uppercase tracking-editorial text-brand-gold">
                Core Curriculum Preview
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-white">
                What You Will Learn
              </h2>
              <p className="text-base text-brand-muted">
                Training at BEEDSTITCHES focuses on real workshop competence—taking
                students from raw fabric assessment and accurate pattern cutting to
                production-grade garment finishing.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.fashionTraining.curriculum.map((module, idx) => (
              <Reveal key={module.number} delay={(idx % 3) * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-charcoal p-7 hover:border-brand-gold/40 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-serif text-2xl font-semibold text-brand-gold">
                        Module {module.number}
                      </span>
                      <span className="rounded-full border border-white/10 bg-brand-black px-3 py-1 text-[10px] uppercase tracking-editorial text-brand-muted">
                        Practical Workshop
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-brand-white">
                      {module.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {module.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-brand-gold">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Hands-on supervised practice</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Students in Training & Graduated Apprentices Gallery Section */}
      <section
        id="student-gallery"
        className="py-20 sm:py-28 bg-brand-charcoal border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Sub-section 1: Students & Apprentices in Practical Training */}
          <div className="space-y-10">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl space-y-2">
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    01 • Inside The Training Studio
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
                    Students &amp; Apprentices in Training
                  </h2>
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                    Dedicated showcase for apprentices learning pattern drafting,
                    fabric cutting, industrial machine stitching, and garment
                    finishing inside the BEEDSTITCHES Enugu studio.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black px-4 py-2 text-xs text-brand-gold">
                  <Scissors className="h-3.5 w-3.5" />
                  <span>Practical Mentorship Sessions</span>
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {studentsInTraining.map((slot, idx) => (
                <Reveal key={slot.id} delay={idx * 0.08}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-brand-black transition-colors hover:border-brand-gold/40">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-charcoal">
                      {slot.imageSrc ? (
                        <Image
                          src={slot.imageSrc}
                          alt={slot.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <>
                          <Image
                            src={slot.fallbackAsset}
                            alt={slot.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover opacity-35"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/65 to-brand-black/30" />
                          <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center space-y-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-brand-gold/60 bg-brand-black/80 text-brand-gold">
                              <Camera className="h-6 w-6" />
                            </div>
                            <span className="rounded-full border border-brand-gold/35 bg-brand-black/85 px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                              Student Training Photo Slot
                            </span>
                            <p className="text-xs text-brand-off-white/90 max-w-xs leading-relaxed">
                              Space reserved for student workshop photography
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-editorial text-brand-gold">
                          {slot.cohortLabel}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-brand-white">
                          {slot.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-brand-muted">
                          {slot.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Graduated Students & Alumni Showcase */}
          <div className="space-y-10 border-t border-white/10 pt-16">
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div className="max-w-2xl space-y-2">
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    02 • Graduated Apprentices &amp; Alumni
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
                    Graduated Students Showcase
                  </h2>
                  <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                    With at least 15 students and apprentices trained, these slots
                    are dedicated to showcasing BEEDSTITCHES graduates, their
                    certificate presentations, and their completed tailoring projects.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black px-4 py-2 text-xs text-brand-gold">
                  <GraduationCap className="h-4 w-4" />
                  <span>15+ Apprentices Trained</span>
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {graduatedStudents.map((slot, idx) => (
                <Reveal key={slot.id} delay={idx * 0.08}>
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-gold/25 bg-brand-black transition-colors hover:border-brand-gold/50">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-charcoal">
                      {slot.imageSrc ? (
                        <Image
                          src={slot.imageSrc}
                          alt={slot.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-brand-charcoal via-brand-black/90 to-brand-black">
                          <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 text-[10px] uppercase tracking-luxury text-brand-muted">
                            <span>BEEDSTITCHES Academy</span>
                            <span className="text-brand-gold">Alumni</span>
                          </div>

                          <div className="my-auto flex flex-col items-center space-y-3 py-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-brand-gold/60 bg-brand-charcoal text-brand-gold shadow-inner">
                              <GraduationCap className="h-7 w-7" />
                            </div>
                            <span className="rounded-full border border-brand-gold/35 bg-brand-charcoal px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                              Graduate Photo Slot 0{idx + 1}
                            </span>
                            <p className="text-xs text-brand-muted max-w-[220px] leading-relaxed">
                              Space reserved for graduated student portrait &amp; completed garment
                            </p>
                          </div>

                          <div className="w-full border-t border-white/10 pt-3 text-[10px] uppercase tracking-luxury text-brand-gold">
                            Mentored by {siteConfig.founder.name}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6 space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-[10px] uppercase tracking-editorial text-brand-gold">
                          {slot.cohortLabel}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-brand-white">
                          {slot.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-brand-muted">
                          {slot.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Train With BEEDSTITCHES */}
      <section className="py-20 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  The Mentorship Approach
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
                  Built Inside a Working Fashion House
                </h2>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  Rather than purely theoretical classroom lessons, trainees learn
                  directly inside the BEEDSTITCHES production environment in Ogui New
                  Layout, Enugu. You observe and practice how client commissions are
                  measured, cut, assembled, inspected, and prepared for delivery.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="space-y-3 text-sm text-brand-off-white">
                  {[
                    "Direct mentorship from Founder & Creative Director Iwunna Uchenna Michael",
                    "Hands-on practice with industrial sewing and finishing equipment",
                    "Focus on contemporary African menswear, kaftans, shirts, and two-piece construction",
                    "Quality control discipline that prepares you for independent tailoring or studio work",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-brand-charcoal p-3.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.14} className="lg:col-span-6">
              <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-8 sm:p-10 space-y-6">
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  Start Your Training Enquiry
                </p>
                <h3 className="font-serif text-3xl font-semibold text-brand-white">
                  Ready to Develop Practical Tailoring Skills?
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  Submit a training enquiry through our consultation form (with{" "}
                  <strong className="text-brand-off-white">Fashion Training</strong>{" "}
                  pre-selected) or message us on WhatsApp to discuss your current
                  skill level, training goals, and schedule availability in Enugu.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <Link
                    href="/book-consultation?service=Fashion+Training"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-7 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
                  >
                    <span>{siteConfig.fashionTraining.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={trainingWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-brand-black px-7 py-4 text-xs uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
                  >
                    <MessageCircle className="h-4 w-4 text-brand-gold" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
