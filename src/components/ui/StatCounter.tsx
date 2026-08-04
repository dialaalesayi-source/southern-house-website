"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  /** Numeric portion to count up to, e.g. 2008 or 12. */
  value: number;
  /** Text shown after the number, e.g. "+" in "12+". */
  suffix?: string;
  label: string;
}

/** Counts up from 0 to `value` once it scrolls into view. */
export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      animate={isInView && !shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
    >
      <p className="font-display text-4xl font-semibold text-southern-navy" aria-hidden="true">
        {display}
        {suffix}
      </p>
      {/* Real value for assistive tech, since the animated number updates rapidly */}
      <span className="sr-only">{`${value}${suffix} ${label}`}</span>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate">{label}</p>
    </motion.div>
  );
}
