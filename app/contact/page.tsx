import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { createContactPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Arozex Technologies for LED display solutions, digital signage systems, installation, CMS setup, quotation support, and after-sales service in Bangladesh.",
  pathname: "/contact",
});

const contactDetails = [
  {
    title: "Phone",
    value: site.contact.phone,
    extra: "",
    href: `tel:${site.contact.phone}`,
    icon: "phone",
  },
  {
    title: "Email",
    value: site.contact.email,
    extra: "",
    href: `mailto:${site.contact.email}`,
    icon: "mail",
  },
  {
    title: "Office Address",
    value: site.contact.address,
    extra: "",
    href: null,
    icon: "pin",
  },
  {
    title: "Business Hours",
    value: "Saturday - Thursday: 9:00 AM - 6:00 PM",
    extra: "Friday: Closed",
    href: null,
    icon: "clock",
  },
] as const;

const quotationNeeds = [
  {
    title: "Display Size",
    icon: "size",
  },
  {
    title: "Indoor or Outdoor Use",
    icon: "home",
  },
  {
    title: "Installation Location",
    icon: "pin",
  },
  {
    title: "Pixel Pitch Requirement",
    icon: "pixels",
  },
  {
    title: "Required Delivery Timeline",
    icon: "calendar",
  },
  {
    title: "Budget Range",
    icon: "budget",
  },
  {
    title: "Content Management Requirement",
    icon: "screen",
  },
] as const;

const supportItems = [
  "Product Consultation",
  "Site Survey",
  "Display Planning",
  "Controller & CMS Setup",
  "Installation Support",
  "Testing & Calibration",
  "Warranty Support",
  "Preventive Maintenance",
  "After-Sales Service",
] as const;

const inputClass =
  "h-12 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-blue-100";

function BlueMark() {
  return <span className="block h-1 w-9 rounded-full bg-brand-blue" />;
}

function Icon({ name }: { name: string }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white shadow-[0_14px_30px_rgba(29,78,216,0.22)]">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {name === "phone" ? (
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.64 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.3a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.6.64A2 2 0 0 1 22 16.92z" />
        ) : null}
        {name === "mail" ? (
          <>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </>
        ) : null}
        {name === "pin" ? (
          <>
            <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </>
        ) : null}
        {name === "clock" ? (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </>
        ) : null}
      </svg>
    </span>
  );
}

