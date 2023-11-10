"use client";
import { HiArrowNarrowRight } from "react-icons/hi";

export function Home() {
  return (
    <div className="w-full h-screen bg-[#FCE2D4]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[rgb(211,117,107)] text-xl">Hi, my name is</p>
        <h1 className="text-[#915454] text-4xl sm:text-7xl font-bold">
          Alex Canales
        </h1>
        <h2 className="text-[#A75D5D] text-4xl sm:text-7xl">
          Student at Texas Chrisitan University
        </h2>
        <p className="text-[#A75D5D] py-4">
          I am a sophmore at TCU majoring in Computer Science, with a minor in
          Mathematics and Philosophy. Welcome to my personal portfolio! This is
          a collection of all my greatest works, about me, and all my contact
          information.
        </p>
        <div>
          <button className="text-[#915454] group border-2 border-[#915454] px-6 py-3 my-2 flex items-center hover:bg-[#D3756B] hover:border-[#D3756B]">
            View Projects
            <span className="group-hover:rotate-45 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
