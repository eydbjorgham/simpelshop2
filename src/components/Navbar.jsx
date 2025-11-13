import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-24 text-xl  p-8 sticky">
        <li>
          {/* <Link href="/">Home</Link> */}
          <a href="#">Home</a>
        </li>
        <li>
          {/* <Link href="/">Products</Link> */}
            <a href="#">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
