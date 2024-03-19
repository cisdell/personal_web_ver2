"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      {/* <SectionHeading>Projects</SectionHeading> */}
      <SectionHeading title={"About"} />
      <p className="mb-3">
        I'm a software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it.
      </p>
    </motion.section>
  );
}
