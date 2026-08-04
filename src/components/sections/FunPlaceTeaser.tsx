import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function FunPlaceTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative h-[560px] overflow-hidden md:h-[600px]">
      <Image
        src="/images/images/logos/l1.JPG"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(27,58,92,0.7) 0%, rgba(27,58,92,0.35) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <FadeIn className="max-w-md text-center md:text-start">
            <p className="text-sm font-semibold uppercase tracking-wide text-funplace-yellow">
              {dict.funplaceTeaser.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-black text-white md:text-5xl">
              {dict.funplaceTeaser.headline}
            </h2>
            <p className="mt-4 text-base text-white/90">{dict.funplaceTeaser.body}</p>
            <div className="mt-7 flex justify-center md:justify-start">
              <Button href={`/${locale}/fun-place`} variant="funplace-primary" size="lg">
                {dict.funplaceTeaser.cta}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
