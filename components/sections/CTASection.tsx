import Link from "next/link";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="container-shell py-20 sm:py-24">
      <div className="surface-card overflow-hidden bg-hero-glow px-6 py-12 sm:px-10 lg:px-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
          {eyebrow}
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href={primaryHref} className="button-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="button-secondary-light">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
