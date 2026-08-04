"use client";

import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Element tag to render as — defaults to a div. */
  as?: "div" | "li";
}

/**
 * Scroll-triggered fade + slight upward reveal.
 * Animates once (viewport.once) and fully respects prefers-reduced-motion.
 */
export default function FadeIn({ children, delay = 0, className = "", as = "div" }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Component>
  );
}
