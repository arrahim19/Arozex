import type { Metadata } from "next";

import { site, siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  pathname: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
};

const ABSOLUTE_URL_PATTERN = /^[a-zA-Z][a-zA-Z\d+\-.]*:/;

function createMetadataImageUrl() {
  return new URL(site.ogImage, `${siteConfig.url}/`).toString();
}

export function normalizeCanonicalPath(pathname: string) {
  if (!pathname) {
    return "/";
  }

  let normalizedPathname = pathname.trim();

  if (ABSOLUTE_URL_PATTERN.test(normalizedPathname)) {
    try {
      normalizedPathname = new URL(normalizedPathname).pathname;
    } catch {
      normalizedPathname = pathname.trim();
    }
  }

  const [withoutHash] = normalizedPathname.split("#");
  const [withoutQuery] = withoutHash.split("?");

  let pathOnly = withoutQuery.replace(/\\/g, "/").toLowerCase();
  pathOnly = pathOnly.replace(/\/{2,}/g, "/");

  if (!pathOnly || pathOnly === "/") {
    return "/";
  }

  if (!pathOnly.startsWith("/")) {
    pathOnly = `/${pathOnly}`;
  }

  pathOnly = pathOnly.replace(/\/+$/g, "");

  return `${pathOnly}/`;
}

export function generateCanonical(pathname: string) {
  return new URL(normalizeCanonicalPath(pathname), `${siteConfig.url}/`).toString();
}

export function createRootMetadata(): Metadata {
  const routeUrl = generateCanonical("/");
  const imageUrl = createMetadataImageUrl();

  return {
    metadataBase: new URL(generateCanonical("/")),
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    alternates: {
      canonical: routeUrl,
    },
    openGraph: {
      title: site.name,
      description: site.description,
      url: routeUrl,
      siteName: site.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: `${site.name} hero banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description: site.description,
      images: [imageUrl],
    },
    other: {
      "twitter:url": routeUrl,
    },
    icons: {
      icon: "/site-icon.png",
      shortcut: "/site-icon.png",
      apple: "/site-icon.png",
    },
  };
}

export function createPageMetadata({
  title,
  description,
  pathname,
  type,
  absoluteTitle,
}: MetadataInput): Metadata {
  const routeUrl = generateCanonical(pathname);
  const imageUrl = createMetadataImageUrl();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: routeUrl,
    },
    openGraph: {
      title,
      description,
      url: routeUrl,
      siteName: site.name,
      type: type ?? "article",
      images: [
        {
          url: imageUrl,
          width: 1600,
          height: 900,
          alt: `${site.name} hero banner`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "twitter:url": routeUrl,
    },
  };
}
