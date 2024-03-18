"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
// import profilepic from "@/public/profilepic.jpg";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
      <p>
        <span className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl">
          Hello! My name is Andrew and I'm a full stack developer! I enjoy
          building things that are beautiful!
        </span>
      </p>
    </section>
  );
}
