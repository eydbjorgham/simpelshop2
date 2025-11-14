import Kurv from "@/components/Kurv";
import React from "react";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const Payment = () => {
    return ( 
        <section>
<Navbar />
        <Suspense>
            <div className="ml-72 mr-72 mt-16">
            <Kurv variant ="payment"
            />
            <button className="border cursor-pointer p-4 mt-16 w-64 rounded-2xl radius-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors mx-auto block">
                Betal nu
            </button>
            </div>
        </Suspense>
</section>
     );
}
 
export default Payment;