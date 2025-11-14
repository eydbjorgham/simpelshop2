import Image from "next/image";
import Navbar from "./Navbar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Suspense } from "react";
import Kurv from "./Kurv";
import Link from "next/link";
import Reviews from "./Reviews";

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
    <div className="grid grid-rows-[auto_1fr_auto_auto]">
      <nav className="sticky row-1 flex justify-center space-x-24 p-8 text-xl">
        <Navbar />
      </nav>
        <div className="row-2 flex items-center ml-6 pb-6 cursor-pointer">
          <MdKeyboardArrowLeft size={40} />
          <Link href="/products" className="text-2xl">Tilbage</Link>
        </div>
      <div className="row-3 ml-6 flex gap-10">
        <Image
          loading="eager"
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={300}
          className="rounded-4xl bg-white shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="leading-10 max-w-xs">{product.description}</p>
        </div>
        <div className="ml-auto mr-20">
          <Kurv />
        </div>
      </div>
      <div className="row-4 ml-6 flex gap-4 p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl bg-white shadow-lg"
        />
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl bg-white shadow-lg"
        />
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl bg-white shadow-lg"
        />
      </div>
      <Reviews rating={product.rating} reviews={product.reviews}/>
    </div>
  );
};

export default DisplayProduct;
