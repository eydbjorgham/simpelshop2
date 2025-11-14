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
    <body className={inter.className}>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-row">
        <div className="flex flex-col gap-8 mt-10 ml-10">
          <h1 className="text-9xl text-(--h1-color) font-black z-1 relative leading-40">Alt du skal bruge. <br></br> Et sted.</h1>
          <Button
          text="Kom igang"
          // onClick={() => console.log("Klik!")}
          />
        </div>
          <Image src="/orange-thread.png" alt="Illustration" width={500} height={300} className="h-150 w-300 object-contain z-0 absolute" />
      </main>
      <footer></footer>
    </body>
  );
}
