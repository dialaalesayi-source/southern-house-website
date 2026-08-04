import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { branches } from "@/data/branches";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";

export default function BranchCards({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-southern-ivory py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div className="text-center md:text-start">
            <p className="text-sm font-semibold uppercase tracking-wide text-funplace-coral">
              {dict.branchesSection.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-southern-navy md:text-4xl">
              {dict.branchesSection.headline}
            </h2>
          </div>
          <Link
            href={`/${locale}/branches`}
            className="text-sm font-semibold text-funplace-coral underline-offset-4 hover:underline"
          >
            {dict.branchesSection.viewAll} {locale === "ar" ? "←" : "→"}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* This grid renders directly from src/data/branches.ts — add a branch
              there and a matching card appears here automatically. */}
          {branches.map((branch, i) => (
            <FadeIn key={branch.id} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-lg bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={branch.image}
                    alt={locale === "ar" ? branch.name.ar : branch.name.en}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge
                    tone={branch.status === "open" ? "open" : "soon"}
                    shimmer={branch.status === "soon"}
                    className="absolute end-3 top-3"
                  >
                    {branch.status === "open" ? dict.branchesSection.statusOpen : dict.branchesSection.statusSoon}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-southern-navy">
                    {locale === "ar" ? branch.name.ar : branch.name.en}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{locale === "ar" ? branch.city.ar : branch.city.en}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-funplace-coral opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {dict.branchesSection.getDirections} {locale === "ar" ? "←" : "→"}
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate">{dict.branchesSection.footnote}</p>
      </Container>
    </section>
  );
}
