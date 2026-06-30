import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LedProductGrid } from "@/components/led/LedProductGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getLedProductBySlug,
  getLedProductPath,
  ledProducts,
  type LedProduct,
} from "@/lib/led-products";
import { createPageMetadata, generateCanonical } from "@/lib/seo";
import { site } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function cleanSchemaPrice(price: string) {
  const firstPrice = price.match(/\d[\d,]*(?:\.\d+)?/);

  if (!firstPrice) {
    return price.replace(/[^\d.]/g, "");
  }

  return firstPrice[0].replace(/,/g, "");
}

function createProductReviewSchema(product: LedProduct) {
  const primarySpec = product.specifications[0];
  const secondarySpec = product.specifications[1];
  const keyFeature = product.features[0];

  return {
    "@type": "Review",
    author: {
      "@type": "Organization",
      name: site.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    name: `${product.pixelPitch} ${product.category} LED display review`,
    reviewBody: `${product.title} is reviewed as a ${product.category.toLowerCase()} LED display solution with ${product.pixelPitch} pixel pitch. ${primarySpec.label}: ${primarySpec.value}. ${secondarySpec.label}: ${secondarySpec.value}. Key benefit: ${keyFeature}.`,
  };
}

export function generateStaticParams() {
  return ledProducts.map((product) => ({
    slug: product.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getLedProductBySlug(slug);

  if (!product) {
    return {};
  }

  return createPageMetadata({
    title: product.title,
    description: product.shortDescription,
    pathname: getLedProductPath(product),
  });
}

function createProductSchema(product: LedProduct) {
  const productUrl = generateCanonical(getLedProductPath(product));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: new URL(product.image, `${site.url}/`).toString(),
    description: product.shortDescription,
    category: `${product.category} LED Display`,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "BDT",
      price: cleanSchemaPrice(product.price),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: site.name,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "BD",
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "BDT",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "3",
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: "1",
            maxValue: "7",
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BD",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "1",
      reviewCount: "1",
    },
    review: createProductReviewSchema(product),
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
}

function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-brand-blue/30 bg-blue-50 text-brand-blue">
      {children}
    </span>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getLedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const sameCategoryProducts = ledProducts.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  );
  const otherProducts = ledProducts.filter(
    (item) => item.slug !== product.slug && item.category !== product.category,
  );
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 4);

  return (
    <>
      <JsonLd data={createProductSchema(product)} />

      <section className="mt-[10px] rounded-[10px] border border-blue-100/80 px-[15px] py-8 shadow-[0_18px_50px_rgba(8,18,37,0.06)] sm:py-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-[10px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="lg:pt-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              {product.category} LED Display
            </p>
            <h1 className="mt-5 text-[22px] font-black leading-tight tracking-tight text-brand-ink lg:text-[28px]">
              {product.title}
            </h1>
            <p className="mt-5 text-[24px] font-black tracking-tight text-brand-ink">
              &#2547; {product.price}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-[0_18px_38px_rgba(37,84,229,0.24)] transition hover:bg-brand-navy"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 15h6" />
                  <path d="M9 18h6" />
                </svg>
                Request Price
              </Link>
              <a
                href="#specifications"
                className="inline-flex items-center justify-center gap-3 rounded-[10px] border border-brand-blue bg-white px-6 py-4 text-base font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11h6" />
                  <path d="M9 15h6" />
                  <path d="M9 7h1" />
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                </svg>
                View Specification
              </a>
            </div>

            <div className="mt-6 rounded-[10px] border border-blue-100 bg-white p-6 shadow-[0_18px_42px_rgba(8,18,37,0.06)]">
              <div className="flex items-center gap-3">
                <SectionIcon>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.1 6.6L12 17.2 6.1 20.3l1.1-6.6L2.4 9l6.7-.9L12 2z" />
                  </svg>
                </SectionIcon>
                <h2 className="text-2xl font-black text-brand-blue">Key Features</h2>
              </div>
              <ul className="mt-5 grid gap-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base leading-7 text-slate-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] border border-blue-100/80 px-[15px] py-8 shadow-[0_18px_50px_rgba(8,18,37,0.05)] sm:py-10">
        <div className="flex items-center gap-4">
          <SectionIcon>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              <path d="M8 9h8" />
              <path d="M8 13h6" />
            </svg>
          </SectionIcon>
          <h2 className="text-3xl font-black tracking-tight text-brand-blue">
            Specification Description
          </h2>
        </div>
        <p className="mt-6 text-lg leading-9 text-slate-700">{product.description}</p>
      </section>

      <section id="specifications" className="mt-[10px] rounded-[10px] border border-blue-100/80 px-[15px] py-8 shadow-[0_18px_50px_rgba(8,18,37,0.05)] sm:py-10">
        <div className="flex items-center gap-4">
          <SectionIcon>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M4 10h16" />
              <path d="M10 4v16" />
            </svg>
          </SectionIcon>
          <h2 className="text-3xl font-black tracking-tight text-brand-blue">
            Specification Table
          </h2>
        </div>

        <div className="mt-6 overflow-hidden rounded-[10px] border border-blue-100">
          <div className="grid md:grid-cols-2">
            {product.specifications.map((spec) => (
              <div
                key={spec.label}
                className="grid border-b border-blue-100 text-base last:border-b-0 sm:grid-cols-[0.75fr_1fr] md:[&:nth-last-child(-n+2)]:border-b-0 md:odd:border-r md:odd:border-blue-100"
              >
                <div className="bg-slate-50 px-5 py-4 font-bold text-brand-ink">
                  {spec.label}
                </div>
                <div className="px-5 py-4 text-slate-700">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="mt-[18px] bg-transparent pb-10">
        <h2 className="mb-3 text-[24px] font-black tracking-tight text-brand-ink">
          Related Products
        </h2>
        <LedProductGrid products={relatedProducts} />
      </section>
    </>
  );
}
