export const siteConfig = {
  name: "Arozex Technologies",
  url: "https://www.arozex.com",
} as const;

export const site = {
  ...siteConfig,
  domain: "www.arozex.com",
  description:
    "Arozex Technologies provides smart display and digital technology solutions that help businesses communicate better, work smarter, and grow faster.",
  ogImage: "/images/banner/Banner%20image%201.webp",
  contact: {
    email: "info@arozex.com",
    phone: "09696802739",
    whatsapp: "09696802739",
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
