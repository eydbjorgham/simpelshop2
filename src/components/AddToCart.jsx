"use client";
import useStore from "@/store/favorit";

const AddToCart = ({ id, title, price, thumbnail }) => {
  const { favorite, toggleFavorite } = useStore();
  const product = { id, title, price, thumbnail };
  const isInCart = favorite.find((fav) => fav.id === id);

  return (
    <button
      onClick={() => toggleFavorite(product)}
      className={`mt-2 w-fit cursor-pointer px-4 py-2 font-semibold transition-colors ${
        isInCart
          ? "border-2 border-(--h1-color) text-(--h1-color) transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
          : "border-0 border-b-2 border-(--h1-color) text-(--h1-color) hover:outline-2 hover:border-0"
      }`}
    >
      {isInCart ? "I kurv" : "Add to cart"}
    </button>
  );
};

export default AddToCart;