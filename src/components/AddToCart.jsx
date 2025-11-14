"use client";
import useStore from "@/store/favorit";

const AddToCart = ({ id, title, price, thumbnail }) => {
  const { favorite, toggleFavorite } = useStore();
  const product = { id, title, price, thumbnail };
  const isInCart = favorite.find((fav) => fav.id === id);

  return (
    <button
      onClick={() => toggleFavorite(product)}
      className={`w-full mt-2 py-2 px-4 cursor-pointer rounded-lg font-semibold transition-colors 
        ${isInCart
          ? "bg-green-500 hover:bg-green-600 text-white"
          : "bg-blue-500 hover:bg-blue-600 text-white"
      }`}
    >
      {isInCart ? "I kurv" : "Add to cart"}
    </button>
  );
};

export default AddToCart;