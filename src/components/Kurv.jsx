"use client";
import useStore from "@/store/favorit";
import Image from "next/image";
import Link from "next/link";

const Kurv = ({ variant }) => {
  const { favorite, toggleFavorite } = useStore();
  const totalPrice = favorite.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={variant === "payment" ? "" : "bg-white rounded-2xl shadow-lg p-6 sticky top-6"}>
      <h2 className="text-2xl font-bold mb-4">Kurv</h2>
      
      {favorite.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Din kurv er tom</p>
      ) 
      : 
      (
        <>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {favorite.map((item) => (
              <div key={item.id} className="flex justify-between items-start border-b pb-3">
                {variant === "payment" && item.thumbnail && (
                  <Image
                    src={item.thumbnail}
                    alt="billede"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover mr-3"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.price} $</p>
                </div>

              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">{totalPrice.toFixed(2)} $</span>
            </div>
            {variant !== "payment" && (
              <Link href="/payment" className="block">
                <button className="border cursor-pointer p-4 mt-6 w-full rounded-2xl radius-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  Gå til betaling
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Kurv;
