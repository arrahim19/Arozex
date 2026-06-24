import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createContactPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Arozex Technologies for smart display solutions, technology services, digital transformation, and long-term support.",
  pathname: "/contact",
});

const contactDetails = [
  {
    title: "Our Office",
    value: site.contact.address,
    extra: "",
    href: null,
  },
  {
    title: "Phone",
    value: site.contact.phone,
    extra: "",
    href: `tel:${site.contact.phone}`,
  },
  {
    title: "Email",
    value: site.contact.email,
    extra: "",
    href: `mailto:${site.contact.email}`,
  },
  {
    title: "WhatsApp",
    value: site.contact.whatsapp,
    extra: "",
    href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`,
  },
  {
    title: "Business Hours",
    value: "Saturday - Thursday: 9:00 AM - 6:00 PM",
    extra: "Friday: Closed",
    href: null,
  },
] as const;

function ContactIcon({ index }: { index: number }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#246BFF] to-[#0F4FCF] text-white shadow-[0_16px_36px_rgba(29,78,216,0.16)]">
      {index === 0 ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ) : null}
      {index === 1 ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.64 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.3a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.6.64A2 2 0 0 1 22 16.92z" />
        </svg>
      ) : null}
      {index === 2 ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ) : null}
      {index === 3 ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.36.14 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.26-1.64a11.84 11.84 0 0 0 5.68 1.45h.01c6.58 0 11.94-5.35 11.94-11.93 0-3.18-1.24-6.17-3.37-8.4Z" />
          <path d="M8.6 6.85c-.23-.52-.48-.53-.7-.54h-.6c-.21 0-.55.08-.84.39s-1.1 1.08-1.1 2.64 1.13 3.06 1.29 3.27c.16.21 2.21 3.54 5.45 4.82 2.69 1.06 3.24.85 3.82.8.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37-.31-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.31-.81 1.03-.99 1.24-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.13-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.97-2.35Z" />
        </svg>
      ) : null}
      {index === 4 ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ) : null}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={createContactPageSchema()} />

      <section className="py-16 sm:py-20">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Get In Touch
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-brand-ink sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We&apos;re here to help and answer any question you might have.
              We look forward to hearing from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="px-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Contact Information
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-brand-ink">
              Let&apos;s Start a Conversation
            </h2>

            <div className="mt-10 divide-y divide-slate-200">
              {contactDetails.map((item, index) => {
                const content = (
                  <>
                    <ContactIcon index={index} />
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-lg leading-8 text-slate-700">{item.value}</p>
                      {item.extra ? (
                        <p className="text-lg leading-8 text-slate-700">{item.extra}</p>
                      ) : null}
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 py-6 transition hover:opacity-80"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title} className="flex items-start gap-4 py-6">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_24px_64px_rgba(8,18,37,0.08)] sm:p-8">
            <h2 className="text-4xl font-semibold tracking-tight text-brand-ink">
              Send Us a Message
            </h2>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Your Message"
                className="rounded-3xl border border-slate-200 px-5 py-4 text-base text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue"
              />

              <button type="button" className="button-primary w-full gap-3 py-4 text-base">
                Send Message
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4Z" />
                </svg>
              </button>

              <div className="flex items-center gap-3 pt-2 text-sm text-slate-500">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V8a4 4 0 1 1 8 0v3" />
                </svg>
                <span>Your information is safe with us. We never share your data.</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
