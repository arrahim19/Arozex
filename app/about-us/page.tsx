import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About Arozex Technologies",
  description:
    "Learn about Arozex Technologies, a smart display and technology solutions company providing LED display, digital signage, CMS setup, installation, warranty, and after-sales support across Bangladesh.",
  pathname: "/about-us",
});

const services = [
  "Indoor LED Display Solutions",
  "Outdoor LED Billboard Solutions",
  "LED Video Wall Solutions",
  "Digital Signage Systems",
  "Smart Display Solutions",
  "CMS Software Setup",
  "Controller Configuration",
  "Professional Installation",
  "Testing & Calibration",
  "Operator Training",
  "Warranty Support",
  "After-Sales Maintenance",
] as const;

const choicePoints = [
  "Complete End-to-End Technology Solutions",
  "Competitive & Reasonable Pricing",
  "Premium Products from Trusted Brands",
  "Professional Consultation & Site Survey",
  "Expert Installation by Technical Engineers",
  "CMS, Controller Setup & Training",
  "1-3 Years Warranty Support",
  "Reliable After-Sales Service",
  "Nationwide Support Across Bangladesh",
  "Customer-Focused Service Approach",
] as const;

const processSteps = [
  {
    title: "Consultation",
    description:
      "We understand your business needs, project goals, location, budget, and display requirements.",
  },
  {
    title: "Site Survey",
    description:
      "Our team checks the installation area, viewing distance, power access, mounting conditions, and technical requirements.",
  },
  {
    title: "Solution Planning",
    description:
      "We recommend the right display size, pixel pitch, brightness, controller, CMS, and installation method.",
  },
  {
    title: "Product Supply",
    description:
      "We provide genuine products and quality components selected for performance, durability, and long-term reliability.",
  },
  {
    title: "Installation & Configuration",
    description:
      "Our technical team handles installation, controller setup, CMS configuration, calibration, and final testing.",
  },
  {
    title: "Training & Support",
    description:
      "We provide operator training, warranty support, maintenance guidance, and dependable after-sales service.",
  },
] as const;

const industries = [
  "Retail Stores",
  "Shopping Malls",
  "Corporate Offices",
  "Hotels & Restaurants",
  "Hospitals & Clinics",
  "Educational Institutions",
  "Government Organizations",
  "Event Venues",
  "Airports & Railway Stations",
  "Outdoor Advertising Companies",
  "Conference Rooms",
  "Control Rooms",
] as const;

