import type { MetadataRoute } from "next";

import { getLedProductPath, ledProducts } from "@/lib/led-products";
import { STATIC_ROUTES } from "@/lib/routes";
import { generateCanonical } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = ledProducts.map((product) => getLedProductPath(product));
  const routes = [...STATIC_ROUTES, ...productRoutes];

  return routes.map((route) => ({
    url: generateCanonical(route),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/led-display" ? 0.9 : 0.8,
  }));
}
