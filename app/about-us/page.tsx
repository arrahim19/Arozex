import { SectionHeader } from "@/components/sections/SectionHeader";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Arozex Technologies, our mission, vision, core values, and our business-first approach to digital transformation and software solutions.",
});

const values = [
  {
    title: "Clarity",
    description:
      "We keep communication, planning, and execution clear so businesses can make confident decisions.",
  },
  {
    title: "Reliability",
    description:
      "We build dependable systems and deliver with consistency, accountability, and care for long-term outcomes.",
  },
  {
    title: "Scalability",
    description:
      "We design digital solutions that can support growth without creating unnecessary technical friction.",
  },
  {
    title: "Partnership",
    description:
      "We work closely with clients to understand business realities and create solutions that genuinely fit.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="container-shell py-16 sm:py-20 lg:py-24">
      <section className="surface-card bg-hero-glow px-6 py-10 sm:px-10 sm:py-12">
        <SectionHeader
          eyebrow="About Us"
          title="Arozex Technologies is built to help businesses grow with smarter digital foundations"
          description="We are a professional technology company focused on delivering practical, scalable, and high-performing digital solutions. Our work is shaped by business objectives first, then translated into modern websites, software systems, automation, and digital transformation initiatives that create real momentum."
        />
      </section>

      <section className="grid gap-6 py-16 lg:grid-cols-2">
        <div className="surface-card px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
            Mission
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">
            Deliver reliable digital solutions that improve how businesses operate and grow
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Our mission is to empower businesses with technology that is modern,
            effective, and built around measurable needs. We aim to reduce
            complexity, increase efficiency, and support long-term business
            performance through thoughtful digital execution.
          </p>
        </div>

        <div className="surface-card px-6 py-8 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
            Vision
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-brand-ink">
            Become a trusted long-term technology partner for ambitious businesses
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            We envision a future where businesses of every size can use digital
            systems with confidence, speed, and strategic clarity. Arozex
            Technologies exists to make that future more accessible, practical,
            and sustainable.
          </p>
        </div>
      </section>

      <section className="py-4">
        <SectionHeader
          eyebrow="Core Values"
          title="The principles that guide our work"
          description="Our team approach stays grounded in thoughtful execution, dependable support, and business-aligned problem solving."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="surface-card px-6 py-8">
              <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="surface-card grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Business-Focused Technology Approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">
              Strategy, design, and engineering aligned to business priorities
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              At Arozex Technologies, we do not start with technology for its
              own sake. We begin by understanding operational needs, growth
              goals, customer experience challenges, and the systems that
              support the business every day.
            </p>
            <p>
              That perspective helps us deliver digital solutions that are not
              only visually modern, but also practical to manage, efficient to
              run, and strong enough to scale over time. The result is a cleaner
              path from business intent to digital execution.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
