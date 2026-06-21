"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { HIDE_VISUAL_BREADCRUMB_ROUTES } from "@/lib/routes";
import { createBreadcrumbSchema } from "@/lib/schema";

type BreadcrumbProps = {
  customLabels?: Record<string, string>;
};

export function Breadcrumb({ customLabels }: BreadcrumbProps) {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const items = getBreadcrumbItems(pathname, customLabels);
  const schema = createBreadcrumbSchema(pathname, customLabels);
  const hideVisualBreadcrumb = HIDE_VISUAL_BREADCRUMB_ROUTES.includes(
    pathname as (typeof HIDE_VISUAL_BREADCRUMB_ROUTES)[number],
  );

  return (
    <>
      {hideVisualBreadcrumb ? null : (
        <div className="border-b border-brand-line/70 bg-white/90">
          <div className="container-shell py-4">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;

                  return (
                    <li key={item.href} className="flex items-center gap-2">
                      {isLast ? (
                        <span className="font-medium text-brand-ink">{item.name}</span>
                      ) : (
                        <Link className="transition hover:text-brand-blue" href={item.href}>
                          {item.name}
                        </Link>
                      )}
                      {!isLast ? <span aria-hidden="true">/</span> : null}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
