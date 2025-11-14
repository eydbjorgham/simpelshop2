import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      favorite: [],
      toggleFavorite: (product) => {
        const current = get().favorite;
        const exists = current.find((fav) => fav.id === product.id);
        set({
          favorite: exists
            ? current.filter((fav) => fav.id !== product.id) // Remove if exists
            : [...current, product], // Add if doesn't exist
        });
      },
    }),
    {
      name: "favorite-storage",
    },
  ),
);

export default useStore;