function SectionIntro({
  label,
  title,
  description,
  fullWidth = false,
}: {
  label: string;
  title: string;
  description: string;
  fullWidth?: boolean;
}) {
  return (
    <div className={fullWidth ? "w-full" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
        {label}
      </p>
      <h2 className="mt-4 font-black tracking-tight text-brand-ink">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m5 12 4 4L19 6" />
      </svg>
    </span>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const paths = [
    <path key="display" d="M4 5h16v11H4z M8 20h8 M12 16v4" />,
    <path key="settings" d="M12 3v3 M12 18v3 M4.9 4.9 7 7 M17 17l2.1 2.1 M3 12h3 M18 12h3 M4.9 19.1 7 17 M17 7l2.1-2.1" />,
    <path key="shield" d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />,
    <path key="support" d="M4 12a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-2 M4 12v5a2 2 0 0 0 2 2h2" />,
  ];

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-blue-50 text-brand-blue shadow-[inset_0_0_0_1px_rgba(29,78,216,0.12)]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[index % paths.length]}
      </svg>
    </span>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <section className="mt-[10px] overflow-hidden rounded-[10px] bg-[#061329] px-[15px] py-10 text-white shadow-[0_24px_70px_rgba(8,18,37,0.16)] sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
              About Us
            </p>
            <h1 className="mt-5 font-black tracking-tight text-white">
              About Arozex Technologies
            </h1>
            <p className="mt-6 text-lg leading-9 text-blue-50">
              Arozex Technologies is a smart display and technology solutions
              company dedicated to helping businesses communicate better,
              operate smarter, and grow faster through modern digital display
              and smart technology solutions.
            </p>
            <p className="mt-5 text-base leading-8 text-blue-100">
              We specialize in LED display solutions, digital signage systems,
              smart display technologies, CMS software setup, controller
              configuration, professional installation, testing, calibration,
              training, warranty support, and long-term after-sales service.
              Our goal is to deliver reliable, high-performance, and
              future-ready technology solutions that create real business value
              across Bangladesh.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/led-display" className="button-primary">
                Explore Our Solutions
              </Link>
              <Link href="/contact" className="button-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid gap-[10px] sm:grid-cols-2">
            {[
              ["LED Display", "Indoor, outdoor, billboard, and video wall solutions"],
              ["CMS Setup", "Software setup, controller configuration, and training"],
              ["Installation", "Site survey, mounting, calibration, and testing"],
              ["Support", "Warranty, maintenance, and after-sales service"],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-[10px] border border-white/12 bg-white/[0.07] p-5 shadow-[0_20px_55px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <FeatureIcon index={index} />
                <h2 className="mt-5 font-black text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            label="Who We Are"
            title="A complete technology partner for smart display projects"
            description="Arozex Technologies provides professional digital display and smart technology solutions for businesses, organizations, institutions, and commercial spaces."
          />
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              We work with clients from retail, corporate, education,
              healthcare, hospitality, events, government, and outdoor
              advertising sectors to deliver customized technology solutions
              based on their real project requirements.
            </p>
            <p>
              We do not simply supply products. We provide complete end-to-end
              solutions, including consultation, site survey, planning, product
              selection, system configuration, installation, testing, training,
              warranty support, preventive maintenance, and after-sales service.
              Every project is handled with attention to performance,
              reliability, user experience, and long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <SectionIntro
          label="What We Do"
          title="Smart display and digital technology services"
          description="Arozex Technologies delivers complete solutions for different business environments, helping organizations improve communication, increase brand visibility, manage content efficiently, and create a modern customer experience."
          fullWidth
        />
        <div className="mt-8 grid gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service}
              className="rounded-[10px] border border-blue-100 bg-white p-5 shadow-[0_18px_45px_rgba(8,18,37,0.07)] transition hover:-translate-y-1 hover:border-brand-blue/40"
            >
              <FeatureIcon index={index} />
              <h3 className="mt-4 font-black tracking-tight text-brand-ink">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[10px] grid gap-[10px] bg-transparent lg:grid-cols-2">
        <div className="rounded-[10px] bg-white px-[15px] py-10 shadow-[0_18px_50px_rgba(8,18,37,0.06)] sm:p-10">
          <SectionIntro
            label="Our Mission"
            title="Make advanced display technology accessible and reliable"
            description="Our mission is to make advanced display and smart technology solutions more accessible, reliable, and cost-effective for businesses in Bangladesh."
          />
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We aim to help our clients improve communication, enhance customer
            experience, increase brand visibility, reduce operational
            complexity, and achieve long-term business value through innovative
            technology.
          </p>
        </div>

        <div className="rounded-[10px] bg-white px-[15px] py-10 shadow-[0_18px_50px_rgba(8,18,37,0.06)] sm:p-10">
          <SectionIntro
            label="Our Vision"
            title="Become a trusted display technology partner"
            description="Our vision is to become a trusted technology partner for businesses seeking modern, reliable, and future-ready digital display solutions."
          />
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We want to build long-term relationships with clients by delivering
            quality products, expert service, transparent support, continuous
            innovation, and dependable after-sales assistance.
          </p>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            label="Why Choose Us"
            title="Built around quality, planning, and dependable support"
            description="Choosing the right technology partner is essential for long-term performance and reliable service. Arozex Technologies focuses on quality products, professional planning, expert installation, reasonable pricing, and dedicated support."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {choicePoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[10px] border border-blue-100 bg-blue-50/45 p-4 text-sm font-bold leading-6 text-brand-ink"
              >
                <CheckIcon />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <SectionIntro
          label="How We Work"
          title="A clear process from consultation to long-term support"
          description="Every project follows a practical workflow so the final solution fits the location, content goals, budget, technical requirements, and long-term service needs."
        />
        <div className="mt-8 grid gap-[10px] md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[10px] border border-blue-100 bg-white p-6 shadow-[0_18px_45px_rgba(8,18,37,0.07)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-blue text-base font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 font-black tracking-tight text-brand-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <SectionIntro
          label="Industries We Serve"
          title="Display solutions for organizations across Bangladesh"
          description="Our smart display and technology solutions are suitable for a wide range of industries and organizations across Bangladesh."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-3 rounded-[10px] border border-slate-200 bg-white px-4 py-4 font-bold text-brand-ink shadow-[0_14px_36px_rgba(8,18,37,0.055)]"
            >
              <CheckIcon />
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro
            label="Quality Commitment"
            title="Stable performance, strong visuals, and reliable service life"
            description="At Arozex Technologies, quality is not limited to the product alone. We focus on the complete project experience, from planning and product selection to installation, configuration, testing, and long-term support."
          />
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Every solution is designed to deliver stable performance, strong
              visual impact, easy operation, and reliable service life.
            </p>
            <p>
              We believe technology should simplify communication, improve
              business presentation, and create measurable value. That is why we
              combine advanced display technologies, genuine components,
              professional engineering, and customer-focused support in every
              project.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[10px] overflow-hidden rounded-[10px] bg-[#061329] px-[15px] py-10 text-white shadow-[0_24px_70px_rgba(8,18,37,0.16)] sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-200">
              Start Your Project
            </p>
            <h2 className="mt-4 font-black tracking-tight text-white">
              Let&apos;s Build a Smarter Display Solution for Your Business
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-blue-100 sm:text-lg">
              Whether you need an indoor LED display, outdoor LED billboard,
              LED video wall, digital signage system, or complete smart
              technology solution, Arozex Technologies is ready to support your
              project from planning to installation and long-term service.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/contact" className="button-primary">
              Get a Free Consultation
            </Link>
            <a href={`tel:${site.contact.phone}`} className="button-secondary">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
