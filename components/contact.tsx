"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "./sendEmail";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading title={"Contact Me"} />
      <p className="text-gray-700 -mt-5">
        Reach out to Andrew at{" "}
        <a className="underline" href="mailto:cisdell@gmail.com">
          cisdell@gmail.com
        </a>{" "}
        or by using this form.
      </p>
      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          required
          maxLength={500}
          name="senderEmail"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 "
          placeholder="What do you want to write to Andrew?"
          required
          name="senderMessage"
          maxLength={5000}
        />
        <button
          className="group flex justify-center items-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="text-sx opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
