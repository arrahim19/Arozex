import { Roboto } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { createRootMetadata } from "@/lib/seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/lib/schema";

import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={robotoFont.variable}
      suppressHydrationWarning
    >
      <body className="font-[var(--font-body)] text-brand-ink antialiased">
        <JsonLd data={createOrganizationSchema()} />
        <JsonLd data={createLocalBusinessSchema()} />
        <JsonLd data={createWebsiteSchema()} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <Breadcrumb />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
