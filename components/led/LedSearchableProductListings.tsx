"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { getLedProductPath, type LedProduct } from "@/lib/led-products";

import { LedProductGrid } from "./LedProductGrid";

type LedSearchableProductListingsProps = {
  products: LedProduct[];
};

function normalizeSearchValue(value: string) {
  return value.toLowerCase().replace(/[^\w\s.]/g, " ").replace(/\s+/g, " ").trim();
}

function getSearchableProductText(product: LedProduct) {
  return normalizeSearchValue(
    [
      product.title,
      product.category,
      product.pixelPitch,
      product.shortDescription,
      product.description,
      ...product.features,
      ...product.specifications.flatMap((item) => [item.label, item.value]),
    ].join(" "),
  );
}

export function LedSearchableProductListings({
  products,
}: LedSearchableProductListingsProps) {
  return (
    <Suspense fallback={<ProductListings products={products} searchQuery="" rawSearchQuery="" />}>
      <SearchableProductListings products={products} />
    </Suspense>
  );
}

function SearchableProductListings({ products }: LedSearchableProductListingsProps) {
  const searchParams = useSearchParams();
  const searchQuery = normalizeSearchValue(searchParams.get("q") ?? "");
  const rawSearchQuery = searchParams.get("q") ?? "";

  return (
    <ProductListings
      products={products}
      searchQuery={searchQuery}
      rawSearchQuery={rawSearchQuery}
    />
  );
}

