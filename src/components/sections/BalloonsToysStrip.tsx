import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function BalloonsToysStrip({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="bg-funplace-cool py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FadeIn>
          <Link
            href={`/${locale}/balloons`}
            className="flex h-full items-center gap-5 rounded-lg bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-md">
              <Image src="/images/images/logos/balloons.JPG" alt="" fill sizes="120px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-southern-navy">
                {dict.balloonsToysStrip.balloons.headline}
              </h3>
              <p className="mt-1.5 text-sm text-slate">{dict.balloonsToysStrip.balloons.description}</p>
              <span className="mt-3 inline-block rounded-full bg-southern-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-southern-terracotta">
                {dict.balloonsToysStrip.balloons.safetyBadge}
              </span>
              <p className="mt-3 text-sm font-semibold text-funplace-coral">
                {dict.balloonsToysStrip.balloons.cta} <span aria-hidden="true">{arrow}</span>
              </p>
            </div>
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Link
            href={`/${locale}/toys`}
            className="flex h-full items-center gap-5 rounded-lg bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-md">
              <Image src="/images/images/logos/toys.jpg" alt="" fill sizes="120px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-southern-navy">
                {dict.balloonsToysStrip.toys.headline}
              </h3>
              <p className="mt-1.5 text-sm text-slate">{dict.balloonsToysStrip.toys.description}</p>
              <p className="mt-3 text-sm font-semibold text-funplace-coral">
                {dict.balloonsToysStrip.toys.cta} <span aria-hidden="true">{arrow}</span>
              </p>
            </div>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
