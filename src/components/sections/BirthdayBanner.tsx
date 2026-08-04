import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function BirthdayBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-funplace-coral py-16 md:py-20">
      <Container className="flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center">
          {/* Small decorative balloon cluster */}
          <div aria-hidden="true" className="mb-6 flex items-end gap-2">
            <span className="h-9 w-7 rounded-full bg-white/90" />
            <span className="h-12 w-9 rounded-full bg-funplace-yellow" />
            <span className="h-9 w-7 rounded-full bg-white/90" />
          </div>

          <h2 className="max-w-xl font-display text-3xl font-semibold text-white md:text-4xl">
            {dict.birthdayBanner.headline}
          </h2>

          <div className="mt-7">
            <Button
              href={`/${locale}/fun-place/parties`}
              variant="white"
              size="lg"
              className="motion-safe:animate-[pulse_2.5s_ease-in-out_infinite]"
            >
              {dict.birthdayBanner.cta}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
