"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

const navItems = [
  { href: "/", label: "Etusivu" },
  { href: "/gallery", label: "Galleria" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15">
            <Image
              src="/images/kaffila.jpg"
              alt="Kaffila logo"
              fill
              className="object-contain scale-[1.15]"
              priority
            />
          </span>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">Kaffila</div>
            <div className="text-xs text-white/60">Tampere • 33100</div>
          </div>
        </Link>

        {/* DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              {it.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/kaffila33100"
              target="_blank"
              rel="noreferrer"
              aria-label="Avaa Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/kaffila33100"
              target="_blank"
              rel="noreferrer"
              aria-label="Avaa Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* BURGER */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-white/10 p-2 text-white ring-1 ring-white/15 transition hover:bg-white/15 md:hidden"
          aria-label="Avaa valikko"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1">
            <div className="h-0.5 w-5 bg-white/90" />
            <div className="h-0.5 w-5 bg-white/90" />
            <div className="h-0.5 w-5 bg-white/90" />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU (right aligned + drop animation) */}
      <div className="md:hidden" role="dialog" aria-label="Mobiilivalikko" aria-hidden={!open}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className={[
              "overflow-hidden",
              "transition-[max-height,opacity,transform] duration-200 ease-out",
              open
                ? "max-h-[340px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2 pointer-events-none",
            ].join(" ")}
          >
            <div className="flex justify-end pb-4 pt-2">
              <div className="w-[min(17rem,100%)]">
                <div className="flex flex-col items-end gap-1.5 text-right">
                  {navItems.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg px-3 py-1.5 text-right text-[13px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {it.label}
                    </Link>
                  ))}

                  {/* Ei viivaa / ei ylimääräistä tilaa */}
                  <div className="mt-1 flex items-center justify-end gap-1.5">
                    <a
                      href="https://www.instagram.com/kaffila33100"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Avaa Instagram"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>

                    <a
                      href="https://www.facebook.com/kaffila33100"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Avaa Facebook"
                      onClick={() => setOpen(false)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
