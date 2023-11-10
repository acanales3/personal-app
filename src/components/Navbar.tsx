"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import Logo from "../pictures/logo.png";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#915454] text-[#F0997D]">
      {/* Menu for Web */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Social Media</li>
        <li>Contact Me</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>
      {/* Menu for Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#A75D5D] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Social Media</li>
        <li className="py-6 text-4xl">Contact Me</li>
      </ul>
      {/* Socials for Computer*/}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#915454]">
            <a
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A75D5D]">
            <a
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BA6363]">
            <a
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D16969]">
            <a
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              Transcript <BsReverseLayoutTextSidebarReverse size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
