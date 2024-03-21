"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./project";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  // console.log(projectsData);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading title={"My Projects"} />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
