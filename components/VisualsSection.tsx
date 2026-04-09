"use client";

import { useState } from "react";
import Image from "next/image";
import artists, { visualArchive } from "@/data/djs";
import MediaModal, { type MediaModalItem } from "@/components/MediaModal";
import { useInView } from "@/lib/useInView";

export default function VisualsSection() {
  const { ref, isInView } = useInView();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeMedia, setActiveMedia] = useState<MediaModalItem | null>(null);

  const filters = [
    { id: "all", label: "All", count: visualArchive.length },
    ...artists
      .filter((artist) => artist.additionalVideos.length > 0)
      .map((artist) => ({
        id: artist.id,
        label: artist.name,
        count: artist.additionalVideos.length,
      })),
  ];

  const visibleVideos =
    activeFilter === "all"
      ? visualArchive
      : visualArchive.filter((video) => video.artistId === activeFilter);

  return (
    <>
      <section
        ref={ref}
        id="visuals"
        className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:px-8 sm:py-[7.5rem] lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(182,95,58,0.16),transparent_24%),radial-gradient(circle_at_82%_82%,rgba(88,134,180,0.16),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div
            className={`transition-all duration-[1000ms] ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-white/30">
                  003 — Performance Highlights
                </p>
                <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                  Visual Archive
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
                  Additional performance footage, reframed as a curated archive
                  instead of a wall of identical video boxes.
                </p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/34">
                Use the artist filters to move through the archive by energy,
                texture, and stage language.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.28em] transition sm:text-[11px] ${
                      isActive
                        ? "border-white/25 bg-white text-black"
                        : "border-white/10 text-white/46 hover:border-white/25 hover:text-white/72"
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleVideos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveMedia(video)}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] text-left transition duration-500 hover:border-white/22 hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    style={{ objectPosition: video.posterPosition ?? "center" }}
                    sizes="(min-width: 1280px) 26vw, (min-width: 640px) 42vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white/58 backdrop-blur-sm">
                    {video.artistName}
                  </div>
                  <div className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-black/45 text-white transition group-hover:scale-105 group-hover:border-white/34">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-0.5 h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.34-5.89a1.5 1.5 0 0 0 0-2.54L6.3 2.84Z" />
                    </svg>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/34">
                    {video.artistOrigin}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[0.02em] text-white">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {video.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <MediaModal media={activeMedia} onClose={() => setActiveMedia(null)} />
    </>
  );
}
