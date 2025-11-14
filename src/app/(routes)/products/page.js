import Navbar from "@/components/Navbar"; 
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import Kurv from "@/components/Kurv";

export default function Home({ searchParams }) {
  return (  
    <section>
      <Navbar />
      <div className="flex gap-6 p-6">
        <div className="flex-1">
          <Suspense>
            <ProductCardContainer searchParams={searchParams} />
          </Suspense>
        </div>
        <div className="w-80">
          <Kurv />
        </div>
      </div>
    </section>
  )};

  async function ProductCardContainer({ searchParams }) {
const { category } = await searchParams;
console.log(category);
return <ProductCard category={category}/>;
}