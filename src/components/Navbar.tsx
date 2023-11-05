"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../pictures/logo.png";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#A75D5D] text-[#FFC3A1]">
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Projects</li>
        <li>Social Media</li>
        <li>Contact Me</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#A75D5D] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Social Media</li>
        <li className="py-6 text-4xl">Contact Me</li>
      </ul>
    </div>
  );
}
