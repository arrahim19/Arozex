type BenefitItem = {
  title: string;
  description: string;
  icon:
    | "impact"
    | "brand"
    | "content"
    | "cost"
    | "flexibility"
    | "remote"
    | "energy"
    | "life"
    | "realtime"
    | "image";
};

const benefitItems: BenefitItem[] = [
  {
    title: "High Visual Impact",
    description:
      "Bright, vibrant, and dynamic visuals instantly capture attention, helping businesses stand out in crowded commercial environments and increasing customer engagement.",
    icon: "impact",
  },
  {
    title: "Stronger Brand Visibility",
    description:
      "LED displays improve brand recognition by presenting high-quality digital content that attracts more visitors and creates a lasting impression.",
    icon: "brand",
  },
  {
    title: "Dynamic Content Management",
    description:
      "Display videos, images, animations, advertisements, announcements, promotions, and live information from a single digital display system.",
    icon: "content",
  },
  {
    title: "Cost-Effective Digital Advertising",
    description:
      "Unlike printed banners and posters, LED displays allow unlimited content updates without recurring printing costs, making them a smart long-term investment.",
    icon: "cost",
  },
  {
    title: "Indoor & Outdoor Flexibility",
    description:
      "Suitable for shopping malls, corporate offices, showrooms, hotels, hospitals, educational institutions, airports, mosques, conference rooms, event stages, and outdoor billboards.",
    icon: "flexibility",
  },
  {
    title: "Remote Content Control",
    description:
      "Manage and schedule display content remotely through an intelligent content management system, allowing quick updates from anywhere.",
    icon: "remote",
  },
  {
    title: "Energy-Efficient Operation",
    description:
      "Modern LED technology delivers outstanding brightness while consuming less power, reducing operating costs over time.",
    icon: "energy",
  },
  {
    title: "Long Service Life",
    description:
      "High-quality components, professional installation, and proper maintenance ensure reliable performance and long-term durability.",
    icon: "life",
  },
  {
    title: "Real-Time Communication",
    description:
      "Instantly publish notices, promotions, emergency alerts, event schedules, menus, pricing, and business announcements.",
    icon: "realtime",
  },
  {
    title: "Professional Business Image",
    description:
      "A premium LED display enhances the appearance of any commercial space and creates a modern, innovative, and trustworthy brand identity.",
    icon: "image",
  },
];

const keyPoints = [
  "Increase Customer Attention",
  "Improve Brand Visibility",
  "Promote Offers Instantly",
  "Reduce Printing Costs",
  "Indoor & Outdoor Applications",
  "Long-Term Return on Investment",
  "Low Maintenance",
  "Reliable Performance",
];

function BenefitIcon({ type }: { type: BenefitItem["icon"] }) {
  const iconProps = {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  switch (type) {
    case "impact":
      return (
        <svg {...iconProps}>
          <path d="M13 5.5v15M5.5 13h15M7.7 7.7l10.6 10.6M18.3 7.7 7.7 18.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M13 9.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "brand":
      return (
        <svg {...iconProps}>
          <path d="M13 4.5 16 10l6.2.9-4.5 4.3 1.1 6.1L13 18.4l-5.8 3 1.1-6.2-4.5-4.3L10 10l3-5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "content":
      return (
        <svg {...iconProps}>
          <path d="M5 6.5h16v13H5v-13Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 10.5h4M9 14h8M9 17.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "cost":
      return (
        <svg {...iconProps}>
          <path d="M5 7h16v12H5V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 11h3M9 15h2M17.5 10.8a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "flexibility":
      return (
        <svg {...iconProps}>
          <path d="M6 8h14M6 13h14M6 18h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M10 5.5v5M16 10.5v5M12.5 15.5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "remote":
      return (
        <svg {...iconProps}>
          <path d="M7 4.5h12v17H7v-17Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M11 8.5h4M10.5 17.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "energy":
      return (
        <svg {...iconProps}>
          <path d="M14 4 7.5 14.5h5L12 22l6.5-10.5h-5L14 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "life":
      return (
        <svg {...iconProps}>
          <path d="M13 22c4.5-1.5 7.5-5.6 7.5-10.2V6.5L13 3.5 5.5 6.5v5.3C5.5 16.4 8.5 20.5 13 22Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m9.5 13 2.2 2.2 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "realtime":
      return (
        <svg {...iconProps}>
          <path d="M13 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M13 9v4.5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "image":
      return (
        <svg {...iconProps}>
          <path d="M5 7h16v12H5V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m8.5 16 3-3 2.3 2.3 1.8-1.8L19 17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17.5 10.5h.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
}

export function LedBenefitsSection() {
  return (
    <section className="led-benefits-section" aria-labelledby="led-benefits-title">
      <div className="led-benefits-section__inner">
        <div className="led-benefits-section__header">
          <h2 id="led-benefits-title">Benefits of LED Display for Your Business</h2>
          <p>
            LED displays help businesses attract attention, strengthen brand visibility, deliver dynamic content, and communicate with customers more effectively. Whether installed in retail stores, shopping malls, corporate offices, hotels, hospitals, educational institutions, event venues, or outdoor advertising locations, LED displays provide an engaging and professional visual experience that traditional signage cannot achieve.
          </p>
        </div>

        <div className="led-benefits-section__value-panel">
          <div className="led-benefits-section__lead">
            <span className="led-benefits-section__lead-mark">Business Value</span>
            <h3>Turn every screen into a high-impact communication channel</h3>
            <p>
              Use LED display technology to inform, promote, guide, and impress customers with clear digital content that can be updated whenever your business needs it.
            </p>
          </div>

          <div className="led-benefits-section__list" aria-label="Business benefits of LED displays">
            {benefitItems.map((item, index) => (
              <article className="led-benefits-section__item" key={item.title}>
                <span className="led-benefits-section__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="led-benefits-section__icon">
                  <BenefitIcon type={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="led-benefits-section__highlight" aria-labelledby="led-display-investment-title">
          <h3 id="led-display-investment-title">
            Why Investing in an LED Display Makes Business Sense
          </h3>
          <p>
            An LED display is more than just a digital screen&mdash;it is a powerful communication and marketing solution. It helps businesses attract more customers, increase brand awareness, promote products in real time, reduce traditional advertising costs, and deliver engaging visual experiences. With professional installation and the right technology, an LED display becomes a valuable long-term asset that supports business growth and customer engagement.
          </p>
          <ul className="led-benefits-section__points" aria-label="LED display business value points">
            {keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
