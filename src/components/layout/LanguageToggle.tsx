"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

interface LanguageToggleProps {
  currentLocale: Locale;
  variant?: "topbar" | "menu";
}

/** Swaps the locale segment in the URL and remembers the choice in a cookie. */
export default function LanguageToggle({ currentLocale, variant = "topbar" }: LanguageToggleProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  }

  return (
    <div className={variant === "topbar" ? "flex items-center gap-1" : "flex items-center gap-2"}>
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          <button
            type="button"
            onClick={() => switchTo(locale)}
            aria-current={locale === currentLocale ? "true" : undefined}
            className={`text-xs font-medium transition-opacity ${
              locale === currentLocale ? "opacity-100 underline" : "opacity-70 hover:opacity-100"
            } ${variant === "topbar" ? "text-white" : "text-southern-charcoal"}`}
          >
            {localeNames[locale]}
          </button>
          {i < locales.length - 1 && (
            <span className={variant === "topbar" ? "mx-1.5 text-white/40" : "mx-1.5 text-slate/40"}>/</span>
          )}
        </span>
      ))}
    </div>
  );
}
