"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";

export function ContactRev() {
  const form = useRef();
  const { toast } = useToast();

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fanlbp",
        "template_s26raxg",
        e.currentTarget
        //"Qe3jAQ79DhSZhnGCj"
      )
      .then(
        (result: { text: any }) => {
          console.log(result.text);
        },
        (error: { text: any }) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  }

  return (
    <div className="w-full h-screen bg-[#FCE2D4] flex justify-center items-center p-4 text-[#D3756B]">
      <form className="flex flex-col max-w-[600px] w-full" onSubmit={sendEmail}>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#915454]">
            Contact Me
          </p>
          <p className="py-4">Submit the Form Below!</p>
          <p className="py-1">
            Or you can shoot me an email: alexander.s.canales@gmail.com
          </p>
          <p className="py-1">Or a text / phone call: 317-766-0430</p>
        </div>
        <label>Name</label>
        <input
          className="bg-[#915454] text-[#FFC3A1] p-2"
          type="text"
          name="user_name"
        />
        <label>Email</label>
        <input
          className="my-4 py-2 bg-[#915454] text-[#FFC3A1] p-2"
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea className="bg-[#915454] text-[#FFC3A1] p-2" name="message" />
        <button
          onClick={() => {
            toast({
              variant: "custom",
              title: "Your message has been sent!",
              description:
                "Check your email for confirmation, and I will get back with you shortly!",
            });
          }}
          type="submit"
          value="Send"
          className="px-4 py-2 my-2 text-[#915454] font-bold border-2 border-[#915454] hover:bg-[#D3756B] hover:border-[#D3756B] hover:text-[#915454] mx-auto flex items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
/*

<div className="w-full h-screen bg-[#FCE2D4] flex justify-center items-center p-4 text-[#D3756B] pt-16">
      <form
        method="POST"
        action="https://getform.io/f/5894ea29-289d-4161-8b05-cc9340b5393e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#915454]">
            Contact Me
          </p>
          <p className="py-4">
            Submit the Form Below! Or you can shoot me an email:
            alexander.s.canales@gmail.com
          </p>
        </div>
        <input
          className="bg-[#915454] text-[#FFC3A1] p-2"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 py-2 bg-[#915454] text-[#FFC3A1] p-2"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#915454] text-[#FFC3A1] p-2"
          name="message"
          rows={10}
        ></textarea>
        <button type="submit" value="Send" className="px-4 py-2 my-2 text-[#915454] font-bold border-2 border-[#915454] hover:bg-[#D3756B] hover:border-[#D3756B] hover:text-[#915454] mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>


*/
