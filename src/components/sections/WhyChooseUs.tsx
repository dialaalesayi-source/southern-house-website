import type { Dictionary } from "@/i18n/get-dictionary";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const icons = [
  // Safety first — shield
  <path key="safety" d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />,
  // 18+ years of trust — heart
  <path key="trust" d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 0.5-0.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" />,
  // Unforgettable experiences — star
  <path key="fun" d="M12 2l2.6 6.6L21 9.3l-5 4.6 1.4 6.9L12 17.6 6.6 20.8 8 13.9 3 9.3l6.4-0.7z" />,
  // Nationwide presence — map pin
  <path key="map" d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />,
];

export default function WhyChooseUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading headline={dict.whyChooseUs.headline} className="mb-14" />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {dict.whyChooseUs.pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1} className="flex flex-col items-center text-center">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? "rgba(255,90,95,0.1)" : "rgba(0,184,169,0.1)",
                }}
                aria-hidden="true"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={i % 2 === 0 ? "#FF5A5F" : "#00B8A9"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[i]}
                </svg>
              </span>
              <h3 className="mt-4 text-base font-semibold text-southern-navy">{pillar.title}</h3>
              <p className="mt-2 max-w-[220px] text-sm text-slate">{pillar.body}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
