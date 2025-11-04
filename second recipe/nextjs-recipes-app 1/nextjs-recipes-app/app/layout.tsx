import "./globals.css";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes Learning App",
  description: "Learn recipes with videos",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-900 flex flex-col min-h-screen ${poppins.className}`}>
        <Providers>
          <Navbar />
          <main className="flex-1 pt-20 bg-gray-50">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
