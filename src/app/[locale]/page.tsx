import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import IntroSouthernHouse from "@/components/sections/IntroSouthernHouse";
import OurBrands from "@/components/sections/OurBrands";
import FunPlaceTeaser from "@/components/sections/FunPlaceTeaser";
import BirthdayBanner from "@/components/sections/BirthdayBanner";
import BalloonsToysStrip from "@/components/sections/BalloonsToysStrip";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BranchCards from "@/components/sections/BranchCards";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustStrip dict={dict} />
      <IntroSouthernHouse locale={locale} dict={dict} />
      <OurBrands locale={locale} dict={dict} />
      <FunPlaceTeaser locale={locale} dict={dict} />
      <BirthdayBanner locale={locale} dict={dict} />
      <BalloonsToysStrip locale={locale} dict={dict} />
      <WhyChooseUs dict={dict} />
      <BranchCards locale={locale} dict={dict} />
      <GalleryPreview locale={locale} dict={dict} />
      <Testimonials dict={dict} />
    </>
  );
}
