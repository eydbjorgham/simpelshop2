import Kurv from "@/components/Kurv";
import React from "react";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const Payment = () => {
    return (
      <section>
        <Navbar />
        <Suspense>
          <div className="mt-16 mr-72 ml-72">
            <Kurv variant="payment" />
            <button className="mx-auto mt-16 block w-64 cursor-pointer border-0 border-b-2 border-(--h1-color) p-4 text-lg font-semibold hover:outline-2 hover:outline-(--h1-color) hover:border-0">
              Betal nu
            </button>
          </div>
        </Suspense>
      </section>
    );
}
 
export default Payment;