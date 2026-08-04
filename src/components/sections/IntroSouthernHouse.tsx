import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function IntroSouthernHouse({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-southern-ivory py-16 md:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/placeholder-brand-funplace.svg"
              alt={locale === "ar" ? "شعار شركة بيت الجنوب" : "Southern House Company logo"}
              width={64}
              height={64}
              className="rounded-xl"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="text-center md:col-span-6 md:col-start-7 md:text-start">
          <p className="text-sm font-semibold uppercase tracking-wide text-funplace-coral">
            {dict.intro.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-southern-navy md:text-4xl">
            {dict.intro.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-southern-charcoal md:mx-0">
            {dict.intro.body}
          </p>
          <a
            href={`/${locale}/about`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-funplace-coral underline-offset-4 hover:underline"
          >
            {dict.intro.cta}
            <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
