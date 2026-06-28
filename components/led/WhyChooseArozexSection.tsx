import type { CSSProperties } from "react";

type Feature = {
  title: string;
  description: string;
  icon: "price" | "brands" | "install" | "warranty" | "support" | "custom" | "delivery" | "turnkey";
};

const features: Feature[] = [
  {
    title: "Competitive & Reasonable Pricing",
    description:
      "Get premium-quality LED displays from trusted international brands at competitive prices without compromising on quality or performance.",
    icon: "price",
  },
  {
    title: "Trusted Global Brands",
    description:
      "We supply genuine indoor and outdoor LED displays using high-quality components from reliable global manufacturers.",
    icon: "brands",
  },
  {
    title: "Professional Installation",
    description:
      "Our experienced engineers provide complete installation, calibration, testing, and commissioning services.",
    icon: "install",
  },
  {
    title: "1-3 Years Warranty",
    description:
      "Enjoy official product warranties ranging from 1 to 3 years depending on the selected LED display model and manufacturer.",
    icon: "warranty",
  },
  {
    title: "After-Sales Support",
    description:
      "We provide reliable maintenance, troubleshooting, technical assistance, and long-term customer support.",
    icon: "support",
  },
  {
    title: "Customized LED Solutions",
    description:
      "From indoor LED displays to outdoor billboards and LED video walls, we design customized solutions for every project.",
    icon: "custom",
  },
  {
    title: "Nationwide Delivery",
    description:
      "Fast and secure delivery with installation services available throughout Bangladesh.",
    icon: "delivery",
  },
  {
    title: "Complete Turnkey Solution",
    description:
      "We manage consultation, site survey, display size planning, product supply, controller setup, CMS/software configuration, installation, testing, training, warranty, support, and maintenance.",
    icon: "turnkey",
  },
];

function FeatureIcon({ type }: { type: Feature["icon"] }) {
  const commonProps = {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  switch (type) {
    case "price":
      return (
        <svg {...commonProps}>
          <path d="M5 8.5h20v13H5v-13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12h5M9 18h3M20.5 12.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "brands":
      return (
        <svg {...commonProps}>
          <path d="M15 4.5 18.4 11l7.1 1.1-5.2 5 1.2 7-6.5-3.4-6.5 3.4 1.2-7-5.2-5 7.1-1.1L15 4.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "install":
      return (
        <svg {...commonProps}>
          <path d="M6 6.5h18v11H6v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 24h10M15 17.5V24M9.5 10.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "warranty":
      return (
        <svg {...commonProps}>
          <path d="M15 4.5 23 8v6.3c0 5-3.4 9.6-8 11.2-4.6-1.6-8-6.2-8-11.2V8l8-3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="m11 15 2.6 2.6L19.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "support":
      return (
        <svg {...commonProps}>
          <path d="M6 15a9 9 0 0 1 18 0v4.5a2.5 2.5 0 0 1-2.5 2.5H19v-7h5M6 15v4.5A2.5 2.5 0 0 0 8.5 22H11v-7H6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M18.5 22c-.8 1.5-2 2.3-3.5 2.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "custom":
      return (
        <svg {...commonProps}>
          <path d="M6 7h18M6 15h18M6 23h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11 4.5v5M19 12.5v5M13.5 20.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...commonProps}>
          <path d="M4.5 8h13v12h-13V8ZM17.5 12h4.7l3.3 3.8V20h-8v-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "turnkey":
      return (
        <svg {...commonProps}>
          <path d="M8 8h14v14H8V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M11.5 4.5v5M18.5 4.5v5M11.5 20.5v5M18.5 20.5v5M4.5 11.5h5M4.5 18.5h5M20.5 11.5h5M20.5 18.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function WhyChooseArozexSection() {
  return (
    <section className="why-choose-arozex" aria-labelledby="why-choose-arozex-title">
      <div className="why-choose-arozex__inner">
        <div className="why-choose-arozex__header reveal-fade-up">
          <h2 id="why-choose-arozex-title">
            Why Choose Arozex Technologies for LED Display Solutions
          </h2>
          <div className="why-choose-arozex__intro">
            <p>
              Choosing the right LED display supplier is essential for achieving outstanding visual performance and long-term reliability. Arozex Technologies does not only sell LED display products; we provide complete end-to-end LED display solutions in Bangladesh. Our service includes consultation, site survey, display size planning, pixel pitch selection, product supply, controller configuration, CMS/software setup, professional installation, testing, operator training, warranty, after-sales support, and maintenance.
            </p>
            <p>
              Whether you need an indoor LED display, outdoor LED billboard, LED video wall, digital signage, or a customized commercial LED solution, our experienced team ensures every project is delivered with precision, quality, and lasting performance. We are committed to supplying high-quality LED displays from trusted international brands at competitive and reasonable prices. Every installation is carefully planned according to viewing distance, pixel pitch, brightness requirements, display size, and application environment to deliver the best possible visual experience.
            </p>
          </div>
        </div>

        <div className="why-choose-arozex__grid" aria-label="Arozex Technologies LED display advantages">
          {features.map((feature, index) => (
            <article
              className="why-choose-arozex__card reveal-fade-up"
              key={feature.title}
              style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}
            >
              <span className="why-choose-arozex__icon">
                <FeatureIcon type={feature.icon} />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="why-choose-arozex__commitment reveal-fade-up">
          <h3>Our Commitment to Quality</h3>
          <p>
            Every LED display solution is selected to deliver exceptional image quality, stable performance, and long service life. We focus on more than product supply by combining advanced LED technology, premium components, accurate project planning, professional installation, and reliable technical support to ensure maximum return on your investment. From the initial consultation and site survey to final testing, operator training, and ongoing maintenance, our team remains committed to providing dependable support whenever you need it.
          </p>
          <p>
            With Arozex Technologies, you receive a complete LED display solution in one package: expert consultation, proper display size and pixel pitch guidance, genuine products, controller and CMS/software setup, 1&ndash;3 years warranty, after-sales service, and maintenance&mdash;making us a trusted partner for businesses looking for reliable digital display solutions across Bangladesh.
          </p>
        </div>
      </div>
    </section>
  );
}
