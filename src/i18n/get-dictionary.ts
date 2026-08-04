import "server-only";
import type { Locale } from "./config";

// Dictionaries are code-split per locale so visitors only download the
// language they're viewing.
const dictionaries = {
  en: () => import("../../messages/en.json").then((m) => m.default),
  ar: () => import("../../messages/ar.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
