interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
  className?: string;
}

/** Consistent eyebrow-label + headline pattern used across homepage sections. */
export default function SectionHeading({
  eyebrow,
  headline,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-start";
  const eyebrowColor = tone === "dark" ? "text-funplace-coral" : "text-funplace-yellow";
  const headlineColor = tone === "dark" ? "text-southern-navy" : "text-white";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-wide ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display text-3xl font-semibold md:text-4xl ${headlineColor}`}>{headline}</h2>
    </div>
  );
}
