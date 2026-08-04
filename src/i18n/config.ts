// Central i18n configuration.
// Add a locale here and drop a matching JSON file in /messages to support a new language.
export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

// Arabic is the default — this is a Saudi-market business site, so RTL/Arabic
// is the primary experience and English is the secondary audience.
export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
};

export function isRtl(locale: Locale): boolean {
  return locale === "ar";
}
