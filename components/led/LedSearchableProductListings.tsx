"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { getLedProductPath, type LedProduct } from "@/lib/led-products";

import { LedProductGrid } from "./LedProductGrid";

type LedSearchableProductListingsProps = {
  products: LedProduct[];
};

function normalizeSearchValue(value: string) {
  return value.toLowerCase().replace(/[^\w\s.]/g, " ").replace(/\s+/g, " ").trim();
}

function getSearchableProductText(product: LedProduct) {
  return normalizeSearchValue(
    [
      product.title,
      product.category,
      product.pixelPitch,
      product.shortDescription,
      product.description,
      ...product.features,
      ...product.specifications.flatMap((item) => [item.label, item.value]),
    ].join(" "),
  );
}

export function LedSearchableProductListings({
  products,
}: LedSearchableProductListingsProps) {
  return (
    <Suspense fallback={<ProductListings products={products} searchQuery="" rawSearchQuery="" />}>
      <SearchableProductListings products={products} />
    </Suspense>
  );
}

function SearchableProductListings({ products }: LedSearchableProductListingsProps) {
  const searchParams = useSearchParams();
  const searchQuery = normalizeSearchValue(searchParams.get("q") ?? "");
  const rawSearchQuery = searchParams.get("q") ?? "";

  return (
    <ProductListings
      products={products}
      searchQuery={searchQuery}
      rawSearchQuery={rawSearchQuery}
    />
  );
}

function ProductListings({
  products,
  searchQuery,
  rawSearchQuery,
}: LedSearchableProductListingsProps & {
  searchQuery: string;
  rawSearchQuery: string;
}) {
  const visibleProducts = searchQuery
    ? products.filter((product) => getSearchableProductText(product).includes(searchQuery))
    : products;

  return (
    <>
      <section id="led-products" className="mt-[10px] bg-transparent pb-16 sm:pb-20">
        <div className="w-full">
          {visibleProducts.length ? (
            <LedProductGrid products={visibleProducts} />
          ) : (
            <div className="rounded-[10px] border border-slate-200 bg-white p-8 text-center text-base font-semibold text-slate-600 shadow-[0_18px_45px_rgba(8,18,37,0.07)]">
              No LED display products found for &quot;{rawSearchQuery}&quot;.
            </div>
          )}
        </div>
      </section>

      <section className="mt-[10px] rounded-[10px] px-[15px] py-10 sm:py-12">
        <div className="w-full">
          <div className="mb-6">
            <h2 className="font-black tracking-tight text-brand-ink">
              LED Display Price List in Bangladesh
            </h2>
            <p className="mt-3 w-full text-base leading-7 text-slate-600">
              Explore the latest LED display price in Bangladesh, compare indoor
              and outdoor LED display models, specifications, pixel pitch, and
              pricing to choose the ideal solution for your business.
            </p>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(8,18,37,0.07)]">
            <div className="w-full">
              <table className="w-full table-fixed border-collapse text-left text-sm">
                <thead className="bg-brand-blue text-white">
                  <tr>
                    <th scope="col" className="w-[68%] px-4 py-4 font-bold sm:px-6">
                      Product Name
                    </th>
                    <th scope="col" className="w-[32%] px-4 py-4 text-right font-bold sm:px-6">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {visibleProducts.map((product) => (
                    <tr key={product.slug} className="transition hover:bg-blue-50/70">
                      <td className="break-words px-4 py-4 font-semibold text-brand-ink sm:px-6">
                        <Link
                          href={getLedProductPath(product)}
                          className="text-brand-blue underline-offset-4 hover:underline"
                        >
                          {product.title}
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-right font-bold text-brand-ink sm:px-6">
                        &#2547; {product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
