"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";
import { useFormStatus } from "react-dom";

const ResponseMessage = ({ state }) => {
  return (
    <>
      {state.success === true && (
        <p className="mr-44 text-green-600">Produkt tilføjet</p>
      )}
      {state.success === false && (
        <p className="mr-44 text-red-600">Produkt ikke tilføjet</p>
      )}
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`cursor-pointer border-b-2 border-(--h1-color) p-2 text-(--h1-color) hover:border-0 hover:outline-2 ${pending ? "cursor-not-allowed opacity-50" : ""}`}
      disabled={pending}
    >
      {pending ? "Submitting..." : "Add product"}
    </button>
  );
};

const ProductForm = () => {
  const [state, postProduct] = useActionState(submitProduct, {
    success: null,
    error: {},
    fields: {},
  });
  console.log("State i ProductForm:", state);

  return (
    <>
      <ResponseMessage state={state} />
      <form action={postProduct}>
        {state.error?.productName && (
          <p className="text-red-600">{state.error.productName}</p>
        )}
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          defaultValue={state.fields?.productName}
          className="mr-2 rounded border border-(--h1-color) p-2"
        />
        {state.error?.productPrice && (
          <p className="text-red-600">{state.error.productPrice}</p>
        )}
        <input
          type="text"
          name="productprice"
          placeholder="Product Price"
          defaultValue={state.fields?.productPrice}
          className="mr-2 rounded border border-(--h1-color) p-2"
        />
        <SubmitButton />
      </form>
    </>
  );
};

export default ProductForm;
