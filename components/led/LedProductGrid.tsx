import Image from "next/image";
import Link from "next/link";

import { getLedProductPath, type LedProduct } from "@/lib/led-products";

type LedProductGridProps = {
  products: LedProduct[];
};

export function LedProductGrid({ products }: LedProductGridProps) {
  return (
    <div className="grid gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.slug}
          className="group relative overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(8,18,37,0.08)] transition duration-200 hover:-translate-y-1 hover:border-brand-blue/50"
        >
          <Link
            href={getLedProductPath(product)}
            aria-label={`View details for ${product.title}`}
            className="absolute inset-0 z-10"
          />
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          <div className="p-6">
            <h2 className="!text-[20px] font-semibold !leading-tight tracking-tight text-brand-ink">
              {product.title}
            </h2>
            <p className="mt-2 text-lg font-bold text-brand-blue">&#2547; {product.price}</p>
            <div className="relative z-20 mt-5 flex flex-wrap items-center gap-3">
              <Link
                href={getLedProductPath(product)}
                className="inline-flex items-center justify-center rounded-[10px] border border-brand-blue px-4 py-2 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
              >
                View Details
                <span aria-hidden="true">-&gt;</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[10px] bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-navy"
              >
                Get Quotation
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
