import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomVideoComponent from "./components/CustomVideoComponent"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1703 Blog",
  description: "Join Us!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomVideoComponent/>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
