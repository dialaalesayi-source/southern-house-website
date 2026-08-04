import Image from "next/image";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { galleryPreview } from "@/data/gallery";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function GalleryPreview({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-funplace-coral">
            {dict.gallery.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-southern-navy md:text-4xl">
            {dict.gallery.headline}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryPreview.map((image, i) => (
            <FadeIn
              key={image.id}
              delay={i * 0.06}
              className={i === 1 || i === 4 ? "row-span-2" : undefined}
            >
              <div
                className={`group relative w-full overflow-hidden rounded-md ${
                  i === 1 || i === 4 ? "h-full min-h-[240px] md:min-h-[340px]" : "h-40 md:h-40"
                }`}
              >
                <Image
                  src={image.src}
                  alt={locale === "ar" ? image.altAr : image.altEn}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href={`/${locale}/gallery`} variant="southern-outline" size="md">
            {dict.gallery.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
