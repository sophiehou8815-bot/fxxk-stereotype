"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useInView } from "@/lib/useInView";

export default function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden bg-[#060606] px-6 py-24 sm:px-8 sm:py-[7.5rem] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,90,57,0.16),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(92,130,175,0.12),transparent_26%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(320px,0.75fr)_minmax(0,1fr)] lg:items-start">
        <div
          className={`transition-all duration-[1000ms] ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-white/30">
            001 — Manifesto
          </p>
          <h2 className="max-w-md text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
            {siteConfig.aboutTitle}
          </h2>

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
            <div className="relative aspect-[4/5]">
              <Image
                src="/assets/brand/campaign-art.jpg"
                alt="Campaign artwork for FXXK STEREOTYPE"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.78))]" />
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/38">
                Campaign Note
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/52">
                Built to feel like a live campaign rather than a passive tour page:
                editorial, urgent, and impossible to flatten into cliché.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-[1100ms] delay-100 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            {siteConfig.aboutBody.split("\n\n").map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-white/62 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {siteConfig.aboutMarkers.map((marker) => (
              <span
                key={marker}
                className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/44 transition hover:border-white/25 hover:text-white/72"
              >
                {marker}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
