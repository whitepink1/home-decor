import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s / The Haven",
    default: "Welcome / The Haven"
  },
  description: "Haven is a home decor store where every detail brings warmth and harmony to your space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
