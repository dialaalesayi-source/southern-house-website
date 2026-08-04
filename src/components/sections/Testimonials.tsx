import type { Dictionary } from "@/i18n/get-dictionary";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const partners = ["Al-Bunyan", "Al-Hamat", "Panorama Mall"];
  // Duplicate the list so the marquee loop is seamless
  const loopedPartners = [...partners, ...partners];

  return (
    <section className="bg-southern-navy py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="grid gap-8 sm:grid-cols-2">
          {dict.testimonials.quotes.map((item, i) => (
            <blockquote key={i}>
              <p className="font-display text-lg italic leading-relaxed text-white">“{item.quote}”</p>
              <cite className="mt-3 block text-sm not-italic text-white/60">— {item.attribution}</cite>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-wide text-white/50">
          {dict.testimonials.trustedByLabel}
        </p>
        <div className="relative overflow-hidden" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-16">
            {loopedPartners.map((name, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-semibold text-white/40">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
