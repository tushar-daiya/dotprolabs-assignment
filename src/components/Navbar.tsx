"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="h-20 flex items-center justify-between mx-auto md:px-10 px-5 bg-none">
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        className="md:h-full h-16 w-auto"
        alt="logo"
      />
      <ul className="hidden md:flex items-center gap-5 font-extrabold">
        <Link className="hover:text-primaryText" href={"/"}>
          <li>Home</li>
        </Link>
        <Link className="hover:text-primaryText" href={"/"}>
          <li>About us</li>
        </Link>
        <Link className="hover:text-primaryText" href={"/"}>
          <li>Roadmap</li>
        </Link>
        <Link className="hover:text-primaryText" href={"/"}>
          <li>FAQs</li>
        </Link>
        <Link className="hover:text-primaryText" href={"/"}>
          <li>Contact Us</li>
        </Link>
      </ul>
      <Link
        href={"/"}
        className="px-4 py-2 md:block hidden rounded-3xl bg-gradient-to-r text-sm from-[#E4B40D] to-[#FFE68FD6] text-black font-extrabold"
      >
        Connect Wallet
      </Link>
      <button
        className={`${menuOpen ? "fixed top-7 right-5" : ""} z-[51] md:hidden`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <ChevronLeft
          size={24}
          style={{
            transform: `rotate(${menuOpen ? 180 : 0}deg)`,
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div
        className={`${
          menuOpen ? "w-full" : "w-0"
        } fixed top-0 right-0 origin-right bg-[#071624] z-50 shadow-lg transition-all overflow-hidden  duration-300 h-screen flex flex-col gap-5`}
      >
        <div className="flex justify-center items-center w-full h-full">
          <ul className="flex flex-col gap-5 font-extrabold max-h-80">
            <li className="transition-all duration-700">Home</li>
            <li className="transition-all duration-700">About us</li>
            <li className="transition-all duration-700">Roadmap</li>
            <li className="transition-all duration-700">FAQs</li>
            <li className="transition-all duration-700">Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
