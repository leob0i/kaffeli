"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function GalleryGrid({ count = 18 }: { count?: number }) {
  const images = useMemo(
    () => Array.from({ length: count }, (_, i) => `/images/${pad2(i + 1)}.jpg`),
    [count]
  );

  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((v) => (v === null ? null : Math.min(v + 1, images.length - 1)));
      if (e.key === "ArrowLeft") setActive((v) => (v === null ? null : Math.max(v - 1, 0)));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <div className="columns-2 gap-4 space-y-4 sm:columns-3 lg:columns-4">
        {images.map((src, idx) => (
          <button
            key={src}
            type="button"
            className="group relative w-full overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
            onClick={() => setActive(idx)}
            aria-label={`Avaa kuva ${idx + 1}`}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={src}
                alt={`Kaffila galleria kuva ${idx + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={idx < 4}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Kuva suurennettuna"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={images[active]}
                alt={`Kaffila galleria kuva ${active + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-white/10 bg-black px-4 py-3 text-white">
              <div className="text-sm text-white/75">
                {active + 1} / {images.length}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/15 disabled:opacity-40"
                  onClick={() => setActive((v) => (v === null ? null : Math.max(v - 1, 0)))}
                  disabled={active === 0}
                >
                  Edellinen
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/15 disabled:opacity-40"
                  onClick={() => setActive((v) => (v === null ? null : Math.min(v + 1, images.length - 1)))}
                  disabled={active === images.length - 1}
                >
                  Seuraava
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-amber-400/90 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
                  onClick={() => setActive(null)}
                >
                  Sulje
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
