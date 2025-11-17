import Image from "next/image";
import { Suspense } from "react";
import CategoryDropdown from "./CategoryDropdown";

const Categories = () => {

  return (
    <Suspense>
      <FetchCategories />
    </Suspense>
  );

}


const FetchCategories = async () => {
  "use server";
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  console.log(categories);
  return <CategoryDropdown categories={categories} />;
};

export default Categories;