function LineIcon({ name }: { name: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center text-brand-blue">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {name === "size" ? (
          <>
            <path d="M4 9V4h5" />
            <path d="M20 15v5h-5" />
            <path d="M4 4l7 7" />
            <path d="M20 20l-7-7" />
          </>
        ) : null}
        {name === "home" ? (
          <>
            <path d="M3 11 12 3l9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
          </>
        ) : null}
        {name === "pin" ? (
          <>
            <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </>
        ) : null}
        {name === "pixels" ? (
          <>
            <path d="M4 4h3v3H4zM10.5 4h3v3h-3zM17 4h3v3h-3zM4 10.5h3v3H4zM10.5 10.5h3v3h-3zM17 10.5h3v3h-3zM4 17h3v3H4zM10.5 17h3v3h-3zM17 17h3v3h-3z" />
          </>
        ) : null}
        {name === "calendar" ? (
          <>
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M8 3v4M16 3v4M4 10h16" />
            <path d="m9 15 2 2 4-5" />
          </>
        ) : null}
        {name === "budget" ? (
          <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v10" />
            <path d="M15 9.5A3 3 0 0 0 12 8c-1.7 0-3 1-3 2.4 0 3.2 6 1.4 6 4.6 0 1.4-1.3 2.5-3 2.5a3.6 3.6 0 0 1-3.3-1.9" />
          </>
        ) : null}
        {name === "screen" ? (
          <>
            <rect x="3" y="5" width="18" height="13" rx="2" />
            <path d="M8 21h8M12 18v3" />
            <path d="m10 10 4 2-4 2z" />
          </>
        ) : null}
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3 w-3"
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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={createContactPageSchema()} />

      <section className="mt-[10px] rounded-[10px] bg-white px-[15px] py-8 sm:py-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <BlueMark />
            <h1 className="mt-3 font-black tracking-tight text-brand-ink">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Have a project in mind? Contact Arozex Technologies today to
              discuss your display and technology requirements. Our team will
              help you choose the right solution based on your location, display
              size, viewing distance, budget, and business goals.
            </p>

            <div className="mt-7 grid gap-4">
              {contactDetails.map((item) => {
                const card = (
                  <>
                    <Icon name={item.icon} />
                    <div>
                      <h2 className="!text-[15px] font-black text-brand-ink">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm font-bold leading-6 text-brand-ink">
                        {item.value}
                      </p>
                      {item.extra ? (
                        <p className="text-sm font-bold leading-6 text-brand-ink">
                          {item.extra}
                        </p>
                      ) : null}
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-5 rounded-[8px] bg-slate-50 px-5 py-4 shadow-[0_14px_34px_rgba(8,18,37,0.045)] transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    {card}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 rounded-[8px] bg-slate-50 px-5 py-4 shadow-[0_14px_34px_rgba(8,18,37,0.045)]"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[10px] border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(8,18,37,0.075)] sm:p-7">
            <BlueMark />
            <h2 className="mt-3 font-black tracking-tight text-brand-ink">
              Send Us a Message
            </h2>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Full Name" className={inputClass} />
                <input type="tel" placeholder="Phone Number" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Company / Organization Name"
                  className={inputClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  className={`${inputClass} appearance-none bg-[linear-gradient(45deg,transparent_50%,#64748b_50%),linear-gradient(135deg,#64748b_50%,transparent_50%)] bg-[length:5px_5px,5px_5px] bg-[position:calc(100%-18px)_50%,calc(100%-13px)_50%] bg-no-repeat text-slate-500`}
                  defaultValue=""
                  aria-label="Service Interest"
                >
                  <option value="" disabled>
                    Service Interest
                  </option>
                  <option>Indoor LED Display</option>
                  <option>Outdoor LED Billboard</option>
                  <option>LED Video Wall</option>
                  <option>Digital Signage System</option>
                  <option>CMS Setup & Support</option>
                </select>
                <input
                  type="text"
                  placeholder="Project Location"
                  className={inputClass}
                />
              </div>
              <textarea
                rows={7}
                placeholder="Message"
                className="rounded-[8px] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-brand-ink outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[7px] bg-brand-blue px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(29,78,216,0.2)] transition hover:-translate-y-0.5 hover:bg-brand-navy"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4Z" />
                </svg>
                Send Message
              </button>

              <p className="mx-auto flex max-w-xl items-start justify-center gap-2 text-center text-sm leading-6 text-slate-500">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                Our team will review your inquiry and contact you as soon as
                possible with the right solution or quotation.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] bg-blue-50 px-[15px] py-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <h2 className="font-black tracking-tight text-brand-ink">
              Need a Quick Quotation?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700">
              For faster quotation support, please share your required display
              size, installation location, indoor or outdoor usage, preferred
              pixel pitch if known, and project timeline. This helps our
              technical team recommend the most suitable LED display solution for
              your business.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.contact.phone}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[7px] bg-brand-blue px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(29,78,216,0.2)] transition hover:-translate-y-0.5 hover:bg-brand-navy"
              >
                <IconSmall name="phone" />
                Call for Quotation
              </a>
              <a
                href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[7px] bg-[#22A846] px-5 text-sm font-black text-white shadow-[0_14px_34px_rgba(34,168,70,0.2)] transition hover:-translate-y-0.5 hover:bg-[#168138]"
              >
                <IconSmall name="whatsapp" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {quotationNeeds.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[112px] flex-col items-center justify-center rounded-[8px] bg-white px-4 py-4 text-center shadow-[0_14px_34px_rgba(8,18,37,0.055)]"
              >
                <LineIcon name={item.icon} />
                <h3 className="mt-2 max-w-[150px] !text-[14px] font-black !leading-5 text-brand-ink">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[10px] grid gap-[10px] bg-transparent lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[10px] bg-white px-[15px] py-8 sm:p-8">
          <h2 className="font-black tracking-tight text-brand-ink">
            Our Support Areas
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Arozex Technologies provides LED display and smart technology
            solutions for businesses across Bangladesh.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            We support clients in Dhaka, Chattogram, Sylhet, Khulna, Rajshahi,
            Barishal, Rangpur, Mymensingh, and other major locations.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm font-black leading-6 text-brand-ink"
              >
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[10px] bg-blue-50 px-[15px] py-8 sm:p-8">
          <h2 className="font-black tracking-tight text-brand-ink">Find Us</h2>
          <p className="mt-2 text-sm font-black text-brand-ink">
            Arozex Technologies Office Location
          </p>
          <div className="mt-5 overflow-hidden rounded-[8px] border border-blue-100 bg-white shadow-[0_16px_40px_rgba(8,18,37,0.07)]">
            <iframe
              title="Arozex Technologies office location map"
              src="https://www.google.com/maps?q=55%20Shaheed%20Tajuddin%20Ahmed%20Ave%2C%20Dhaka%201212&output=embed"
              className="h-[290px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function IconSmall({ name }: { name: "phone" | "whatsapp" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "phone" ? (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.64 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.3a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.6.64A2 2 0 0 1 22 16.92z" />
      ) : (
        <>
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0 12 12 0 0 0 1.8 18l-1.4 5.2 5.3-1.4A12 12 0 0 0 24 11.9a11.8 11.8 0 0 0-3.5-8.4Z" />
          <path d="M8.4 6.7c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.8 2.7 1 3.2.8 3.8.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4l-2.2-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.3-3.7c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.4Z" />
        </>
      )}
    </svg>
  );
}
