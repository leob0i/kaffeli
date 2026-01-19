import Image from "next/image";
import { getActivePromo } from "@/lib/promo";

export default async function MonthlyPromo() {
  const promo = await getActivePromo();

  // Jos ei ole aktiivista riviä, näytetään siisti "tyhjä tila" ettei layout jää vajaaksi.
  if (!promo) {
    return (
      <aside className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
        <p className="text-xs font-semibold text-amber-300">Ajankohtaista</p>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Päivitämme tähän ajankohtaiset tarjoukset, uutuudet ja tapahtumat.
        </p>
      </aside>
    );
  }

  const title = (promo.title ?? "").trim();
  const text = (promo.text ?? "").trim();
  const imageSrc = promo.image?.trim() ? `/promos/${promo.image.trim()}` : null;

  return (
    <aside className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <p className="text-xs font-semibold text-amber-300">Ajankohtaista</p>

      {title ? (
        <p className="mt-3 text-lg font-semibold text-white">{title}</p>
      ) : null}

      {text ? (
        <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
      ) : null}

      {imageSrc ? (
        <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image
            src={imageSrc}
            alt={title || "Ajankohtaista"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      ) : null}
    </aside>
  );
}
