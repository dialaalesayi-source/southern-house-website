import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import FloatingBalloons from "@/components/ui/FloatingBalloons";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative flex min-h-[90vh] items-end overflow-hidden md:min-h-[85vh]">
      <Image
        src="/images/images/logos/fun-place-lulu.JPG"
        alt={dict.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(27,58,92,0.6) 0%, rgba(27,58,92,0.15) 55%, transparent 100%)",
        }}
      />
      <FloatingBalloons />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-32 text-center md:px-10 md:pb-28">
        <FadeIn>
          <Badge tone="white-on-navy" className="mx-auto">
            {dict.hero.badge}
          </Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-black leading-tight text-white md:text-6xl">
            {dict.hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">{dict.hero.subheadline}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`/${locale}/fun-place`} variant="funplace-primary" size="lg" className="w-full sm:w-auto">
              {dict.hero.ctaPrimary}
            </Button>
            <Button href={`/${locale}/fun-place/parties`} variant="funplace-outline" size="lg" className="w-full sm:w-auto">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 z-10 hidden justify-center md:flex"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
          <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
