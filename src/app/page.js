import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Button from "@/components/Button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function Home() {
  return (
    <section className={inter.className}>
      <header>
        <nav className="relative z-10">
          <Navbar />
        </nav>
      </header>
      <main className="flex flex-row">
        <div className="mt-10 ml-10 flex flex-col gap-8">
          <h1 className="relative z-1 text-9xl leading-40 font-black text-(--h1-color)">
            Alt du skal bruge. <br></br> Et sted.
          </h1>

          <Button
            text="Kom igang"
            href="/products"
            className="z-10"
          />
        </div>
        <Image
          src="/orange-thread.png"
          alt="Illustration"
          width={500}
          height={300}
          className="absolute top-0 right-0 z-0 h-200 w-300 object-contain"
        />
      </main>
      <footer></footer>
    </section>
  );
}
