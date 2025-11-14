import Navbar from "@/components/Navbar"; 
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";

export default function Home({ searchParams }) {
  return (  
    <section>
      <Navbar />
       <Suspense>
        <ProductCardContainer searchParams={searchParams} />
       </Suspense>
    </section>
  )};

  async function ProductCardContainer({ searchParams }) {
const { category } = await searchParams;
console.log(category);
return <ProductCard category={category}/>;
}