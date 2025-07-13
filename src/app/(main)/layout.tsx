import React from "react";
import Navbar from "./components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative h-full overflow-hidden">
      <Navbar />
      {/* Content */}
      <div className="bg-[#a1a1a110] h-full p-5 overflow-auto pb-[160px]">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
