import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="sticky flex justify-center space-x-24 p-8 text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
