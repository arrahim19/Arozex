import Image from "next/image";
import Link from "next/link";

import { NAVIGATION_LINKS } from "@/lib/routes";
import { legalLinks, site, siteServices } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-[10px] bg-[#040d1f] text-white">
      <div className="container-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
        <div className="max-w-sm">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={225}
            height={44}
            className="h-10 w-auto"
          />
          <p className="mt-6 text-sm leading-7 text-slate-300">{site.description}</p>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">Quick Links</p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">Our Services</p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            {siteServices.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold text-white">Contact Info</p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <a className="block transition hover:text-white" href={`tel:${site.contact.phone}`}>
              {site.contact.phone}
            </a>
            <a className="block transition hover:text-white" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <p>{site.contact.address}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-4 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
