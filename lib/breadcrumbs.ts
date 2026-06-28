import { ROUTE_LABELS } from "@/lib/routes";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

function humanizeSegment(segment: string) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function normalizePath(pathname: string) {
  if (!pathname) {
    return "/";
  }

  const [pathOnly] = pathname.split(/[?#]/);
  if (!pathOnly || pathOnly === "/") {
    return "/";
  }

  return pathOnly.endsWith("/") ? pathOnly.slice(0, -1) : pathOnly;
}

export function getRouteLabel(pathname: string, customLabels?: Record<string, string>) {
  const normalizedPath = normalizePath(pathname);
  return customLabels?.[normalizedPath] ?? ROUTE_LABELS[normalizedPath];
}

export function getBreadcrumbItems(
  pathname: string,
  customLabels?: Record<string, string>,
): BreadcrumbItem[] {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath === "/") {
    return [{ name: ROUTE_LABELS["/"], href: "/" }];
  }

  const items: BreadcrumbItem[] = [{ name: ROUTE_LABELS["/"], href: "/" }];

  if (normalizedPath.startsWith("/product/")) {
    const slug = normalizedPath.split("/").filter(Boolean).at(-1) ?? "";

    return [
      ...items,
      { name: ROUTE_LABELS["/led-display"], href: "/led-display" },
      {
        name: customLabels?.[normalizedPath] ?? humanizeSegment(slug),
        href: normalizedPath,
      },
    ];
  }

  const segments = normalizedPath.split("/").filter(Boolean);

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const mappedLabel = customLabels?.[href] ?? ROUTE_LABELS[href];

    items.push({
      name: mappedLabel ?? humanizeSegment(segment),
      href,
    });
  });

  return items;
}
