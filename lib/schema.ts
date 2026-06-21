import { getBreadcrumbItems } from "@/lib/breadcrumbs";
import { generateCanonical } from "@/lib/seo";
import { site } from "@/lib/site";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
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

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: generateCanonical("/"),
    description: site.description,
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
