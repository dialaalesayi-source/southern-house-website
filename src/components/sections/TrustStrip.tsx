import type { Dictionary } from "@/i18n/get-dictionary";
import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";

export default function TrustStrip({ dict }: { dict: Dictionary }) {
  const stats = [
    { value: Number(dict.trustStrip.founded.value), suffix: "", label: dict.trustStrip.founded.label },
    { value: 12, suffix: "+", label: dict.trustStrip.branches.label },
    { value: Number(dict.trustStrip.funplaceLocations.value), suffix: "", label: dict.trustStrip.funplaceLocations.label },
    { value: 18, suffix: "+", label: dict.trustStrip.years.label },
  ];

  return (
    <section className="border-b border-black/5 bg-white py-10">
      <Container className="grid grid-cols-2 gap-8 divide-y divide-black/5 md:grid-cols-4 md:divide-y-0 md:divide-x rtl:md:divide-x-reverse">
        {stats.map((stat, i) => (
          <div key={i} className="pt-8 first:pt-0 md:pt-0 md:px-4">
            <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
          </div>
        ))}
      </Container>
    </section>
  );
}
