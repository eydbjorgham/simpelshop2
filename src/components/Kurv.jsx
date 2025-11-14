"use client";
import useStore from "@/store/favorit";

const Kurv = () => {
  const { favorite, toggleFavorite } = useStore();
  const totalPrice = favorite.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-bold mb-4">Kurv</h2>
      
      {favorite.length === 0 ? (
        <p className="text-gray-500 text-center py-4">Din kurv er tom</p>
      ) : (
        <>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {favorite.map((item) => (
              <div key={item.id} className="flex justify-between items-start border-b pb-3">
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
          </div>
        </>
      )}
    </div>
  );
};

export default Kurv;
