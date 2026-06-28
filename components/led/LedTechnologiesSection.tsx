type TechnologyItem = {
  title: string;
  description: string;
  icon:
    | "pitch"
    | "packaging"
    | "refresh"
    | "brightness"
    | "control"
    | "power"
    | "cms"
    | "maintenance";
};

const technologyItems: TechnologyItem[] = [
  {
    title: "Pixel Pitch Technology",
    description:
      "Pixel pitch determines the distance between LED pixels and directly affects image sharpness, viewing distance, and display resolution. Choosing the right pixel pitch ensures clear visuals and the best viewing experience for indoor and outdoor LED displays.",
    icon: "pitch",
  },
  {
    title: "SMD & COB LED Technology",
    description:
      "Modern LED displays use advanced SMD and COB LED technologies to improve brightness, durability, viewing angle, color consistency, and overall visual performance. Each technology is selected based on the project environment and application.",
    icon: "packaging",
  },
  {
    title: "High Refresh Rate",
    description:
      "A high refresh rate, such as 3840Hz or above, provides smooth video playback, reduces screen flickering, and ensures excellent camera performance for events, studios, live broadcasting, conference rooms, and commercial displays.",
    icon: "refresh",
  },
  {
    title: "High Brightness & HDR Color",
    description:
      "High-brightness LED technology ensures clear visibility in indoor, semi-outdoor, and outdoor environments. HDR color processing improves contrast, color depth, grayscale performance, and lifelike image quality.",
    icon: "brightness",
  },
  {
    title: "Intelligent Control System",
    description:
      "Advanced LED control systems enable screen configuration, brightness adjustment, real-time content synchronization, remote operation, scheduling, and stable display performance across different screen sizes.",
    icon: "control",
  },
  {
    title: "Energy-Efficient Power Management",
    description:
      "Efficient power supplies and intelligent power management reduce electricity consumption, control heat generation, protect internal components, and help extend the lifespan of the LED display system.",
    icon: "power",
  },
  {
    title: "Smart Content Management System",
    description:
      "A smart CMS allows users to upload, schedule, and remotely manage videos, images, text, advertisements, announcements, and playlists from a computer or mobile device.",
    icon: "cms",
  },
  {
    title: "Front & Rear Maintenance Design",
    description:
      "Front and rear maintenance designs make servicing easier, reduce downtime, and allow faster access to modules, power supplies, receiving cards, and internal components for commercial LED installations.",
    icon: "maintenance",
  },
];

function TechnologyIcon({ type }: { type: TechnologyItem["icon"] }) {
  const iconProps = {
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  switch (type) {
    case "pitch":
      return (
        <svg {...iconProps}>
          <path d="M6 6h16v16H6V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M10 10h1.8M16.2 10H18M10 14h1.8M16.2 14H18M10 18h1.8M16.2 18H18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "packaging":
      return (
        <svg {...iconProps}>
          <path d="M14 4.5 22 9v10l-8 4.5L6 19V9l8-4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6.5 9.3 14 13.6l7.5-4.3M14 13.6v8.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...iconProps}>
          <path d="M21.5 9A8.5 8.5 0 0 0 6 8.4M6 5v3.4h3.4M6.5 19A8.5 8.5 0 0 0 22 19.6M22 23v-3.4h-3.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "brightness":
      return (
        <svg {...iconProps}>
          <path d="M14 9.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M14 3.8v2.4M14 21.8v2.4M3.8 14h2.4M21.8 14h2.4M6.8 6.8l1.7 1.7M19.5 19.5l1.7 1.7M21.2 6.8l-1.7 1.7M8.5 19.5l-1.7 1.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "control":
      return (
        <svg {...iconProps}>
          <path d="M5 7h18v14H5V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 11h7M9 16h3M18.5 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "power":
      return (
        <svg {...iconProps}>
          <path d="M15 4 8.5 15h5l-.5 9 6.5-11h-5L15 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "cms":
      return (
        <svg {...iconProps}>
          <path d="M5 6.5h18v12H5v-12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 22h10M14 18.5V22M9 10.5h5M9 14h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...iconProps}>
          <path d="M18.4 5.6a5.5 5.5 0 0 0-6.8 6.8L5.8 18.2a2.8 2.8 0 0 0 4 4l5.8-5.8a5.5 5.5 0 0 0 6.8-6.8l-3.6 3.6-4-4 3.6-3.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function LedTechnologiesSection() {
  return (
    <section className="led-technologies-section" aria-labelledby="led-technologies-title">
      <div className="led-technologies-section__inner">
        <div className="led-technologies-section__header">
          <h2 id="led-technologies-title">
            LED Display Technologies Behind Superior Performance
          </h2>
          <p>
            The performance of an LED display depends on the technologies behind the screen. From pixel pitch and LED packaging to high refresh rates, brightness, intelligent control systems, and color processing, each technology plays a vital role in delivering exceptional image quality, stable performance, and long-term reliability for indoor and outdoor LED display applications.
          </p>
        </div>

        <div className="led-technologies-section__panel">
          <div className="led-technologies-section__grid" aria-label="LED display performance technologies">
            {technologyItems.map((item) => (
              <article className="led-technologies-section__item" key={item.title}>
                <span className="led-technologies-section__icon">
                  <TechnologyIcon type={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="led-technologies-section__callout" aria-labelledby="advanced-led-technology-title">
          <h3 id="advanced-led-technology-title">
            Advanced LED Display Technology from Arozex Technologies
          </h3>
          <p>
            At Arozex Technologies, we combine advanced LED display technologies with premium-quality components to deliver reliable, energy-efficient, and high-performance LED display solutions in Bangladesh. From pixel pitch selection and SMD/COB technology to intelligent controllers, CMS software, power management, brightness calibration, and professional installation, every system is carefully optimized to provide outstanding visual performance, long service life, and dependable operation.
          </p>
        </aside>
      </div>
    </section>
  );
}
