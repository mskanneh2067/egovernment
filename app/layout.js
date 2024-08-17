import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-Government",
  description: "e-Goverment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="main-layout">
          <div className="fixed basis-1/4 left-0 top-20  bg-[#4209dd]">Left</div>
          <div className="mt-20 basis-1/2   px-20 bg-green-400">{children}</div>
          <div className="fixed basis-1/4  right-0 top-20 bg-[#c47a0d]">Right</div>
        </div>
      </body>
    </html>
  );
}
