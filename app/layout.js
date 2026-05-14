import { GoogleAnalytics } from '@next/third-parties/google';
import {Outfit} from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";
import { ProductsProvider } from "./_lib/prContext";
import { ToastContainer } from 'react-toastify';
import ScrollButton from "./_components/ScrollButton/ScrollButton";

export const metadata = {
  title: {
    template: "%s / The Haven",
    default: "Welcome / The Haven"
  },
  description: "Haven is a home decor store where every detail brings warmth and harmony to your space.",
  keywords: ["Home Decor", "Home decor furniture", "Home decor shop"],
  openGraph: {
    images: 'https://myvwmwqbvvnhhlmreilo.supabase.co/storage/v1/object/sign/Images/m.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZmZmODY5NS1mNDFjLTQ0ODMtYmRiYS1hNzhlOGRjNDM0YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvbS5qcGciLCJpYXQiOjE3Nzg3NDkwMzMsImV4cCI6MTgxMDI4NTAzM30.rYcyyCmP7tVWF5JX2PCLGxiGvEQfMSjzlo45p1bhxx0',
  },
};

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-outfit",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://myvwmwqbvvnhhlmreilo.supabase.co/storage/v1/object/sign/Images/favourite.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZmZmODY5NS1mNDFjLTQ0ODMtYmRiYS1hNzhlOGRjNDM0YTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvZmF2b3VyaXRlLnBuZyIsImlhdCI6MTc3ODc0OTAxMiwiZXhwIjoxODEwMjg1MDEyfQ.s2BAOxOmknzx3Lnn9qkZF5Xlzrb5g2PIn-ajVXBU0IQ"/>
      <body className={`antialiased ${outfitFont.className}`}>
        <ProductsProvider>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
          <Header />
            {children}
          <Footer />
          <ScrollButton />
        </ProductsProvider>
        <GoogleAnalytics gaId="G-4JJG5ZR5D5"/>
      </body>
    </html>
  );
}
