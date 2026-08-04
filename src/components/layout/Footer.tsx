import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import Container from "@/components/ui/Container";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-southern-charcoal text-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          <span className="font-display text-lg font-semibold">
            {locale === "ar" ? "بيت الجنوب" : "Southern House"}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{dict.footer.tagline}</p>
          <div className="mt-5 flex items-center gap-4" aria-label="Social media">
            {["instagram", "tiktok", "facebook", "snapchat"].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="text-white/60 transition-colors hover:text-white"
              >
                <span className="sr-only">{platform}</span>
                <span aria-hidden="true" className="block h-5 w-5 rounded-full border border-white/40" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {dict.footer.companyHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <Link href={`/${locale}/about`} className="hover:text-white hover:underline">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/branches`} className="hover:text-white hover:underline">
                {dict.nav.branches}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white hover:underline">
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {dict.footer.brandsHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <Image
                src="/images/images/logos/260.JPG"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="rounded-full"
              />
              <Link href={`/${locale}/fun-place`} className="hover:text-white hover:underline">
                {dict.nav.funplace}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/balloons`} className="hover:text-white hover:underline">
                {dict.nav.balloons}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/toys`} className="hover:text-white hover:underline">
                {dict.nav.toys}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {dict.footer.contactHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a href="tel:+966504479295" className="hover:text-white hover:underline">
                {dict.topbar.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${dict.footer.email}`} className="hover:text-white hover:underline">
                {dict.footer.email}
              </a>
            </li>
            <li className="text-white/60">{dict.footer.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/50">
            © {year} {dict.footer.copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
