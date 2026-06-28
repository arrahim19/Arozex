import { LedProductGrid } from "@/components/led/LedProductGrid";
import { ledProducts } from "@/lib/led-products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Outdoor LED Display",
  description:
    "Explore outdoor LED display screens, LED billboards, outdoor LED modules, and roadside digital signage solutions from Arozex Technologies.",
  pathname: "/led-display/outdoor-led-display",
});

const outdoorProducts = ledProducts.filter((product) => product.category === "Outdoor");

export default function OutdoorLedDisplayPage() {
  return (
    <>
      <section className="mt-[10px] rounded-[10px] px-[15px] pb-14 pt-[20px] sm:pb-16">
        <div className="w-full">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            Outdoor LED Display
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Arozex Technologies offers outdoor LED display screens, LED
            billboards, outdoor LED modules, roadside advertising displays, and
            durable digital signage solutions with installation and support.
          </p>
        </div>
      </section>

      <section id="outdoor-led-products" className="mt-[10px] bg-transparent pb-16 sm:pb-20">
        <div className="w-full">
          <LedProductGrid products={outdoorProducts} />
        </div>
      </section>
    </>
  );
}
