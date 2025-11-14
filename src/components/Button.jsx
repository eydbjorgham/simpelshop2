// import { useState } from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className={"border-0 border-b-2 border-(--h1-color) bg-transparent p-2 w-fit font-semibold hover:cursor-pointer hover:scale-105 transition-transform duration-200 z-1 text-(--h1-color) text-3xl"}
    //   onClick={onClick}
    >
      {text}
    </button>
  );
};
 
export default Button;