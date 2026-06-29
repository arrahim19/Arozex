import Image from "next/image";
import Link from "next/link";

import { LedProductGrid } from "@/components/led/LedProductGrid";
import { ledProducts } from "@/lib/led-products";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Arozex Technologies | Smart Display & Technology Solutions",
  description:
    "Arozex Technologies offers indoor and outdoor LED displays, LED video walls, digital signage products, installation, and support in Bangladesh.",
  pathname: "/",
  type: "website",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <section className="mt-[10px] bg-transparent pb-4 sm:pb-5">
        <div className="w-full">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/banner/Arozex-technologies-banner-image-1.webp"
              alt="Arozex Technologies banner"
              width={2048}
              height={684}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1440px) 100vw, 1400px"
            />
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] bg-transparent px-[15px] py-10 sm:py-12">
        <div className="mb-7">
          <h1 className="font-black tracking-tight text-brand-ink">
            Popular Product
          </h1>
        </div>

        <LedProductGrid products={ledProducts} />
      </section>

      <section
        className="mt-[10px] overflow-hidden rounded-[10px] border border-blue-100/80 bg-white px-[15px] py-10 shadow-[0_18px_50px_rgba(8,18,37,0.06)] sm:py-12 lg:py-14"
        aria-labelledby="professional-display-solutions-title"
      >
        <article className="relative">
          <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-blue/5 blur-2xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                Digital Display Solutions
              </p>
              <h2
                id="professional-display-solutions-title"
                className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-5xl"
              >
                Professional Digital Display Solutions for Every Business
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Innovative digital display technologies designed to help businesses
                attract attention, communicate effectively, strengthen brand
                visibility, and deliver engaging visual experiences across every
                industry.
              </p>
              <div className="mt-8">
                <Link
                  href="/led-display"
                  className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-6 py-4 text-sm font-bold text-white shadow-[0_18px_38px_rgba(37,84,229,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-navy"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-700">
              <p>
                Digital display solutions have transformed the way modern
                businesses communicate, advertise, and engage with customers. Instead
                of relying only on static signs or printed materials, companies can
                now use <span className="font-semibold text-brand-ink">indoor LED displays</span>,{" "}
                <span className="font-semibold text-brand-ink">outdoor LED billboards</span>,{" "}
                LED video walls, commercial digital signage, and customized display
                systems to deliver clear, dynamic, and memorable messages.
              </p>
              <p>
                A professional display system can present advertisements,
                promotions, announcements, branding content, live information, menus,
                schedules, and corporate communications from one centralized
                platform. These solutions are widely used in shopping malls, retail
                stores, corporate offices, hotels, restaurants, hospitals,
                educational institutions, airports, railway stations, control rooms,
                exhibition centers, event venues, stadiums, conference rooms, and
                outdoor advertising locations.
              </p>
              <p>
                Modern LED display technology offers outstanding brightness, vivid
                colors, energy-efficient operation, high refresh rates, long service
                life, and reliable performance for demanding commercial environments.
                With intelligent CMS software, businesses can remotely manage
                content, schedule campaigns, and update messages quickly without
                repeated printing costs or manual replacement.
              </p>
              <p>
                Arozex Technologies provides complete digital display solutions
                rather than simply supplying display products. Our service includes
                professional consultation, site survey, display planning, pixel pitch
                selection, genuine product supply, controller configuration, CMS
                software setup, installation, testing, calibration, operator
                training, 1-3 years warranty, preventive maintenance, and dependable
                after-sales support. We are a trusted partner for businesses seeking
                reliable, high-performance, and future-ready digital display
                solutions in Bangladesh.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
