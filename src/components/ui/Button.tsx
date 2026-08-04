import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "funplace-primary" | "funplace-outline" | "southern-primary" | "southern-outline" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 ease-out focus-visible:outline-none";

const sizes: Record<Size, string> = {
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-8 py-4",
};

const variants: Record<Variant, string> = {
  // Fun Place buttons: pill shape — playful, consumer-facing
  "funplace-primary":
    "rounded-full bg-funplace-coral text-white shadow-card hover:shadow-card-hover hover:scale-[1.03] active:scale-[0.98]",
  "funplace-outline":
    "rounded-full border-2 border-white text-white hover:bg-white hover:text-funplace-coral",
  // Southern House buttons: rounded rectangle — composed, corporate
  "southern-primary":
    "rounded-md bg-southern-navy text-white hover:bg-southern-navy/90 active:scale-[0.98]",
  "southern-outline":
    "rounded-md border-2 border-southern-navy text-southern-navy hover:bg-southern-navy hover:text-white",
  white: "rounded-full bg-white text-funplace-coral hover:scale-[1.03] active:scale-[0.98] shadow-card",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

/** Renders as a Next.js Link when `href` is given, otherwise a <button>. */
export default function Button({
  variant = "funplace-primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps &
  (
    | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  )) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
