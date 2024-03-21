"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import profilepic from "@/public/profilepic.jpg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "twen",
              duration: 0.2,
            }}
          >
            <Image
              src="/profilepic.jpg"
              width={192}
              height={192}
              alt="Picture of the author"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🫰🏼
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="mb-10 pb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl">
          Hello! My name is Andrew and I'm a full stack developer! I enjoy
          building things!
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-5 px-4 text-lg"
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer transition border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-2 " />
        </a>
        <a
          className="bg-white px-4 py-3 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] cursor-pointer transition border border-black/10"
          href="https://www.linkedin.com/in/andrewicho1/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white px-4 py-3 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 cursor-pointer transition border border-black/10"
          href="https://www.github.com/cisdell/"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
