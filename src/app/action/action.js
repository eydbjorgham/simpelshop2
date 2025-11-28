"use server";
export const submitProduct = async (prevState, formData) => {
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");

  const state = {
    success: null,
    error: {},
    fields: {
      productName,
      productPrice,
    },
  };

  if (!productName) {
    state.error.productName = "Dette felt skal udfyldes";
  } else if (productName.length < 5) {
    state.error.productName = "Minimum 5 bogstaver";
  }

  if (!productPrice) {
    state.error.productPrice = "Dette felt skal udfyldes";
  } else if (isNaN(Number(productPrice))) {
    state.error.productPrice = "Prisen skal være et tal";
  }

  if (Object.keys(state.error).length > 0) {
    return state;
  }

  await new Promise((resolve) => setTimeout(resolve, 2000)); // bruges kun når man ønsker teste og se om der kommer loading state, ellers fjernes denne linje
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: productName,
      price: productPrice,
      /* other product data */
    }),
  });

  state.success = response.ok;
  return state;
};

// ! = IKKE (hvis der IKKE er et produktnavn, så...
// ellers hvis der er et produktnavn på UNDER 5 bogstaver, så...)
