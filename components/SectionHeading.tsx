// components/SectionHeading.tsx
type Props = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  variant = "light",
}: Props) {
  const isDark = variant === "dark";

  const wrapAlign = align === "center" ? "mx-auto text-center" : "";
  const kickerClass = isDark ? "text-amber-300" : "text-amber-800";
  const titleClass = isDark ? "text-white" : "text-zinc-950";
  const descClass = isDark ? "text-white/70" : "text-zinc-600";

  return (
    <div className={`max-w-2xl ${wrapAlign}`}>
      {kicker ? (
        <p className={`text-xs font-semibold tracking-wide uppercase ${kickerClass}`}>
          {kicker}
        </p>
      ) : null}

      <h2
        className={`mt-3 font-[var(--font-playfair)] text-3xl tracking-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>

      {description ? (
        <p className={`mt-3 text-base leading-7 ${descClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
