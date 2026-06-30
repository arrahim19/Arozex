type ComponentItem = {
  title: string;
  description: string;
  icon:
    | "module"
    | "cabinet"
    | "power"
    | "receiving"
    | "processor"
    | "control"
    | "cables"
    | "structure"
    | "cms"
    | "cooling";
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: "player" | "processor" | "control" | "receiving" | "power" | "module" | "output";
};

const componentItems: ComponentItem[] = [
  {
    title: "LED Module",
    description:
      "The LED module is the core display component responsible for producing images and videos. The display quality, pixel pitch, brightness, refresh rate, and color accuracy primarily depend on the quality of the LED modules used.",
    icon: "module",
  },
  {
    title: "LED Cabinet",
    description:
      "The LED cabinet securely houses the LED modules and internal electronics while providing structural strength, efficient heat dissipation, and easy maintenance for both indoor and outdoor installations.",
    icon: "cabinet",
  },
  {
    title: "Power Supply",
    description:
      "A high-quality power supply converts AC power into stable DC voltage, ensuring consistent performance, energy efficiency, and long-term reliability of the LED display system.",
    icon: "power",
  },
  {
    title: "Receiving Card",
    description:
      "The receiving card receives digital signals from the sending card and controls each LED module to display content accurately with smooth synchronization and stable performance.",
    icon: "receiving",
  },
  {
    title: "Sending Card / Video Processor",
    description:
      "The sending card or video processor receives video input from a computer or media player and transmits high-quality synchronized signals to the LED display.",
    icon: "processor",
  },
  {
    title: "LED Control System",
    description:
      "The control system manages screen configuration, brightness adjustment, content playback, scheduling, remote management, and overall operation of the LED display.",
    icon: "control",
  },
  {
    title: "Data & Power Cables",
    description:
      "Premium-quality signal and power cables ensure stable communication and uninterrupted power distribution between all LED display components.",
    icon: "cables",
  },
  {
    title: "Mounting Structure",
    description:
      "A durable steel or aluminum mounting structure securely supports the LED display, ensuring installation safety, structural stability, and long-term durability.",
    icon: "structure",
  },
  {
    title: "Content Management Software (CMS)",
    description:
      "CMS software enables users to upload images, videos, text, animations, advertisements, and schedule content for remote display management.",
    icon: "cms",
  },
  {
    title: "Cooling & Ventilation System",
    description:
      "Cooling fans and ventilation systems help maintain the optimal operating temperature of the LED display, extending the lifespan of internal components.",
    icon: "cooling",
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: "Computer / Media Player",
    description: "Content starts from a computer, media player, or CMS software.",
    icon: "player",
  },
  {
    title: "Sending Card / Video Processor",
    description: "Processes video input and sends synchronized display data.",
    icon: "processor",
  },
  {
    title: "LED Control System",
    description: "Manages screen settings, brightness, playback, and configuration.",
    icon: "control",
  },
  {
    title: "Receiving Card",
    description: "Receives signal data and distributes it to LED modules.",
    icon: "receiving",
  },
  {
    title: "Power Supply",
    description: "Converts AC power into stable DC power for the receiving cards and LED modules.",
    icon: "power",
  },
  {
    title: "LED Modules",
    description: "LED pixels light up to create images, videos, and text.",
    icon: "module",
  },
  {
    title: "LED Display Output",
    description: "The final screen shows bright, smooth, and synchronized visuals.",
    icon: "output",
  },
];

