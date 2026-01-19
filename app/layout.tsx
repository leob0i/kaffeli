import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const site = {
  name: "Kaffila",
  address: "Aleksis Kiven katu 11, Tampere, Finland, 33100",
  facebook: "https://www.facebook.com/kaffila33100",
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
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="font-semibold text-white">Kaffila</p>
                <p className="mt-2 text-sm text-white/70">{site.address}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Aukiolo</p>
                <p className="mt-2 text-sm text-white/70">
                  Päivitä tähän aukioloajat (esim. Ma–Pe 08–18, La 10–16)
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Yhteys</p>
                <p className="mt-2 text-sm text-white/70">
                  Seuraa ajankohtaista ja päivän valikoimaa Facebookissa.
                </p>
                <a
                  className="mt-3 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  Avaa Facebook-sivu
                </a>
              </div>
            </div>
            <p className="mt-10 text-xs text-white/50">
              © {new Date().getFullYear()} Kaffila. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
