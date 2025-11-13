import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <body className="bg-(--background)">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-row justify-center">
        <div className="flex flex-col items-center gap-8 mt-20">
          <h1 className="text-7xl font-extrabold text-(--h1-color)">This is a simple shop</h1>
          {/* KNAP */}
          <Image src="/heroimg.webp" alt="Indkøbskurv med varer" width={500} height={300} className="h-auto w-full object-cover rounded-lg shadow-lg" />
        </div>
      </main>
      <footer></footer>
    </body>
  );
}
