"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  // console.log(inView);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>Projects</SectionHeading> */}
      <SectionHeading title={"About Me"} />
      <p className="mb-3">
        In the realm of bytes and code, there strides A master of the digital
        tides, Andrew Cho, with intellect ablaze, In the labyrinth of software,
        he plays. With keystrokes swift, he weaves his art, Crafting worlds from
        the bits apart. Lines of logic dance at his command, In the kingdom of
        tech, he takes his stand. In the silence of the coding night, His screen
        aglow with pixel light, He delves into the realm unseen, Where dreams of
        algorithms convene. Through bugs and glitches, he charts his way, A
        troubleshooter in the break of day. His mind a fortress, his heart a
        guide, In the endless quest for code refined. With every function, every
        class, He carves his name in the digital mass. A symphony of ones and
        zeros, his song, In the grand orchestra of code, he belongs. Andrew Cho,
        the software sage, Navigating through the digital maze. In ones and
        zeros, his legacy gleams, A pioneer in the land of digital dreams.
      </p>
    </motion.section>
  );
}
