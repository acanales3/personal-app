"use client";
import React from "react";

import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import Logo from "../pictures/logo.png";
import Link from "next/link";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const refreshClick = () => setNav(!nav);

  return (
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#915454] text-[#F0997D] z-10">
      {/* Menu for Web */}
      <ul className="hidden md:flex">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About Me</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/social">
          <li>Social Media</li>
        </Link>
        <Link href="/contact">
          <li>Contact Me</li>
        </Link>
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
        <Link href="/">
          <li className="py-6 text-4xl" onClick={refreshClick}>
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="py-6 text-4xl" onClick={refreshClick}>
            About Me
          </li>
        </Link>
        <Link href="/projects">
          <li className="py-6 text-4xl" onClick={refreshClick}>
            Projects
          </li>
        </Link>
        <Link href="/social">
          <li className="py-6 text-4xl" onClick={refreshClick}>
            Social Media
          </li>
        </Link>
        <Link href="/contact">
          <li className="py-6 text-4xl" onClick={refreshClick}>
            Contact Me
          </li>
        </Link>
      </ul>
      {/* Socials for Computer*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#915454]">
            <Link
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="https://www.linkedin.com/in/alex-canales-1aa8ab27b/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#A75D5D]">
            <Link
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="https://github.com/acanales3"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </Link>
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#BA6363]">
            <Link
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
          <li className="rounded-xl w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D16969]">
            <Link
              className="flex justify-between items-center w-full text-[#FFC3A1]"
              href="/"
            >
              Transcript <BsReverseLayoutTextSidebarReverse size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
