import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../lib/data.ts";
export default function Projects() {
  console.log(projectsData);
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

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <div>{title}</div>;
}
