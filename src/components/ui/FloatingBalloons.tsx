"use client";

/**
 * Purely decorative, ambient floating balloon shapes for the hero background.
 * aria-hidden since they carry no content. Motion is CSS-driven (animate-float)
 * so it automatically respects the global prefers-reduced-motion rule in globals.css.
 */
const balloons = [
  { color: "#FF5A5F", size: 70, top: "12%", left: "6%", duration: "9s", delay: "0s" },
  { color: "#FFC93C", size: 46, top: "62%", left: "10%", duration: "11s", delay: "1.2s" },
  { color: "#00B8A9", size: 58, top: "20%", left: "90%", duration: "10s", delay: "0.6s" },
  { color: "#FF5A5F", size: 40, top: "70%", left: "88%", duration: "8s", delay: "2s" },
];

export default function FloatingBalloons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {balloons.map((b, i) => (
        <span
          key={i}
          className="absolute animate-float rounded-full opacity-20 blur-[1px]"
          style={{
            backgroundColor: b.color,
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
