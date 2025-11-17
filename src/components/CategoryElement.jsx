"use client";
import {useRouter} from 'next/navigation';

import React from "react";
const CategoryElement = ({ category }) => {
    const router = useRouter ();
    return (
      <div
        onClick={() => router.push(`?category=${category}`)}
      >
        <p className="text-s">{category}</p>{" "}
      </div>
    );
}
 
export default CategoryElement;
