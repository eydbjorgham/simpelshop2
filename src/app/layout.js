
import "./globals.css";


export const metadata = {
  title: "Simple Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-(--background)">
        <header></header>
        <main>
        {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
