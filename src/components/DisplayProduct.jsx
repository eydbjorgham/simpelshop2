import Image from "next/image";
import Navbar from "./Navbar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Suspense } from "react";

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
        <div className="row-2">
          <MdKeyboardArrowLeft size={30} text="Tilbage" />
        </div>
      </nav>
      <div className="row-2 ml-6 flex gap-10">
        <Image
          loading="eager"
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={300}
          className="rounded-4xl border-2 border-solid border-(--h1-color) shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold">Et produkt</h1>
          <p>Beskrivende tekst om produkt</p>
        </div>
      </div>
      <div className="row-3 ml-6 flex gap-4 p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl border-2 border-solid border-(--h1-color) shadow-lg"
        />
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl border-2 border-solid border-(--h1-color) shadow-lg"
        />
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={90}
          height={90}
          className="rounded-2xl border-2 border-solid border-(--h1-color) shadow-lg"
        />
      </div>
    </div>
  );
};

export default DisplayProduct;
