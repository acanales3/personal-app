"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export function SocialMedia() {
  return (
    <div className="w-full h-screen bg-[#FCE2D4] text-[#A75D5D] pt-16">
      <div className="max-w-[800px] mx-auto p-2 flex flex-col justify-center w-full">
        <div className="pb-2">
          <h1 className="text-4xl font-bold">Social Media</h1>
          <p className="py-2">Here are some of my other Socials!</p>
        </div>

        {/* Container For Social Media */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Link href="https://github.com/acanales3" target="_blank">
              <div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-white">
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
              <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
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
              <div className="bg-gradient-to-bl from-sky-400 to-blue-500  shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
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
              <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
                <div className="relative text-white">
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
