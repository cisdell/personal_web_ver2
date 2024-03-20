"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./project.tsx";
import { projectsData } from "@/lib/data";

export default function Projects() {
  // console.log(projectsData);
  return (
    <section>
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
