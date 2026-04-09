"use client";

import { useEffect } from "react";

export interface MediaModalItem {
  title: string;
  caption?: string;
  src: string;
  poster?: string;
}

interface MediaModalProps {
  media: MediaModalItem | null;
  onClose: () => void;
}

const EMBED_PATTERN = /(youtube\.com|youtu\.be|vimeo\.com)/i;

export default function MediaModal({ media, onClose }: MediaModalProps) {
  useEffect(() => {
    if (!media) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [media, onClose]);

  if (!media) {
    return null;
  }

  const isEmbed = EMBED_PATTERN.test(media.src);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#070707] shadow-[0_20px_120px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.38em] text-white/35">
              Open Visual
            </p>
            <h3 className="mt-2 truncate text-sm font-semibold tracking-[0.04em] text-white sm:text-base">
              {media.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-white/70 transition hover:border-white/30 hover:text-white"
            aria-label="Close media modal"
          >
            ×
          </button>
        </div>

        <div className="bg-black p-3 sm:p-5">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            {isEmbed ? (
              <div className="aspect-video w-full">
                <iframe
                  src={media.src}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={media.title}
                />
              </div>
            ) : (
              <video
                key={media.src}
                className="aspect-video w-full bg-black object-contain"
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={media.poster}
              >
                <source src={media.src} />
              </video>
            )}
          </div>
        </div>

        {media.caption ? (
          <div className="border-t border-white/10 px-5 py-4 sm:px-7">
            <p className="max-w-3xl text-sm leading-relaxed text-white/55">
              {media.caption}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
