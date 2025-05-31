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
    images: 'https://myvwmwqbvvnhhlmreilo.supabase.co/storage/v1/object/sign/Images/m.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvbS5qcGciLCJpYXQiOjE3NDU2NzMzMTcsImV4cCI6MTc3NzIwOTMxN30.CwrlinBq2xWiqZQ5a6TIIBrrZ5wq_yPEWi0CLo5FYL4',
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
      <link rel="icon" href="https://myvwmwqbvvnhhlmreilo.supabase.co/storage/v1/object/sign/Images/favourite.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvZmF2b3VyaXRlLnBuZyIsImlhdCI6MTc0NTY3MTY5OCwiZXhwIjoxNzc3MjA3Njk4fQ.5axBFQXwx7ot4Y8q2A6CEahlOJ8HIUnjgjLOYLbmMJA"/>
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
