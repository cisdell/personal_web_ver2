import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "../lib/data.ts";

export default function Skills() {
  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading title={"My Skills"} />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
