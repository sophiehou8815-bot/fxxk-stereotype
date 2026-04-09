"use client";

import { useState } from "react";
import Image from "next/image";
import artists from "@/data/djs";
import MediaModal, { type MediaModalItem } from "@/components/MediaModal";
import { useInView } from "@/lib/useInView";

export default function ArtistsSection() {
  const { ref, isInView } = useInView();
  const [activeMedia, setActiveMedia] = useState<MediaModalItem | null>(null);

  return (
    <>
      <section
        ref={ref}
        id="artists"
        className="relative overflow-hidden bg-black px-6 py-24 sm:px-8 sm:py-[7.5rem] lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(182,86,48,0.12),transparent_24%),radial-gradient(circle_at_12%_86%,rgba(90,128,170,0.12),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className={`transition-all duration-[1000ms] ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-white/30">
              002 — Artists
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                  The Lineup
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
                  Five artists, five different routes into the dance floor. The
                  language changes from set to set, but the emotional temperature
                  never drops.
                </p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/34">
                Each profile is paired with one featured visual. Additional footage
                lives in the archive below so the section stays sharp instead of
                collapsing into a media dump.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {artists.map((artist, index) => {
              const firstVideo = artist.additionalVideos[0] ?? null;
              const videoCount = artist.additionalVideos.length;
              const isSpotlight = artist.id === "wenshuai";
              const needsSoftTreatment = artist.id === "amaze";

              return (
                <article
                  key={artist.id}
                  className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-500 hover:border-white/20 hover:bg-white/[0.05] ${
                    isSpotlight ? "lg:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid h-full ${
                      isSpotlight
                        ? "lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
                        : "md:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.12fr)]"
                    }`}
                  >
                    <div className="relative min-h-[22rem] overflow-hidden bg-[#111] sm:min-h-[26rem]">
                      <Image
                        src={artist.photo}
                        alt={`${artist.name} profile portrait`}
                        fill
                        className={`object-cover transition duration-700 group-hover:scale-[1.03] ${
                          needsSoftTreatment ? "scale-[1.02]" : ""
                        }`}
                        style={{
                          objectPosition: artist.photoPosition ?? "center",
                          ...(needsSoftTreatment
                            ? { filter: "contrast(1.05) saturate(1.05)" }
                            : {}),
                        }}
                        sizes={
                          isSpotlight
                            ? "(min-width: 1024px) 36vw, 100vw"
                            : "(min-width: 1024px) 20vw, (min-width: 768px) 34vw, 100vw"
                        }
                      />
                      {/* Soft-treatment overlays for low-res photos: grain + edge vignette + stronger gradient */}
                      {needsSoftTreatment && (
                        <>
                          <div
                            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.18]"
                            style={{
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                            }}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.45)_100%)]" />
                        </>
                      )}
                      <div
                        className={`absolute inset-0 ${
                          needsSoftTreatment
                            ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.74))]"
                            : "bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]"
                        }`}
                      />
                      <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.32em] text-white/58 backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")} / {artist.origin}
                      </div>
                    </div>

                    <div className="flex h-full flex-col p-6 sm:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-[0.03em] text-white sm:text-[2rem]">
                            {artist.name}
                          </h3>
                          <p className="mt-2 text-[11px] uppercase tracking-[0.32em] text-white/34">
                            {artist.tags.join(" / ")}
                          </p>
                        </div>
                        <div className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/42">
                          {videoCount} visual
                          {videoCount > 1 ? "s" : ""}
                        </div>
                      </div>

                      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/58 sm:text-[15px]">
                        {artist.bio}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {artist.tags.map((tag) => (
                          <span
                            key={`${artist.id}-${tag}`}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/46"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-10">
                        {firstVideo ? (
                          <button
                            type="button"
                            onClick={() => setActiveMedia(firstVideo)}
                            className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/14 bg-white/[0.03] px-5 text-left text-white transition hover:border-white/30 hover:bg-white/[0.06]"
                          >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/80">
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="ml-0.5 h-3 w-3"
                                aria-hidden="true"
                              >
                                <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.34-5.89a1.5 1.5 0 0 0 0-2.54L6.3 2.84Z" />
                              </svg>
                            </span>
                            <span>
                              <span className="block text-[10px] uppercase tracking-[0.28em] text-white/36">
                                Watch Performance
                              </span>
                              <span className="mt-1 block text-sm font-medium tracking-[0.02em]">
                                {firstVideo.title}
                              </span>
                            </span>
                          </button>
                        ) : (
                          <div className="rounded-[1.5rem] border border-dashed border-white/12 px-5 py-4 text-sm leading-relaxed text-white/36">
                            Performance footage coming soon.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <MediaModal media={activeMedia} onClose={() => setActiveMedia(null)} />
    </>
  );
}