function ComponentIcon({ type }: { type: ComponentItem["icon"] }) {
  const iconProps = {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  switch (type) {
    case "module":
      return (
        <svg {...iconProps}>
          <path d="M6 6h18v18H6V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 10h3v3h-3v-3ZM17 10h3v3h-3v-3ZM10 17h3v3h-3v-3ZM17 17h3v3h-3v-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "cabinet":
      return (
        <svg {...iconProps}>
          <path d="M7 5.5h16v19H7v-19Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M11 9h8M11 13h8M11 17h8M11 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "power":
      return (
        <svg {...iconProps}>
          <path d="M16 4 8 16h6l-1 10 9-14h-6l0-8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "receiving":
      return (
        <svg {...iconProps}>
          <path d="M6 9h18v12H6V9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 13h4M10 17h2M20 13v4M23.5 6.5 20 9l-3.5-2.5M6.5 23.5 10 21l3.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "processor":
      return (
        <svg {...iconProps}>
          <path d="M8 8h14v14H8V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 4.5v3M18 4.5v3M12 22.5v3M18 22.5v3M4.5 12h3M4.5 18h3M22.5 12h3M22.5 18h3M12 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "control":
      return (
        <svg {...iconProps}>
          <path d="M6 7h18v16H6V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 12h10M10 18h4M19 18h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "cables":
      return (
        <svg {...iconProps}>
          <path d="M9 7v6a6 6 0 0 0 12 0V7M7 7h4M19 7h4M13 22h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "structure":
      return (
        <svg {...iconProps}>
          <path d="M6 22 15 6l9 16M9 17h12M12 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 22h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "cms":
      return (
        <svg {...iconProps}>
          <path d="M6 7h18v13H6V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M10 24h10M15 20v4M10 11h6M10 15h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "cooling":
      return (
        <svg {...iconProps}>
          <path d="M15 13.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M15 13.2c1.2-4.8 5.8-5.3 7.2-2.8 1.5 2.7-1.8 5.7-5.4 4.6M15 16.8c-1.2 4.8-5.8 5.3-7.2 2.8-1.5-2.7 1.8-5.7 5.4-4.6M13.2 15c-4.8-1.2-5.3-5.8-2.8-7.2 2.7-1.5 5.7 1.8 4.6 5.4M16.8 15c4.8 1.2 5.3 5.8 2.8 7.2-2.7 1.5-5.7-1.8-4.6-5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function WorkflowIcon({ type }: { type: WorkflowStep["icon"] }) {
  const iconProps = {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  };

  switch (type) {
    case "player":
      return (
        <svg {...iconProps}>
          <path d="M4 6h16v10H4V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 20h6M12 16v4M10 9.5l4 2.5-4 2.5v-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "processor":
      return (
        <svg {...iconProps}>
          <path d="M7 7h10v10H7V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M9 3.5v3M15 3.5v3M9 17.5v3M15 17.5v3M3.5 9h3M3.5 15h3M17.5 9h3M17.5 15h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "control":
      return (
        <svg {...iconProps}>
          <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 10h8M8 14h4M16 14h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );
    case "receiving":
      return (
        <svg {...iconProps}>
          <path d="M5 8h14v9H5V8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 12h4M16 11v3M18.5 5.5 16 8l-2.5-2.5M5.5 20.5 8 17l2.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "power":
      return (
        <svg {...iconProps}>
          <path d="M13 3 6.5 13H12l-1 8 6.5-11H12l1-7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "module":
      return (
        <svg {...iconProps}>
          <path d="M5 5h14v14H5V5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8.5 8.5h2v2h-2v-2ZM13.5 8.5h2v2h-2v-2ZM8.5 13.5h2v2h-2v-2ZM13.5 13.5h2v2h-2v-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "output":
      return (
        <svg {...iconProps}>
          <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 11h.01M12 11h.01M16 11h.01M8 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function LedComponentsSection() {
  return (
    <section className="led-components-section" aria-labelledby="led-components-title">
      <div className="led-components-section__inner">
        <div className="led-components-section__header">
          <h2 id="led-components-title">LED Display Components and Their Functions</h2>
          <p>
            A professional LED display system consists of several essential components that work together to deliver outstanding image quality, stable performance, energy efficiency, and long-term reliability. The quality of these components directly affects the LED display&apos;s brightness, refresh rate, durability, power consumption, and overall performance. Below are the key components required to build a complete indoor or outdoor LED display solution.
          </p>
        </div>

        <div className="led-components-section__grid" aria-label="Key LED display components">
          {componentItems.map((item) => (
            <article className="led-components-section__card" key={item.title}>
              <div className="led-components-section__card-title">
                <span className="led-components-section__icon">
                  <ComponentIcon type={item.icon} />
                </span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <aside className="led-components-section__highlight" aria-labelledby="complete-led-solution-title">
          <h3 id="complete-led-solution-title">
            Complete LED Display Solutions from Arozex Technologies
          </h3>
          <p>
            At Arozex Technologies, we do more than simply supply LED display products. We provide complete end-to-end LED display solutions, including professional consultation, site survey, display size planning, pixel pitch selection, genuine product supply, controller configuration, CMS software setup, professional installation, testing, calibration, operator training, 1&ndash;3 years warranty, preventive maintenance, and reliable after-sales support. Our experienced engineers ensure every LED display system is optimized for superior image quality, stable performance, and long-term reliability.
          </p>
        </aside>

        <div className="led-components-section__workflow" aria-labelledby="led-component-workflow-title">
          <div className="led-components-section__workflow-header">
            <h3 id="led-component-workflow-title">How These Components Work Together</h3>
            <p>
              LED display components work together in sequence to process content,
              transmit signals, distribute power, and produce accurate visuals on
              the LED screen.
            </p>
          </div>

          <ol className="led-components-section__workflow-list">
            {workflowSteps.map((step) => (
              <li className="led-components-section__workflow-step" key={step.title}>
                <span className="led-components-section__workflow-icon">
                  <WorkflowIcon type={step.icon} />
                </span>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="led-components-section__workflow-summary">
            Together, these components process video signals, manage power,
            synchronize image data, and deliver stable LED display performance
            with accurate colors and seamless visuals.
          </div>
        </div>
      </div>
    </section>
  );
}
