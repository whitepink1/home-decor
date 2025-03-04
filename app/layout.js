import {Outfit} from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";
import { ProductsProvider } from "./_lib/prContext";

export const metadata = {
  title: {
    template: "%s / The Haven",
    default: "Welcome / The Haven"
  },
  description: "Haven is a home decor store where every detail brings warmth and harmony to your space.",
};

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${outfitFont.className}`}>
        <ProductsProvider>
          <Header />
            {children}
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
