import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

// Redirects unprefixed paths ("/") to a locale-prefixed path ("/ar" or "/en").
// Locale choice: 1) existing "NEXT_LOCALE" cookie, 2) browser Accept-Language,
// 3) fall back to the default locale (Arabic).
function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as (typeof locales)[number])) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0];
  if (preferred && locales.includes(preferred as (typeof locales)[number])) {
    return preferred;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return;

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip static files, images, and API routes
  matcher: ["/((?!_next|api|images|favicon.ico|.*\\..*).*)"],
};
