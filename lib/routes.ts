export const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/about-us": "About Us",
  "/contact": "Contact",
};

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATIC_ROUTES = ["/", "/about-us", "/contact"] as const;

export const HIDE_VISUAL_BREADCRUMB_ROUTES = ["/contact"] as const;
