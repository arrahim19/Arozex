"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAVIGATION_LINKS } from "@/lib/routes";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 nav-glass backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={225}
              height={44}
              priority
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-10 md:flex">
            {NAVIGATION_LINKS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-3 text-sm font-medium transition ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-blue transition ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href={`tel:${site.contact.phone}`}
            className="hidden items-center gap-2 rounded-2xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy md:inline-flex"
          >
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.64 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.3a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.6.64A2 2 0 0 1 22 16.92z" />
            </svg>
            {site.contact.phone}
          </a>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mt-4 flex items-center gap-3 overflow-x-auto md:hidden"
        >
          {NAVIGATION_LINKS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-brand-blue bg-brand-blue/15 text-white"
                    : "border-white/15 text-slate-300 hover:border-brand-blue/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={`tel:${site.contact.phone}`}
            className="whitespace-nowrap rounded-full border border-brand-blue bg-brand-blue/15 px-4 py-2 text-sm font-medium text-white"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
