"use client";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./project.tsx";

export default function Projects() {
  // console.log(projectsData);
  return (
    <section>
      <SectionHeading title={"My Projects"} />
      <div>
        <React.Fragment>
          <Project />
        </React.Fragment>
      </div>
    </section>
  );
}
