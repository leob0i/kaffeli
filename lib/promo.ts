import Papa from "papaparse";



export type PromoRow = {
  active: string;
  title: string;
  text: string;
  ctaText?: string;
  ctaUrl?: string;
  image?: string;
};

function isValidUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

export async function getActivePromo(): Promise<PromoRow | null> {
  const url = process.env.SHEET_PROMO_CSV_URL;

  // Ei vielä Sheets-valmis → ei näytetä osiota, mutta EI kaadeta sivua
  if (!url || url.includes("PASTAAS_TÄHÄN") || !isValidUrl(url)) {
    return null;
  }

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) return null;

  const csv = await res.text();

  const parsed = Papa.parse<PromoRow>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  const rows = (parsed.data || []).filter(Boolean) as PromoRow[];
  const active = rows.find((r) => String(r.active).toUpperCase() === "TRUE");
  return active ?? null;
}
