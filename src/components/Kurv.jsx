"use client";
import useStore from "@/store/favorit";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const Kurv = ({ variant }) => {
  const { favorite, toggleFavorite } = useStore();
  const totalPrice = favorite.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={
        variant === "payment"
          ? ""
          : "sticky top-6 rounded-2xl bg-white p-6 shadow-lg"
      }
    >
      <div className={inter.className}>
        <h2 className="mb-4 text-2xl font-bold">Kurv</h2>

        {favorite.length === 0 ? (
          <p className="py-4 text-center text-gray-500">Din kurv er tom</p>
        ) : (
          <>
            <div className="max-h-96 space-y-3 overflow-y-auto">
              {favorite.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between border-b pb-3"
                >
                  {variant === "payment" && item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      alt="billede"
                      width={80}
                      height={80}
                      className="mr-3 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.price} $</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">
                  {totalPrice.toFixed(2)} $
                </span>
              </div>
              {variant !== "payment" && (
                <Link href="/payment" className="block">
                  <button className="mt-6 w-full cursor-pointer border-0 border-b-2 border-(--h1-color) p-4 text-lg font-semibold hover:outline-2 hover:outline-(--h1-color)">
                    Gå til betaling
                  </button>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Kurv;
