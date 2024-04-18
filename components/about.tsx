"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
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
      <p className="mb-3 text-lg">
        Hi! My name is Andrew and I am former finance guy turned tech
        enthusiast. I love solving complex problems and building full stack
        applications. I live in the metro NYC area and I&apos;m currently
        looking for opportunities in software engineering roles. <br></br>
        Let&apos;s have a chat!
      </p>
    </motion.section>
  );
}
