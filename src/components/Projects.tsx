"use client";
import React from "react";
import { ImageBackground } from "react-native";

import Link from "next/link";

export function Projects() {
  return (
    <div className="w-full h-screen bg-[#FCE2D4] text-[#A75D5D] pt-16">
      <div className="max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full">
        <div className="pb-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="py-2">Check Out Some of My Projects!</p>
        </div>

        {/* Container For Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Start List of Items */}
          <div
            style={{
              backgroundImage: `url(./pictures/notesApp.png)`,
            }}
            className="bg-[#AAAAAA] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-2xl font-bold text-[#FFC3A1] tracking-wider">
                Full Stack Notes App
              </span>
              <div className="pt-4 text-center">
                <Link
                  href="https://github.com/acanales3/mern-proj/blob/main/README.md"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/mern-proj/tree/main/backend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Backend
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/mern-proj/tree/main/frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Frontend
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(./pictures/firstweb.png)`,
            }}
            className="bg-[#AAAAAA] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-2xl font-bold text-[#FFC3A1] tracking-wider">
                First Personal Portfolio
              </span>
              <div className="pt-4 text-center">
                <Link
                  href="https://acanales3.github.io/first-website/index.html"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Demo
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/first-website"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(./pictures/Lab1Red.png)` }}
            className="bg-[#BBBBBB] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-2xl font-bold text-[#FFC3A1] tracking-wider">
                Lab 1 - Techniques In Programming
              </span>
              <div className="pt-4 text-center">
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab1/Lab1.pdf"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Project Description
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab1/Lab1.java"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(./pictures/Lab2Red.png)` }}
            className="bg-[#CCCCCC] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-2xl font-bold text-[#FFC3A1] tracking-wider">
                Lab 2 - Techniques In Programming
              </span>
              <div className="pt-4 text-center">
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab2/Lab2.pdf"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Project Description
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab2/Lab2.java"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(./pictures/Lab3Red.png)` }}
            className="bg-[#DDDDDD] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-2xl font-bold text-[#FFC3A1] tracking-wider">
                Lab 3 - Techniques In Programming
              </span>
              <div className="pt-4 text-center">
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab3/Lab%203.pdf"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Project Description
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab3/Lab3.java"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#FFC3A1] text-[#A75D5D] font-bold text-lg">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(./pictures/Lab45Red.png)` }}
            className="bg-[#DFDFDF] shadow-lg shadow-[#FFC3A1] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-80 text-center">
              <span className=" text-xl font-bold text-[#FFC3A1] tracking-wider">
                Lab 4/5 - Techniques In Programming
              </span>
              <div className="pt-2 text-center">
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab4%3A5/Lab45.pdf"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-1 m-2 bg-[#FFC3A1] text-[#A75D5D] text-lg font-bold">
                    Project Description
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab4%3A5/Lab4Server.java"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-1 m-2 bg-[#FFC3A1] text-[#A75D5D] text-lg font-bold">
                    Code - Lab 4
                  </button>
                </Link>
                <Link
                  href="https://github.com/acanales3/First-Year-Projects/blob/main/Lab4%3A5/Lab5Client.java"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-1 m-2 bg-[#FFC3A1] text-[#A75D5D] text-lg font-bold">
                    Code - Lab 5
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
