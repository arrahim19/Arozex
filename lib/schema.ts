import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { getLedProductPath, ledProducts } from "@/lib/led-products";
import { ROUTE_LABELS, STATIC_ROUTES } from "@/lib/routes";
import { generateCanonical } from "@/lib/seo";
import { site } from "@/lib/site";

function createAssetUrl(pathname: string) {
  return new URL(pathname, `${site.url}/`).toString();
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${generateCanonical("/")}#organization`,
    name: site.name,
    url: generateCanonical("/"),
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressCountry: "BD",
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${generateCanonical("/")}#localbusiness`,
    name: site.name,
    url: generateCanonical("/"),
    image: createAssetUrl(site.ogImage),
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address,
      addressLocality: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${generateCanonical("/")}#website`,
    name: site.name,
    url: generateCanonical("/"),
    description: site.description,
    publisher: {
      "@id": `${generateCanonical("/")}#organization`,
    },
  };
}

export function createCollectionPageSchema() {
  const routeItems = STATIC_ROUTES.map((href) => ({
    name: ROUTE_LABELS[href],
    url: generateCanonical(href),
  }));
  const productItems = ledProducts.map((product) => ({
    name: product.title,
    url: generateCanonical(getLedProductPath(product)),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${generateCanonical("/")}#collectionpage`,
    name: `${site.name} Website Collection`,
    url: generateCanonical("/"),
    description: site.description,
    isPartOf: {
      "@id": `${generateCanonical("/")}#website`,
    },
    about: {
      "@id": `${generateCanonical("/")}#localbusiness`,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...routeItems, ...productItems].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function createBreadcrumbSchema(
  pathname: string,
  customLabels?: Record<string, string>,
) {
  const items = getBreadcrumbItems(pathname, customLabels);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: generateCanonical(item.href),
    })),
  };
}

export function createContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: generateCanonical("/contact"),
    about: {
      "@type": "Organization",
      name: site.name,
      url: generateCanonical("/"),
    },
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      email: site.contact.email,
      telephone: site.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address,
        addressCountry: "BD",
      },
    },
  };
}
