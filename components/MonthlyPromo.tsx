import Container from "@/components/Container";
import { getActivePromo } from "@/lib/promo";

export default async function MonthlyPromo() {
  const promo = await getActivePromo();
  if (!promo) return null;

  return (
    <section className="bg-zinc-950 py-6 sm:py-8">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 sm:p-6">
            {/* pehmeä “glow” taustaan */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-5 w-1.5 rounded-full bg-amber-300/90" />
                <p className="text-[10px] font-semibold tracking-[0.28em] text-white/70">
                  AJANKOHTAISTA
                </p>
              </div>

              <h2 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {promo.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                {promo.text}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
