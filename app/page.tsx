import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MonthlyPromo from "@/components/MonthlyPromo";

const SITE = {
  name: "Kaffila",
  address: "Aleksis Kiven katu 11, Tampere, Finland, 33100",
  facebook: "https://www.facebook.com/kaffila33100",

  email: "info@kaffila.fi",
  phone: "0105085100",

  mapEmbedUrl:
    "https://www.google.com/maps?q=Aleksis%20Kiven%20katu%2011%20Tampere%2033100&output=embed",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/kaffila.counter.jpg"
            alt="Kaffila – kahvilan tunnelmaa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(251,191,36,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
        </div>

        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="h-[34px]" aria-hidden="true" />


           <h1 className="mt-6 font-[var(--font-playfair)] font-semibold text-5xl leading-none tracking-[0.01em] text-white sm:text-7xl">
  {SITE.name}
</h1>


            <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">
              Kaffila on paikka, jossa tuore kahvi, herkut ja lämmin tunnelma
              kohtaavat. Poikkea hetkeksi ja nauti.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#sijainti"
                className="inline-flex justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                Näytä sijainti
              </a>
              <Link
                href="/gallery"
                className="inline-flex justify-center rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
              >
                Katso galleria
              </Link>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                Facebook
              </a>
            </div>
          </div>
        </Container>
      </section>

      <MonthlyPromo />

      {/* HIGHLIGHTS */}
      <section className="bg-zinc-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
  variant="dark"
  kicker="Kaffila"
  title="Laatu, joka näkyy — ja maistuu"
  description="Kolme asiaa, joista Kaffila tunnetaan. Vaihda tekstit vastaamaan todellista tarjontaa."
/>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tuore kahvi",
                desc: "Huolella valitut pavut ja tasalaatuinen valmistus — joka kupissa.",
              },
              {
                title: "Leivonnaiset & herkut",
                desc: "Klassikot ja kausimaut. Päivän vitriini elää sesongin mukaan.",
              },
              {
                title: "Lämmin tunnelma",
                desc: "Pehmeä paikka arkeen: yksin, ystävien kanssa tai etätöissä.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-lg font-semibold text-white">{c.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

           {/* PHOTO STRIPE */}
      <section className="bg-zinc-950 pb-16">
        <Container>
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
                >
                  <Image
                    src={`/images/etusivu/0${n}.jpg`}
                    alt={`Kaffila tunnelmakuva ${n}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            <Link
              href="/gallery"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 sm:bottom-4 sm:right-4"
              aria-label="Katso koko galleriamme"
            >
              Katso koko galleriamme →
            </Link>
          </div>
        </Container>
      </section>


      {/* LOCATION */}
      <section id="sijainti" className="bg-zinc-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
  variant="dark"
  kicker="Sijainti"
  title="Tervetuloa käymään"
  description="Aleksis Kiven katu 11, 33100 Tampere. Aukioloajat voi lisätä footerin lisäksi myös tähän."
/>


          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* LEFT: INFO CARD (locked to 360px) */}
            <div className="h-[360px] rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 lg:self-start">
              <div className="grid h-full gap-4 sm:grid-cols-2">
                {/* Aukioloajat */}
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold text-amber-300">
                    Aukioloajat
                  </p>

                  <dl className="mt-2 divide-y divide-white/10 text-sm">
                    {[
                      { day: "Maanantai", hours: "9.00–19.00" },
                      { day: "Tiistai", hours: "9.00–19.00" },
                      { day: "Keskiviikko", hours: "9.00–19.00" },
                      { day: "Torstai", hours: "9.00–19.00" },
                      { day: "Perjantai", hours: "9.00–19.00" },
                      { day: "Lauantai", hours: "10.00–18.00" },
                      { day: "Sunnuntai", hours: "10.00–16.00" },
                    ].map((row) => (
                      <div
                        key={row.day}
                        className="flex items-center justify-between py-2"
                      >
                        <dt className="text-white/70">{row.day}</dt>
                        <dd className="font-semibold text-white tabular-nums">
                          {row.hours}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Yhteystiedot + Osoite */}
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold text-amber-300">
                    Yhteystiedot
                  </p>

                  <div className="mt-2 space-y-2 text-sm">
  {/* 1) Sähköposti */}
  <a
    href={`mailto:${SITE.email}`}
    className="block w-fit font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
  >
    {SITE.email}
  </a>

  {/* 2) Puhelin */}
  <a
    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
    className="block w-fit font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
  >
    {SITE.phone}
  </a>

  {/* 3) Facebook */}
  <a
    href={SITE.facebook}
    target="_blank"
    rel="noreferrer"
    className="block w-fit font-semibold text-white underline underline-offset-4 decoration-white/30 hover:decoration-white"
  >
    Facebook-sivu
  </a>

  {/* Osoite boksi */}
  <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
    <p className="text-xs font-semibold text-amber-300">Osoite</p>
    <p className="mt-2 text-sm text-white/70">{SITE.address}</p>
  </div>
</div>

                </div>
              </div>
            </div>

            {/* RIGHT: MAP (locked to 360px) */}
            <div className="h-[360px] overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 lg:self-start">
              <iframe
                title="Kaffila kartta"
                src={SITE.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
