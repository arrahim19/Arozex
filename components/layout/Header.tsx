"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getLedProductPath, ledProducts, type LedProduct } from "@/lib/led-products";
import { NAVIGATION_LINKS } from "@/lib/routes";
import { site } from "@/lib/site";

function SearchIcon({ className = "h-4 w-4 shrink-0 text-brand-navy" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.34 1.76.64 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.3a2 2 0 0 1 2.11-.45c.84.3 1.71.52 2.6.64A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function isRouteActive(pathname: string | null, href: string) {
  if (!pathname) {
    return false;
  }

  const normalizedPath = pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return normalizedPath === href;
}

function createSearchPath(query: string) {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return "/led-display/";
  }

  const params = new URLSearchParams();
  params.set("q", trimmedQuery);

  return `/led-display/?${params.toString()}`;
}

function normalizeSearchValue(value: string) {
  return value.toLowerCase().replace(/[^\w\s.]/g, " ").replace(/\s+/g, " ").trim();
}

function getSearchableProductText(product: LedProduct) {
  return normalizeSearchValue(
    [
      product.title,
      product.category,
      product.pixelPitch,
      product.shortDescription,
      product.description,
      ...product.features,
      ...product.specifications.flatMap((item) => [item.label, item.value]),
    ].join(" "),
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const normalizedSearchQuery = normalizeSearchValue(searchQuery);
  const searchResults = normalizedSearchQuery
    ? ledProducts
        .filter((product) => getSearchableProductText(product).includes(normalizedSearchQuery))
        .slice(0, 6)
    : [];
  const shouldShowSearchResults = isSearchFocused && Boolean(normalizedSearchQuery);

  useEffect(() => {
    if (!pathname?.startsWith("/led-display")) {
      setSearchQuery("");
      return;
    }

    setSearchQuery(new URLSearchParams(window.location.search).get("q") ?? "");
  }, [pathname]);

  function updateSearchRoute(query: string) {
    router.replace(createSearchPath(query), { scroll: false });
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextQuery = event.target.value;

    setSearchQuery(nextQuery);

    if (pathname?.startsWith("/led-display")) {
      updateSearchRoute(nextQuery);
    }
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateSearchRoute(searchQuery);
  }

  return (
    <header className="sticky top-0 z-30 nav-glass backdrop-blur">
      <div className="container-shell py-0 lg:py-4">
        <div className="lg:hidden">
          <div className="grid h-16 grid-cols-[42px_minmax(0,1fr)_42px_48px] items-center gap-2 px-1">
            <button
              type="button"
              aria-label="Open mobile navigation"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center text-white"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M5 7h14" />
                <path d="M5 12h14" />
                <path d="M5 17h14" />
              </svg>
            </button>

            <Link href="/" className="flex min-w-0 justify-center">
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={225}
                height={44}
                priority
                className="h-7 max-w-full object-contain"
              />
            </Link>

            <Link
              href="/led-display"
              aria-label="Search"
              className="flex h-11 w-11 items-center justify-center text-white transition hover:text-brand-blue"
            >
              <SearchIcon className="h-7 w-7" />
            </Link>

            <a
              href={`tel:${site.contact.phone}`}
              aria-label={`Call ${site.contact.phone}`}
              className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition hover:bg-brand-blue/20"
            >
              <PhoneIcon className="h-6 w-6" />
            </a>
          </div>

          {isMobileMenuOpen ? (
            <nav
              aria-label="Mobile navigation"
              className="mt-4 grid gap-2 rounded-[1.25rem] border border-white/10 bg-[#020b1d] p-3 shadow-[0_16px_36px_rgba(0,10,28,0.22)]"
            >
              {NAVIGATION_LINKS.map((item) => {
                const childLinks = "children" in item ? item.children : undefined;
                const isActive = childLinks ? false : isRouteActive(pathname, item.href);

                return (
                  <div key={item.href}>
                    {childLinks ? (
                      <button
                        type="button"
                        className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-brand-blue text-white"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                    {childLinks ? (
                      <div className="mt-1 grid gap-1 pl-3">
                        {childLinks.map((child) => {
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-brand-blue hover:text-white"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
          ) : null}
        </div>

        <div className="hidden items-center justify-between gap-5 lg:flex">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5 lg:flex-[1.2]">
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

            <div className="relative min-w-0 max-w-[520px] flex-1">
              <form
                action="/led-display"
                onSubmit={handleSearchSubmit}
                role="search"
                className="flex h-11 min-w-0 items-center gap-3 rounded-full border border-white/25 bg-white px-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition focus-within:border-brand-blue focus-within:ring-4 focus-within:ring-brand-blue/20 sm:h-12 sm:px-5"
              >
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="flex shrink-0 items-center justify-center"
                >
                  <SearchIcon />
                </button>
                <input
                  type="search"
                  name="q"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => window.setTimeout(() => setIsSearchFocused(false), 120)}
                  aria-label="Search LED displays"
                  aria-expanded={shouldShowSearchResults}
                  aria-controls="site-search-results"
                  placeholder="Search"
                  className="min-w-0 flex-1 bg-transparent text-sm font-medium text-brand-ink outline-none placeholder:text-slate-400"
                />
              </form>

              {shouldShowSearchResults ? (
                <div
                  id="site-search-results"
                  className="absolute left-0 top-[calc(100%+10px)] z-50 w-full overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(8,18,37,0.18)]"
                >
                  {searchResults.length ? (
                    <div className="max-h-[360px] overflow-y-auto py-2">
                      {searchResults.map((product) => (
                        <Link
                          key={product.slug}
                          href={getLedProductPath(product)}
                          onClick={() => {
                            setSearchQuery("");
                            setIsSearchFocused(false);
                          }}
                          className="block px-4 py-3 transition hover:bg-blue-50"
                        >
                          <span className="block text-sm font-semibold leading-5 text-brand-ink">
                            {product.title}
                          </span>
                          <span className="mt-1 block text-xs font-medium text-brand-blue">
                            {product.category} LED Display - &#2547; {product.price}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-4 text-sm font-semibold text-slate-600">
                      No products found.
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          <nav aria-label="Primary navigation" className="hidden h-12 items-center gap-7 lg:flex xl:gap-10">
            {NAVIGATION_LINKS.map((item) => {
              const childLinks = "children" in item ? item.children : undefined;
              const isActive = childLinks ? false : isRouteActive(pathname, item.href);
              const showUnderline =
                isActive || Boolean(childLinks?.some((child) => isRouteActive(pathname, child.href)));

              if (childLinks) {
                return (
                  <div key={item.href} className="group relative flex h-12 items-center">
                    <button
                      type="button"
                      className={`relative inline-flex h-12 items-center gap-1 text-sm font-medium leading-none transition ${
                        isActive ? "text-white" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-xs">
                        v
                      </span>
                      <span
                        className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-blue transition ${
                          showUnderline ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </button>
                    <div className="invisible absolute left-0 top-full z-40 w-60 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                      <div className="rounded-2xl border border-white/10 bg-[#020b1d] p-2 shadow-[0_18px_44px_rgba(0,10,28,0.28)]">
                        {childLinks.map((child) => {
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-brand-blue hover:text-white"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex h-12 items-center text-sm font-medium leading-none transition ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-blue transition ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <a
            href={`tel:${site.contact.phone}`}
            className="hidden h-12 items-center gap-2 rounded-2xl bg-brand-blue px-5 text-sm font-semibold leading-none text-white transition hover:bg-brand-navy lg:inline-flex"
          >
            <PhoneIcon />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
