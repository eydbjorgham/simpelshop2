import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import AddToCart from "./AddToCart";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="rounded-2xl bg-white shadow-lg p-4 hover:shadow-xl transition-shadow">
          <Link href={`/detalje/${product.id}`}>
            <Image
              src={product.thumbnail}
              loading="eager"
              alt="product image"
              width={300}
              height={200}
              className="w-full rounded-2xl mb-4"
            />
            <h2 className="text-s mr-2 mb-2">{product.title}</h2>
            <p className="text-s mb-2">{product.price} $</p>
          </Link>
          <AddToCart id={product.id} title={product.title} price={product.price} />
        </div>
      ))}
    </div>
  );
};
 
export default ProductCard;
