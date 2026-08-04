import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { locales, isRtl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const siteUrl = "https://www.example.com"; // [PLACEHOLDER] replace with the real production domain

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ar: `${siteUrl}/ar`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: locale === "ar" ? "شركة بيت الجنوب" : "Southern House Company",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${fraunces.variable} ${inter.variable} ${plexArabic.variable}`}>
      <body className={locale === "ar" ? "font-arabic" : "font-sans"}>
        <a href="#main-content" className="skip-link">
          {locale === "ar" ? "تخطَّ إلى المحتوى الرئيسي" : "Skip to main content"}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
