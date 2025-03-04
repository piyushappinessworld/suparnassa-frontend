import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suparnassa",
  description: "Discover Your Dream Property with Suparnassa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-urbanist antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
