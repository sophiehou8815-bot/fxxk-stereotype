"use client";

import { siteConfig } from "@/data/site";
import { useInView } from "@/lib/useInView";

export default function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden bg-[#060606] px-6 py-24 sm:px-8 sm:py-[7.5rem] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(182,95,58,0.14),transparent_24%),radial-gradient(circle_at_82%_76%,rgba(90,128,170,0.14),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div
          className={`rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10 transition-all duration-[1000ms] ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-white/30">
            005 — Contact
          </p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Book the movement
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/52 sm:text-lg">
                For bookings, press conversations, curatorial invitations, and
                brand-aligned collaborations, reach the project directly below.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/34">
                  Booking
                </p>
                <a
                  href={`mailto:${siteConfig.bookingEmail}`}
                  className="mt-4 block break-all text-sm leading-relaxed text-white/72 transition hover:text-white"
                >
                  {siteConfig.bookingEmail}
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/34">
                  Press
                </p>
                <a
                  href={`mailto:${siteConfig.pressEmail}`}
                  className="mt-4 block break-all text-sm leading-relaxed text-white/72 transition hover:text-white"
                >
                  {siteConfig.pressEmail}
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-white/34">
                  General
                </p>
                <a
                  href={`mailto:${siteConfig.generalEmail}`}
                  className="mt-4 block break-all text-sm leading-relaxed text-white/72 transition hover:text-white"
                >
                  {siteConfig.generalEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
