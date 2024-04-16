import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { MdWork } from "react-icons/md";

import { LuGraduationCap } from "react-icons/lu";
import sampleProject from "@/public/sample_project.jpeg";
import personal_web_pic from "@/public/personal_web.png";
import type_better_pic from "@/public/type_better.png";
//come back and add more types later

type LinkType = {
  name: string;
  hash: string;
}

export const links: LinkType[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Two Sigma LP",
    location: "New York, NY",
    description:
      "I was a compliance officer. I was a compliance officer. I was a compliance officer. I was a compliance officer. I was a compliance officer. I was a compliance officer. I was a compliance officer. ",
    icon: React.createElement(MdWork),
    date: "2012-2014",
  },
  {
    title: "Bloomberg LP",
    location: "New York, NY",
    description:
      ". Trading Solutions Product Specialist. Trading Solutions Product SpecialistTrading Solutions Product SpecialistTrading Solutions Product SpecialistTrading Solutions Product Specialist",
    icon: React.createElement(MdWork),
    date: "2015 - 2020",
  },
  {
    title: "BNY Mellon",
    location: "Remote",
    description:
      "Test Engineer. Test Engineer. Test Engineer. Test Engineer. Test Engineer. Test Engineer. Test Engineer. Test Engineer. Test Engineer",
    icon: React.createElement(PiFileSql),
    date: "2021-2022",
  },
  {
    title: "Hack Reactor / Personal projects",
    location: "Fort Lee, NJ",
    description:
      "Built full stack web applications",
    icon: React.createElement(FaReact),
    date: "2022-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Type Better",
    description:
      "A web based typing game that's designed to improve your typing agility.",
    tags: [ "Typescript", "React", "Next.js", "Firebase", "Python", "Flask", "Firebase", "Tailwind" ],
    imageUrl: type_better_pic,
    projectLink: 'https://github.com/cisdell/type_better',
  },
  // {
  //   title: "Youtube Audio Detatcher",
  //   description:
  //     "temp.",
  //   tags: [ "React", "TypeScript", "Next.js", "Tailwind", "Redux" ],
  //   imageUrl: sampleProject,
  //   projectLink: '',
  // },
  // {
  //   title: "TypeBetter2",
  //   description: Typing game for
  //     "temp.",
  //   tags: [ "React", "TypeScript", "Next.js", "Tailwind", "Redux" ],
  //   imageUrl: sampleProject,
  //   projectLink: '',
  // },
  {
    title: "Personal Website ver.2",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [ "React", "Next.js", "SQL", "Tailwind", "Framer Motion" ],
    imageUrl: personal_web_pic,
    projectLink: 'https://github.com/cisdell/personal_web_ver2',
  },
  {
    title: "Near Earth Object Query Engine",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [ "Python", "SQL", ],
    imageUrl: sampleProject,
    projectLink: 'https://github.com/cisdell/project-neo',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "Flask",
  "Pandas",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;