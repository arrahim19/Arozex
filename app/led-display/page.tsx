import { LedComponentsSection } from "@/components/led/LedComponentsSection";
import { LedBenefitsSection } from "@/components/led/LedBenefitsSection";
import { IndoorOutdoorComparisonSection } from "@/components/led/IndoorOutdoorComparisonSection";
import { LedSearchableProductListings } from "@/components/led/LedSearchableProductListings";
import { LedTechnologiesSection } from "@/components/led/LedTechnologiesSection";
import { LedFaqSection } from "@/components/led/LedFaqSection";
import { WhyChooseArozexSection } from "@/components/led/WhyChooseArozexSection";
import { CollectionPageSchema } from "@/components/seo/CollectionPageSchema";
import { ledProducts } from "@/lib/led-products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "LED Display Price in Bangladesh 2026",
  description:
    "LED Display Price in Bangladesh from Arozex. Explore indoor & outdoor LED screens, video walls, expert installation, competitive prices & warranties.",
  pathname: "/led-display",
});

export default function LedDisplayPage() {
  return (
    <>
      <CollectionPageSchema
        name="LED Display Price in Bangladesh 2026"
        url="https://www.arozex.com/led-display/"
        description="LED Display Price in Bangladesh from Arozex. Explore indoor & outdoor LED screens, video walls, expert installation, competitive prices & warranties."
      />

      <section className="mt-[10px] rounded-[10px] px-[15px] pb-14 pt-[20px] sm:pb-16">
        <div className="w-full">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            LED Display Price in Bangladesh 2026
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Arozex Technologies offers competitive LED display price in Bangladesh
            with quality indoor LED displays, outdoor LED screens, LED billboards,
            video walls, and digital signage solutions. We provide expert
            installation, CMS setup, warranty support, and nationwide after-sales
            service.
          </p>
        </div>
      </section>

      <LedSearchableProductListings products={ledProducts} />

      <LedComponentsSection />

      <LedTechnologiesSection />

      <LedBenefitsSection />

      <IndoorOutdoorComparisonSection />

      <WhyChooseArozexSection />

      <LedFaqSection />
    </>
  );
}
