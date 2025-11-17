import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const Navbar = () => {
  return (
    <nav className={inter.className}>
      <ul className="sticky flex justify-center space-x-24 p-8 text-xl">
        <li className="w-fit border-0 border-b-2 border-(--h1-color) p-1 font-semibold text-(--h1-color) transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="w-fit border-0 border-b-2 border-(--h1-color) p-1 font-semibold text-(--h1-color) transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
