import Link from "next/link";

import { LedComponentsSection } from "@/components/led/LedComponentsSection";
import { LedBenefitsSection } from "@/components/led/LedBenefitsSection";
import { IndoorOutdoorComparisonSection } from "@/components/led/IndoorOutdoorComparisonSection";
import { LedProductGrid } from "@/components/led/LedProductGrid";
import { LedTechnologiesSection } from "@/components/led/LedTechnologiesSection";
import { LedFaqSection } from "@/components/led/LedFaqSection";
import { WhyChooseArozexSection } from "@/components/led/WhyChooseArozexSection";
import { getLedProductPath, ledProducts } from "@/lib/led-products";
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

      <section id="led-products" className="mt-[10px] bg-transparent pb-16 sm:pb-20">
        <div className="w-full">
          <LedProductGrid products={ledProducts} />
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <div className="w-full">
          <div className="mb-6">
            <h2 className="font-black tracking-tight text-brand-ink">
              LED Display Price List in Bangladesh
            </h2>
            <p className="mt-3 w-full text-base leading-7 text-slate-600">
              Explore the latest LED display price in Bangladesh, compare indoor
              and outdoor LED display models, specifications, pixel pitch, and
              pricing to choose the ideal solution for your business.
            </p>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(8,18,37,0.07)]">
            <div className="w-full">
              <table className="w-full table-fixed border-collapse text-left text-sm">
                <thead className="bg-brand-blue text-white">
                  <tr>
                    <th scope="col" className="w-[68%] px-4 py-4 font-bold sm:px-6">
                      Product Name
                    </th>
                    <th scope="col" className="w-[32%] px-4 py-4 text-right font-bold sm:px-6">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ledProducts.map((product) => (
                    <tr key={product.slug} className="transition hover:bg-blue-50/70">
                      <td className="break-words px-4 py-4 font-semibold text-brand-ink sm:px-6">
                        <Link
                          href={getLedProductPath(product)}
                          className="text-brand-blue underline-offset-4 hover:underline"
                        >
                          {product.title}
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-right font-bold text-brand-ink sm:px-6">
                        &#2547; {product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <LedComponentsSection />

      <LedTechnologiesSection />

      <LedBenefitsSection />

      <IndoorOutdoorComparisonSection />

      <WhyChooseArozexSection />

      <LedFaqSection />
    </>
  );
}
