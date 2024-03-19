import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      {/* <SectionHeading>Projects</SectionHeading> */}
      <SectionHeading title={"About"} />
      <p className="mb-3">
        I'm a software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it. I'm a
        software engineer. More intro to come. Please wait for it.
      </p>
    </section>
  );
}
