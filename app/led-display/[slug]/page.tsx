import {
  getLedProductPath,
  ledProducts,
} from "@/lib/led-products";
import { permanentRedirect } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return ledProducts.map((product) => ({
    slug: product.slug,
  }));
}

export const dynamicParams = false;

export default async function LegacyLedProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  permanentRedirect(getLedProductPath({ slug }));
}
