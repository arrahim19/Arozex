export const siteConfig = {
  name: "Arozex Technologies",
  url: "https://www.arozex.com",
} as const;

export const site = {
  ...siteConfig,
  domain: "www.arozex.com",
  description:
    "Arozex Technologies provides smart display and digital technology solutions that help businesses communicate better, work smarter, and grow faster.",
  ogImage: "/images/banner/Arozex-technologies-banner-image-1.webp",
  contact: {
    email: "info@arozex.com",
    phone: "+8801410043419",
    whatsapp: "+8801410043419",
    address: "55 Shaheed Tajuddin Ahmed Ave, Dhaka 1212",
  },
} as const;

export const siteServices = [
  "Smart Display Solutions",
  "Technology Services",
  "Digital Transformation",
  "Support & Maintenance",
] as const;

export const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
] as const;