function ProductListings({
  products,
  searchQuery,
  rawSearchQuery,
}: LedSearchableProductListingsProps & {
  searchQuery: string;
  rawSearchQuery: string;
}) {
  const visibleProducts = searchQuery
    ? products.filter((product) => getSearchableProductText(product).includes(searchQuery))
    : products;

  return (
    <>
      <section id="led-products" className="mt-[10px] bg-transparent pb-16 sm:pb-20">
        <div className="w-full">
          {visibleProducts.length ? (
            <LedProductGrid products={visibleProducts} />
          ) : (
            <div className="rounded-[10px] border border-slate-200 bg-white p-8 text-center text-base font-semibold text-slate-600 shadow-[0_18px_45px_rgba(8,18,37,0.07)]">
              No LED display products found for &quot;{rawSearchQuery}&quot;.
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="led-display-explainer-heading" className="led-display-explainer-section">
        <style jsx>{`
          .led-display-explainer-section {
            width: 100%;
            max-width: 1400px;
            margin: 10px auto 0;
            padding: 48px 15px 56px;
            background: #ffffff;
            color: #0f172a;
          }

          .led-display-explainer-header {
            width: 100%;
            margin-bottom: 30px;
          }

          .led-display-explainer-title {
            margin: 0;
            color: #0b1220;
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 900;
            line-height: 1.12;
          }

          .led-display-explainer-intro {
            margin: 16px 0 0;
            color: #475569;
            font-size: 17px;
            line-height: 1.8;
          }

          .led-display-types-intro {
            width: 100%;
            margin: 28px 0 28px;
            text-align: left;
          }

          .led-display-types-intro h3 {
            margin: 0;
            color: #0b1220;
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 900;
            line-height: 1.2;
          }

          .led-display-types-intro p {
            margin: 10px 0 0;
            color: #64748b;
            font-size: 16px;
            line-height: 1.75;
          }

          .led-display-explainer-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
            align-items: stretch;
          }

          .led-display-explainer-card {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
            border: 1px solid rgba(0, 51, 102, 0.1);
            border-radius: 14px;
            background: #ffffff;
            box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
            transition:
              transform 180ms ease,
              box-shadow 180ms ease,
              border-color 180ms ease;
          }

          .led-display-explainer-card:hover {
            transform: translateY(-6px);
            border-color: rgba(0, 51, 102, 0.24);
            box-shadow: 0 26px 58px rgba(15, 23, 42, 0.14);
          }

          .led-display-explainer-card-title {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 46px;
          }

          .led-display-explainer-icon {
            width: 46px;
            height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex: 0 0 46px;
            border-radius: 14px;
            background: rgba(0, 51, 102, 0.08);
            color: #003366;
          }

          .led-display-explainer-icon svg {
            width: 24px;
            height: 24px;
            display: block;
          }

          .led-display-explainer-card h3 {
            margin: 0;
            color: #0b1220;
            font-size: 19px;
            font-weight: 850;
            line-height: 1.3;
          }

          .led-display-explainer-card h3 a {
            color: inherit;
            text-decoration: none;
            transition: color 180ms ease;
          }

          .led-display-explainer-card h3 a:hover {
            color: #003366;
          }

          .led-display-explainer-card p {
            margin: 12px 0 0;
            color: #475569;
            font-size: 15px;
            line-height: 1.75;
          }

          @media (max-width: 1024px) {
            .led-display-explainer-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .led-display-explainer-section {
              padding: 38px 15px 48px;
            }

            .led-display-explainer-grid {
              grid-template-columns: 1fr;
            }

            .led-display-explainer-card {
              padding: 22px;
            }
          }
        `}</style>

        <div className="led-display-explainer-header">
          <h2 id="led-display-explainer-heading" className="led-display-explainer-title">
            What Is an LED Display?
          </h2>
          <p className="led-display-explainer-intro">
            An LED (Light Emitting Diode) display is a digital screen made from
            many light-emitting diode modules that work together to show text,
            images, video, and live information. Each LED module creates bright
            pixels, allowing an LED screen to deliver clear visuals for advertising, digital signage,
            retail stores, corporate offices, shopping malls, auditoriums,
            stadiums, control rooms, and public information displays. Businesses
            compare LED display price in Bangladesh by looking at screen size,
            pixel pitch, brightness, and installation needs. An indoor LED display
            is ideal for close viewing and high-resolution content, while an
            outdoor LED display is built for sunlight, weather, and long-distance
            visibility. For larger projects, an LED video wall can create a
            seamless viewing experience across a wide display area.
          </p>
        </div>

        <div className="led-display-types-intro">
          <h3>Common Types of LED Displays</h3>
          <p>
            Indoor LED Display, Outdoor LED Display, LED Video Wall, and Digital
            Signage solutions are designed for different viewing distances,
            environments, and commercial applications, helping businesses choose
            the most suitable LED Display solution for their project.
          </p>
        </div>

        <div className="led-display-explainer-grid">
          <article className="led-display-explainer-card">
            <div className="led-display-explainer-card-title">
              <span className="led-display-explainer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v8A2.5 2.5 0 0 1 16.5 17h-9A2.5 2.5 0 0 1 5 14.5v-8Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9 20h6M12 17v3M8.5 8.5h7M8.5 11.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>
                <Link href="/led-display/indoor-led-display">
                  Indoor LED Display
                </Link>
              </h3>
            </div>
            <p>
              Indoor LED display solutions use fine pixel pitch and high
              resolution for close viewing in offices, retail stores, showrooms,
              auditoriums, and meeting rooms where sharp text, vivid colors, and
              smooth content presentation matter.
            </p>
          </article>

          <article className="led-display-explainer-card">
            <div className="led-display-explainer-card-title">
              <span className="led-display-explainer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M4.5 15.5v-8A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v8A2.5 2.5 0 0 1 17 18H7a2.5 2.5 0 0 1-2.5-2.5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 9h8M8 12h8M8 15h5M19 4l1.5-1.5M5 4 3.5 2.5M19 19.5l1.5 1.5M5 19.5 3.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>
                <Link href="/led-display/outdoor-led-display">
                  Outdoor LED Display
                </Link>
              </h3>
            </div>
            <p>
              Outdoor LED display systems are designed with high brightness,
              waterproof cabinets, strong cooling, and durable protection for
              billboards, roadside advertising, building facades, public places,
              and long-distance outdoor LED screen visibility.
            </p>
          </article>

          <article className="led-display-explainer-card">
            <div className="led-display-explainer-card-title">
              <span className="led-display-explainer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M4 6h7v5H4V6ZM13 6h7v5h-7V6ZM4 13h7v5H4v-5ZM13 13h7v5h-7v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M11 8.5h2M11 15.5h2M7.5 11v2M16.5 11v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>LED Video Wall</h3>
            </div>
            <p>
              An LED video wall combines multiple LED panels into a seamless
              large-screen display for corporate lobbies, events, auditoriums,
              command centers, and control rooms that need immersive visuals and
              reliable continuous operation.
            </p>
          </article>

          <article className="led-display-explainer-card">
            <div className="led-display-explainer-card-title">
              <span className="led-display-explainer-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 5h14v10H5V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8 19h8M12 15v4M8.5 8.5h4M8.5 11.5h7M16.5 8.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Digital Signage</h3>
            </div>
            <p>
              Digital signage uses an LED display to manage dynamic content,
              promotions, announcements, menus, branding, and public messages
              across commercial spaces where fast updates and strong visual
              communication improve audience engagement.
            </p>
          </article>
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
              and outdoor LED display models, specifications, pixel pitch,
              features, and price ranges to choose the ideal LED screen solution
              for your business.
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
                  {visibleProducts.map((product) => (
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

      <section
        aria-labelledby="led-price-factors-heading"
        className="led-price-factors-section"
      >
        <style jsx>{`
          .led-price-factors-section {
            width: 100%;
            max-width: 1400px;
            margin: 10px auto 0;
            padding: 48px 15px 64px;
            background: #ffffff;
            color: #0f172a;
          }

          .led-price-factors-header {
            width: 100%;
            margin-bottom: 32px;
          }

          .led-price-factors-kicker {
            margin: 0 0 10px;
            color: #003366;
            font-size: 13px;
            font-weight: 800;
            line-height: 1.4;
            text-transform: uppercase;
          }

          .led-price-factors-title {
            margin: 0;
            color: #0b1220;
            font-size: clamp(28px, 4vw, 42px);
            font-weight: 900;
            line-height: 1.12;
          }

          .led-price-factors-intro {
            margin: 16px 0 0;
            color: #475569;
            font-size: 17px;
            line-height: 1.8;
          }

          .led-price-factors-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 10px;
            align-items: stretch;
          }

          .led-price-factor-card {
            min-height: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
            border: 1px solid rgba(0, 51, 102, 0.1);
            border-radius: 14px;
            background: #ffffff;
            box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
            transition:
              transform 180ms ease,
              box-shadow 180ms ease,
              border-color 180ms ease;
          }

          .led-price-factor-card:hover {
            transform: translateY(-6px);
            border-color: rgba(0, 51, 102, 0.24);
            box-shadow: 0 26px 58px rgba(15, 23, 42, 0.14);
          }

          .led-price-factor-icon {
            width: 46px;
            height: 46px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 14px;
            background: rgba(0, 51, 102, 0.08);
            color: #003366;
            flex: 0 0 46px;
          }

          .led-price-factor-icon svg {
            width: 24px;
            height: 24px;
            display: block;
          }

          .led-price-factor-card h3 {
            margin: 0;
            color: #0b1220;
            font-size: 19px;
            font-weight: 850;
            line-height: 1.3;
          }

          .led-price-factor-card-title {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 46px;
          }

          .led-price-factor-card p {
            margin: 12px 0 0;
            color: #475569;
            font-size: 15px;
            line-height: 1.75;
          }

          @media (max-width: 1024px) {
            .led-price-factors-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .led-price-factors-section {
              padding: 38px 15px 52px;
            }

            .led-price-factors-grid {
              grid-template-columns: 1fr;
              gap: 10px;
            }

            .led-price-factor-card {
              padding: 22px;
            }
          }
        `}</style>

        <div className="led-price-factors-header">
          <p className="led-price-factors-kicker">LED Display Buying Guide</p>
          <h2 id="led-price-factors-heading" className="led-price-factors-title">
            What Factors Affect LED Display Price in Bangladesh?
          </h2>
          <p className="led-price-factors-intro">
            LED display price in Bangladesh can vary depending on pixel pitch,
            screen size, brightness level, cabinet type, controller setup,
            installation method, and warranty coverage. Indoor LED display and
            outdoor LED display models also differ in cost because outdoor
            installations require higher brightness, weather protection, and
            stronger cooling. Understanding these factors helps buyers compare
            options clearly and choose the right display solution for advertising,
            retail, corporate, or public communication.
          </p>
        </div>

        <div className="led-price-factors-grid">
          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 5h4v4H5V5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M15 5h4v4h-4V5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M5 15h4v4H5v-4Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M15 15h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 7h.01M12 12h.01M7 12h.01M17 12h.01M12 17h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Pixel Pitch</h3>
            </div>
            <p>
              Pixel pitch defines the distance between LED pixels. A smaller
              pixel pitch delivers higher resolution, sharper text, and better
              image quality for close viewing, but it uses more LEDs per square
              meter and increases the overall LED display price in Bangladesh.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M4 16.5V7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M18.5 4.5 20 3M20 21l-1.5-1.5M4 3l1.5 1.5M5.5 19.5 4 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Indoor vs Outdoor Display</h3>
            </div>
            <p>
              An outdoor LED display usually costs more than an indoor LED
              display because it needs waterproof cabinets, higher brightness,
              weather protection, and stronger cooling. Indoor models are simpler
              when sunlight, rain, and dust resistance are not required.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M9 5v14M15 5v14M5 9h14M5 15h14" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <h3>Screen Size</h3>
            </div>
            <p>
              Larger LED screens need more LED modules, cabinets, power supplies,
              receiving cards, data cables, and installation work. As the display
              area increases, the total project cost rises because both material
              quantity and professional setup time increase.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20M6.2 6.2l1.6 1.6M16.2 16.2l1.6 1.6M17.8 6.2l-1.6 1.6M7.8 16.2l-1.6 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <h3>Brightness (Nits)</h3>
            </div>
            <p>
              Brightness is measured in nits and directly affects outdoor
              visibility. A high-brightness LED display performs better under
              sunlight, but it requires advanced LED technology, stronger power
              design, and quality components, which can raise the final price.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M8 3h8v3h3v12h-3v3H8v-3H5V6h3V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M9 9h6v6H9V9Z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <h3>LED Chip Quality</h3>
            </div>
            <p>
              Premium LED chips improve color accuracy, brightness consistency,
              lifespan, and stable performance. A better LED module may cost more
              at the beginning, but it helps reduce failure risk and keeps the LED
              screen clearer for long-term use.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M5 12a7 7 0 0 1 12.2-4.7L19 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 5v4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12a7 7 0 0 1-12.2 4.7L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 19v-4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Refresh Rate</h3>
            </div>
            <p>
              Refresh rate controls how smoothly video content appears on an LED
              display. Higher refresh rates, such as 3840Hz and above, improve
              camera performance, reduce flicker, and support smoother playback,
              but they usually increase LED display price.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M7 20V9l5-4 5 4v11" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M10 20v-6h4v6M8.5 11.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Installation &amp; Structure</h3>
            </div>
            <p>
              Installation cost depends on mounting structure, electrical work,
              controller setup, signal cabling, calibration, and site conditions.
              Professional installation keeps the LED screen safe, aligned, and
              reliable, so it naturally influences the final project budget.
            </p>
          </article>

          <article className="led-price-factor-card">
            <div className="led-price-factor-card-title">
              <span className="led-price-factor-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" focusable="false">
                  <path d="M12 3 19 6v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m8.8 12.2 2.1 2.1 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Warranty &amp; After-Sales Support</h3>
            </div>
            <p>
              Warranty and service quality add real value to an LED display
              project. Longer warranty, technical support, spare parts
              availability, and maintenance services can affect LED display price
              while improving confidence after installation.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
