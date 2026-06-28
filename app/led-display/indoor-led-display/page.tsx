import { LedProductGrid } from "@/components/led/LedProductGrid";
import { ledProducts } from "@/lib/led-products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Indoor LED Display",
  description:
    "Explore indoor LED display solutions from Arozex Technologies for meeting rooms, showrooms, retail spaces, control rooms, and premium indoor signage.",
  pathname: "/led-display/indoor-led-display",
});

const indoorProducts = ledProducts.filter((product) => product.category === "Indoor");

export default function IndoorLedDisplayPage() {
  return (
    <>
      <section className="mt-[10px] rounded-[10px] px-[15px] pb-14 pt-[20px] sm:pb-16">
        <div className="w-full">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            Indoor LED Display
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Arozex Technologies provides high-quality indoor LED display
            solutions for boardrooms, retail stores, showrooms, conference rooms,
            control rooms, video walls, and premium indoor digital signage.
          </p>
        </div>
      </section>

      <section id="indoor-led-products" className="mt-[10px] bg-transparent pb-16 sm:pb-20">
        <div className="w-full">
          <LedProductGrid products={indoorProducts} />
        </div>
      </section>
    </>
  );
}
