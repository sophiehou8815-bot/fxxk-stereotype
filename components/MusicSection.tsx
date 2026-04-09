"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import allArtists from "@/data/djs";
import type { Artist, ArtistTrack } from "@/data/djs";
import { useInView } from "@/lib/useInView";

function formatTime(value: number) {
  if (!Number.isFinite(value) || value < 0) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}

interface TrackWithArtist extends ArtistTrack {
  artist: Artist;
}

export default function MusicSection() {
  const { ref, isInView } = useInView();

  const musicArtists = useMemo(
    () => allArtists.filter((a) => a.tracks && a.tracks.length > 0),
    [],
  );

  const allTracks: TrackWithArtist[] = useMemo(
    () =>
      musicArtists.flatMap((a) =>
        (a.tracks ?? []).map((t) => ({ ...t, artist: a })),
      ),
    [musicArtists],
  );

  const [activeTrackId, setActiveTrackId] = useState(allTracks[0]?.id ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const autoplayOnChangeRef = useRef(false);

  const activeTrack =
    allTracks.find((t) => t.id === activeTrackId) ?? allTracks[0] ?? null;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrack) {
      return;
    }

    audio.src = activeTrack.src;
    audio.load();

    if (autoplayOnChangeRef.current) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
      autoplayOnChangeRef.current = false;
    }
  }, [activeTrack]);

  if (allTracks.length === 0 || !activeTrack) {
    return null;
  }

  const handleSelectTrack = (trackId: string) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (trackId === activeTrackId) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
      return;
    }

    setCurrentTime(0);
    setDuration(0);
    setActiveTrackId(trackId);
    autoplayOnChangeRef.current = true;
  };

  const handleProgressChange = (value: number) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const displayArtist = activeTrack.artist;

  return (
    <section
      ref={ref}
      id="music"
      className="relative overflow-hidden bg-black px-6 py-24 sm:px-8 sm:py-[7.5rem] lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(86,126,168,0.18),transparent_26%),radial-gradient(circle_at_80%_72%,rgba(184,94,57,0.16),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div
          className={`transition-all duration-[1000ms] ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.42em] text-white/30">
            004 — Music
          </p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Listen
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
                Original tracks and curated mixes from the FXXK STEREOTYPE
                lineup — presented inside the same editorial atmosphere as the
                live campaign.
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/34">
              Select a track below to start listening. The player stays active as
              you scroll the rest of the site.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1.18fr)]">
          <div
            className={`transition-all duration-[1100ms] delay-100 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={displayArtist.editorialImage ?? displayArtist.photo}
                  alt={`${displayArtist.name} music portrait`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(min-width: 1024px) 30vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.7))]" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-xl font-semibold tracking-[0.03em] text-white sm:text-2xl">
                    {displayArtist.name}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/50">
                    {displayArtist.origin}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-[1200ms] delay-150 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-white/34">
                    Now Loaded
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[0.02em] text-white">
                    {activeTrack.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/46">
                    {activeTrack.artist.name} — {activeTrack.note}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectTrack(activeTrack.id)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-white/34">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  value={currentTime}
                  onChange={(event) =>
                    handleProgressChange(Number(event.target.value))
                  }
                  className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-white"
                  aria-label="Track progress"
                />
              </div>

              <div className="mt-8 space-y-6">
                {musicArtists.map((musicArtist) => {
                  const artistTracks = allTracks.filter(
                    (t) => t.artist.id === musicArtist.id,
                  );

                  return (
                    <div key={musicArtist.id}>
                      <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-white/34">
                        {musicArtist.name}
                      </p>
                      <div className="space-y-3">
                        {artistTracks.map((track, index) => {
                          const isActive = track.id === activeTrack.id;

                          return (
                            <button
                              key={track.id}
                              type="button"
                              onClick={() => handleSelectTrack(track.id)}
                              className={`flex w-full items-center gap-4 rounded-[1.4rem] border px-4 py-4 text-left transition ${
                                isActive
                                  ? "border-white/22 bg-white/[0.07]"
                                  : "border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.05]"
                              }`}
                            >
                              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-[11px] uppercase tracking-[0.16em] text-white/56">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium tracking-[0.02em] text-white">
                                  {track.title}
                                </p>
                                <p className="mt-1 text-xs text-white/40">
                                  {track.note}
                                </p>
                              </div>
                              <span className="text-[10px] uppercase tracking-[0.28em] text-white/36">
                                {isActive && isPlaying ? "Playing" : "Ready"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />
    </section>
  );
}
