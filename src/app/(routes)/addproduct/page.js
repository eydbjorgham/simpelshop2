"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
    const [state, postProduct] = useActionState(submitProduct, { error : {} });

    return(
        <div className="flex flex-col justify-center items-center h-screen">

            {state.succes &&
            (<p className="text-green-600 mr-44">Produkt tilføjet</p>)}
            
 <form action={postProduct}>
    {state.error?.productName && (<p className="text-red-600">{state.error.productName}</p>)}
  <input type="text" name="productname" placeholder="Product Name" defaultValue ={state.productName} className="border p-1 mr-2" />
  <button type="submit" className="bg-blue-300 cursor-pointer p-1 border-blue-500 border text-white">
    Add product
  </button>
</form>
</div>
);
};
 
export default addProduct;