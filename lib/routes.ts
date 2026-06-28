export const ROUTE_LABELS: Record<string, string> = {
  "/": "Home",
  "/led-display": "LED Display",
  "/led-display/indoor-led-display": "Indoor LED Display",
  "/led-display/outdoor-led-display": "Outdoor LED Display",
  "/about-us": "About Us",
  "/contact": "Contact",
};

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  {
    href: "/led-display",
    label: "Products",
    children: [
      { href: "/led-display", label: "LED Display" },
      { href: "/led-display/indoor-led-display", label: "Indoor LED Display" },
      { href: "/led-display/outdoor-led-display", label: "Outdoor LED Display" },
    ],
  },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATIC_ROUTES = [
  "/",
  "/led-display",
  "/led-display/indoor-led-display",
  "/led-display/outdoor-led-display",
  "/about-us",
  "/contact",
] as const;

export const HIDE_VISUAL_BREADCRUMB_ROUTES = ["/contact"] as const;
