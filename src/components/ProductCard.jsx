import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AddToCart from "./AddToCart";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const ProductCard =  ({ category } ) => {
return (
  <Suspense fallback={<p>Loading products...</p>}>
    <FetchProducts category={category} />
  </Suspense>
);
};

const FetchProducts = async ( { category } ) => {
    "use server";
    const url = category 
    ? `https://dummyjson.com/products/category/${category}` 
    : "https://dummyjson.com/products";
  const response = await fetch(url);
  const {products} = await response.json();
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl bg-white p-4 shadow-lg transition-shadow hover:shadow-xl"
        >
          <div className={inter.className}>
            <Link href={`/products/${product.id}`}>
              <Image
                src={product.thumbnail}
                loading="eager"
                alt="product image"
                width={300}
                height={200}
                className="mb-4 w-full rounded-2xl"
              />
              <h2 className="mr-2 mb-2 text-xl font-semibold text-(--h1-color)">
                {product.title}
              </h2>
              <p className="text-s mb-2 text-(--h1-color)">{product.price} $</p>
            </Link>
            <AddToCart
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
 
export default ProductCard;
