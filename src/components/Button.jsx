// import { useState } from "react";
import Link from "next/link";

const Button = ({ text, href = "#" }) => {
  return (
    <Link href={href}>
      <div
        className={
          "z-10 w-fit border-0 border-b-2 border-(--h1-color) bg-transparent p-2 text-3xl font-semibold text-(--h1-color) transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
        }
        //   onClick={onClick}
      >
        {text}
      </div>
    </Link>
  );
};

export default Button;
