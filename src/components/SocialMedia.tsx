"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function SocialMedia() {
  return (
    <div className="w-full h-screen bg-[#FCE2D4] text-[#A75D5D]">
      <div className="max-w-[800px] mx-auto p-2 flex flex-col justify-center w-full lg:h-[118%] md:h-[130%] sm:h-[145%] h-[180%]">
        <div className="pb-2">
          <h1 className="text-4xl font-bold">Social Media</h1>
          <p className="py-2">Here are some of my other Socials!</p>
        </div>

        {/* Container For Social Media */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Link href="https://github.com/acanales3" target="_blank">
              <div className="bg-[#AAAAAA] shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-black">
                  <FaGithub
                    size={100}
                    className="absolute inset-0 m-auto opacity-100 group-hover:opacity-0"
                  />
                  <span className="text-2xl font-bold text-[#FFC3A1] tracking-wider opacity-0 group-hover:opacity-100">
                    GitHub
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              href="https://www.linkedin.com/in/alex-canales-1aa8ab27b"
              target="_blank"
            >
              <div className="bg-[#AAAAAA] shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-[#0077B5]">
                  <FaLinkedin
                    size={100}
                    className="absolute inset-0 m-auto opacity-100 group-hover:opacity-0"
                  />
                  <span className="text-2xl font-bold text-[#FFC3A1] tracking-wider opacity-0 group-hover:opacity-100">
                    LinkedIn
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              href="https://www.facebook.com/profile.php?id=100086728875505"
              target="_blank"
            >
              <div className="bg-[#AAAAAA] shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-[#3B5998]">
                  <FaFacebook
                    size={100}
                    className="absolute inset-0 m-auto opacity-100 group-hover:opacity-0"
                  />
                  <span className="text-2xl font-bold text-[#FFC3A1] tracking-wider opacity-0 group-hover:opacity-100">
                    Facebook
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/_alexcanales/"
              target="_blank"
            >
              <div className="bg-[#AAAAAA] shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-[#cd486b]">
                  <FaInstagram
                    size={100}
                    className="absolute inset-0 m-auto opacity-100 group-hover:opacity-0"
                  />
                  <span className="text-2xl font-bold text-[#FFC3A1] tracking-wider opacity-0 group-hover:opacity-100">
                    Instagram
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
