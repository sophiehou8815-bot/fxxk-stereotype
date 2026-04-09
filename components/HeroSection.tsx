"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useInView } from "@/lib/useInView";

export default function HeroSection() {
  const { ref, isInView } = useInView(0.12);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 py-32 sm:px-8 lg:px-10"
    >
      {/* Background campaign image — subtle, atmospheric */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/brand/campaign-art.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Radial colour accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(184,94,57,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(94,145,198,0.16),_transparent_32%)]" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-5xl text-center transition-all duration-[1200ms] ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Eyebrow */}
        <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-white/35 sm:text-[11px]">
          {siteConfig.heroEyebrow}
        </p>

        {/* Title */}
        <h1 className="text-[3.8rem] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[10.5rem]">
          FXXK
          <br />
          <span className="bg-[linear-gradient(95deg,#ffffff_0%,rgba(255,255,255,0.78)_55%,rgba(226,148,111,0.95)_100%)] bg-clip-text text-transparent">
            STEREOTYPE
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg md:text-xl">
          {siteConfig.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/38 sm:text-base">
          {siteConfig.heroSummary}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#artists"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-black transition hover:bg-white/92"
          >
            Meet the DJs
          </a>
          <a
            href="#visuals"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/35 hover:bg-white/6"
          >
            Enter the Archive
          </a>
          <a
            href="#music"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/35 hover:bg-white/6 hover:text-white"
          >
            Listen to Our Mixes
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-2xl gap-3 sm:grid-cols-3">
          {siteConfig.heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/32">
                {stat.label}
              </p>
              <p className="mt-3 text-lg font-semibold tracking-[0.04em] text-white sm:text-xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 animate-pulse">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
