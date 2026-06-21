import Image from "next/image";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import { siteServices } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Transform Your Business with Smart Display Solutions",
  description:
    "Arozex Technologies delivers high-performance smart display and technology services that help businesses stand out, communicate better, and achieve more.",
  type: "website",
});

const serviceCards = [
  {
    title: siteServices[0],
    description: "High-quality LED display, video walls, digital signage and more.",
    linkLabel: "Explore Solutions",
  },
  {
    title: siteServices[1],
    description: "Custom software, web solutions and IT services tailored to your needs.",
    linkLabel: "Explore Services",
  },
  {
    title: siteServices[2],
    description: "Modernize your business with smart technology and automation.",
    linkLabel: "Explore Transformation",
  },
  {
    title: siteServices[3],
    description: "Reliable support and maintenance for long-term performance.",
    linkLabel: "Explore Support",
  },
] as const;

const whyChooseItems = [
  {
    title: "Reliable & Durable",
    description: "High-quality solutions built for long-term performance.",
  },
  {
    title: "Energy Efficient",
    description: "Smart technology designed to save power and cost.",
  },
  {
    title: "Expert Installation",
    description: "Professional installation with safety and precision.",
  },
  {
    title: "Nationwide Support",
    description: "Fast and dependable support whenever you need it.",
  },
  {
    title: "Quality Assurance",
    description: "Every solution is tested to meet the highest standards.",
  },
] as const;

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#246BFF] to-[#0F4FCF] text-white shadow-[0_16px_36px_rgba(29,78,216,0.22)]">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="py-4 sm:py-5">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/banner/Banner%20image%201.webp"
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

      <section className="container-shell py-12 sm:py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white px-7 py-7 shadow-[0_20px_45px_rgba(8,18,37,0.08)]"
            >
              <IconBox>
                {index === 0 ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M8 20h8" />
                    <path d="M12 16v4" />
                  </svg>
                ) : null}
                {index === 1 ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                  </svg>
                ) : null}
                {index === 2 ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 17l6-6 4 4 7-8" />
                    <path d="M14 7h6v6" />
                  </svg>
                ) : null}
                {index === 3 ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
                    <path d="M15 2a7 7 0 0 1 7 7" />
                    <path d="M15 6a3 3 0 0 1 3 3" />
                  </svg>
                ) : null}
              </IconBox>
              <h2 className="mt-6 text-[1.65rem] font-semibold tracking-tight text-brand-ink">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
              >
                {service.linkLabel}
                <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Why Choose Us
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            Why Businesses Choose Arozex Technologies
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {whyChooseItems.map((item, index) => (
              <div
                key={item.title}
                className="px-4 xl:border-r xl:border-slate-200 last:xl:border-r-0"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center text-brand-blue">
                  {index === 0 ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3l7 3v6c0 4.4-3 8.4-7 9-4-.6-7-4.6-7-9V6l7-3z" />
                      <path d="m9.5 12 1.8 1.8 3.2-3.8" />
                    </svg>
                  ) : null}
                  {index === 1 ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                    </svg>
                  ) : null}
                  {index === 2 ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m14.7 6.3 3 3" />
                      <path d="m7 9 8 8" />
                      <path d="m5 11 6-6 8 8-6 6z" />
                      <path d="m2 22 5-5" />
                      <path d="m17 7 5-5" />
                    </svg>
                  ) : null}
                  {index === 3 ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 14a8 8 0 1 1 16 0" />
                      <path d="M18 19a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1" />
                      <path d="M6 19a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1" />
                      <path d="M12 19v2" />
                    </svg>
                  ) : null}
                  {index === 4 ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3 2.5 2.1 3.2-.4 1.3 2.9 3 1.4-.6 3.2 2 2.6-2 2.6.6 3.2-3 1.4-1.3 2.9-3.2-.4L12 21l-2.5 2.1-3.2-.4-1.3-2.9-3-1.4.6-3.2-2-2.6 2-2.6-.6-3.2 3-1.4 1.3-2.9 3.2.4z" />
                      <path d="m9.5 12 1.8 1.8 3.2-3.8" />
                    </svg>
                  ) : null}
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container-shell">
          <div className="grid items-stretch overflow-hidden rounded-[1.75rem] lg:grid-cols-2">
            <div className="flex items-center bg-white">
              <div className="px-8 py-16 sm:px-12 sm:py-20">
                <div className="max-w-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    About Arozex Technologies
                  </p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
                    Your Trusted Partner for Smart Technology Solutions
                  </h2>
                  <p className="mt-6 text-base leading-8 text-slate-600">
                    We help businesses enhance their communication, visibility,
                    and operations through innovative display and technology
                    solutions. Our mission is to provide reliable, efficient, and
                    future-ready solutions that create real impact.
                  </p>
                  <Link href="/about-us" className="button-primary mt-8 gap-3 px-7 py-4">
                    Discover More About Us
                    <span aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[340px]">
              <Image
                src="/images/Office%20Photo.webp"
                alt="Arozex Technologies office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#040d1f] px-6 py-20 text-white sm:px-10">
            <div className="absolute inset-0 hero-grid-line opacity-75" />
            <div className="relative text-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Let&apos;s build something smarter together.
              </p>
              <Link href="/contact" className="button-primary mt-8 px-9 py-4">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
