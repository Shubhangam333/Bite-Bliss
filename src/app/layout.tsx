import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bite Bliss",
  description: "Created By Shubhangam Saxena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastContainer style={{ zIndex: 999999999 }} />
          <Navbar />
          <main className="max-w-7xl ">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
