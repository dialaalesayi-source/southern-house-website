type Tone = "coral" | "yellow" | "open" | "soon" | "white-on-navy";

const tones: Record<Tone, string> = {
  coral: "bg-funplace-coral text-white",
  yellow: "bg-funplace-yellow text-southern-charcoal",
  open: "bg-status-open text-white",
  soon: "bg-status-soon text-white",
  "white-on-navy": "bg-white/15 text-white",
};

interface BadgeProps {
  tone?: Tone;
  shimmer?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Small pill label — used for brand/flagship tags and branch status. */
export default function Badge({ tone = "coral", shimmer = false, className = "", children }: BadgeProps) {
  return (
    <span
      className={`relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
      {shimmer && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.5),transparent)] bg-[length:200%_100%]"
        />
      )}
    </span>
  );
}
