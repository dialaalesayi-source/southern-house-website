import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

export default function OurBrands({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={dict.brands.eyebrow} headline={dict.brands.headline} className="mb-12" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Fun Place — dominant feature card, ~2x weight */}
          <FadeIn className="md:col-span-7">
            <Link
              href={`/${locale}/fun-place`}
              className="group block h-full overflow-hidden rounded-lg bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
            >
              <div className="relative h-64 w-full overflow-hidden md:h-[26rem]">
                <Image
                  src="/images/images/logos/konfodah fun place.JPG"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge tone="yellow" className="absolute start-4 top-4">
                  {dict.brands.funplace.badge}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-southern-navy">{dict.brands.funplace.name}</h3>
                <p className="mt-2 text-sm text-slate">{dict.brands.funplace.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-funplace-coral">
                  {dict.brands.funplace.cta} <span aria-hidden="true">{arrow}</span>
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Secondary brands — stacked, visibly smaller */}
          <div className="flex flex-col gap-6 md:col-span-5">
            <FadeIn delay={0.1} className="flex-1">
              <BrandCard
                href={`/${locale}/balloons`}
                image="/images/images/logos/balloons.JPG"
                name={dict.brands.balloons.name}
                description={dict.brands.balloons.description}
                cta={dict.brands.balloons.cta}
                arrow={arrow}
              />
            </FadeIn>
            <FadeIn delay={0.2} className="flex-1">
              <BrandCard
                href={`/${locale}/toys`}
                image="/images/images/logos/toys.jpg"
                name={dict.brands.toys.name}
                description={dict.brands.toys.description}
                cta={dict.brands.toys.cta}
                arrow={arrow}
              />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

function BrandCard({
  href,
  image,
  name,
  description,
  cta,
  arrow,
}: {
  href: string;
  image: string;
  name: string;
  description: string;
  cta: string;
  arrow: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full items-center gap-4 rounded-lg bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
        <Image
          src={image}
          alt=""
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-southern-navy">{name}</h3>
        <p className="mt-1 text-xs text-slate">{description}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-funplace-coral">
          {cta} <span aria-hidden="true">{arrow}</span>
        </span>
      </div>
    </Link>
  );
}
