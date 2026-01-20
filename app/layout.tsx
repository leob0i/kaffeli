import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/Navbar";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const site = {
  name: "Kaffila",
  address: "Aleksis Kiven katu 11, Tampere, Finland, 33100",
  facebook: "https://www.facebook.com/kaffila33100",
  email: "info@kaffila.fi",
  phone: "0105085100",
  instagram: "https://www.instagram.com/kaffila33100/?hl=fi",
  mapUrl: "https://www.google.com/maps?q=Aleksis+Kiven+katu+11+Tampere+33100",

};

export const metadata: Metadata = {
  title: {
    default: `${site.name} – Kahvila Tampereella`,
    template: `%s – ${site.name}`,
  },
  description:
    "Kaffila Tampereella – tuore kahvi, herkulliset leivonnaiset ja lämmin tunnelma. Aleksis Kiven katu 11, 33100 Tampere.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${site.name} – Kahvila Tampereella`,
    description:
      "Tuore kahvi. Herkulliset leivonnaiset. Suomen herkullisin kahvilakokemus.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-dvh bg-zinc-950 text-zinc-50">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
        >
          Siirry sisältöön
        </a>
        <NavBar />
        <main id="content">{children}</main>
        <footer className="border-t border-white/10 bg-zinc-950">
  <div className="mx-auto w-full max-w-4xl px-4 py-5 sm:px-6">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      {/* LEFT */}
      <div className="min-w-0">
        <p className="text-sm font-semibold tracking-wide text-white">
          {site.name}
        </p>
        <p className="mt-1.5 text-sm text-white/60">
          Tervetuloa kahville – tuoreita herkkuja ja hyvä tunnelma.
        </p>

        {/* Address (left, bottom) */}
        {site.address ? (
          <a
            href={site.mapUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-start gap-2 text-sm text-white/60 hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300/90" />
            <span className="max-w-[28rem]">{site.address}</span>
          </a>
        ) : null}
      </div>

      {/* RIGHT */}
      <div className="flex w-full flex-col gap-2 sm:w-auto sm:items-end">
        {/* Contact */}
        <div className="flex flex-col gap-1.5 text-sm text-white/80">
          {site.phone ? (
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Phone className="h-4 w-4 text-amber-300/90" />
              <span>Puh: {site.phone}</span>
            </a>
          ) : null}

          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <Mail className="h-4 w-4 text-amber-300/90" />
              <span>{site.email}</span>
            </a>
          ) : null}
        </div>

        {/* Social icons */}
        <div className="mt-1 flex items-center gap-2 sm:justify-end">
          {site.facebook ? (
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Facebook className="h-5 w-5 text-white/80" />
            </a>
          ) : null}

          {site.instagram ? (
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Instagram className="h-5 w-5 text-white/80" />
            </a>
          ) : null}
        </div>
      </div>
    </div>

    <div className="mt-4 border-t border-white/10 pt-3 text-xs text-white/45">
      © {new Date().getFullYear()} {site.name}. Kaikki oikeudet pidätetään.
    </div>
  </div>
</footer>



      </body>
    </html>
  );
}
