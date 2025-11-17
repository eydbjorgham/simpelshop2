import Navbar from "./Navbar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Suspense } from "react";
import Kurv from "./Kurv";
import Link from "next/link";
import Reviews from "./Reviews";
import { Inter } from "next/font/google";
import ImageGallery from "./ImageGallery";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const DisplayProduct = ({ params }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchDisplayProduct params={params} />
    </Suspense>
  );
};

const FetchDisplayProduct = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  
  return (
    <div className={inter.className}>
      <div className="grid grid-rows-[auto_1fr_auto_auto]">
        <nav className="sticky row-1 flex justify-center space-x-24 text-xl">
          <Navbar />
        </nav>
        <div className="row-2 ml-6 flex cursor-pointer items-center pb-6">
          <MdKeyboardArrowLeft size={40} color="var(--h1-color)" />
          <Link href="/products" className="text-2xl text-(--h1-color)">
            Tilbage
          </Link>
        </div>
        <div className="row-3 ml-6 flex gap-10">
          <ImageGallery 
          images={product.images} 
          title={product.title} 
          thumbnail={product.thumbnail} />
          <div>
            <h1 className="mb-3 text-4xl font-bold text-(--h1-color) max-w-m leading-13">
              {product.title}
            </h1>
            <p className="max-w-xs leading-10 text-(--h1-color)">
              {product.description}
            </p>
          </div>
          <div className="mr-20 ml-auto">
            <Kurv />
          </div>
        </div>
        
        <Reviews rating={product.rating} reviews={product.reviews} />
      </div>
    </div>
  );
};

export default DisplayProduct;

