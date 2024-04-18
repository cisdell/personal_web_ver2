import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { MdWork } from "react-icons/md";

import { LuGraduationCap } from "react-icons/lu";
import sampleProject from "@/public/sample_project.jpeg";
import personal_web_pic from "@/public/personal_web.png";
import type_better_2 from "@/public/tb2.png";
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
      "This is whre it all started. I was hired as a compliance officer and I learned so many things about the financial industry. I worked with some of the smartest people I've ever met and I still talk to many of them.",
    icon: React.createElement(MdWork),
    date: "2012-2014",
  },
  {
    title: "Bloomberg LP",
    location: "New York, NY",
    description:
      "My next journey was at Bloomberg. I had to wear many hats here. I was setting up and supporting asset managers and hedge fund managers compliance rules and risk management systems. I ran many critical internal meetings, and I was chosen to put together the global training program for the compliance team. I was promoted a couple of times and I was able to work on some really cool projects.",
    icon: React.createElement(MdWork),
    date: "2015 - 2020",
  },
  {
    title: "BNY Mellon",
    location: "Remote",
    description:
      "The journey continues! I was writing SQL queries and building tests for a cloud based data platform for investment managers. It was an early stage product and I was in a chaotic environment. Half of my colleagues were in Ukraine and when the global conflict started things looked even grimmer.",
    icon: React.createElement(PiFileSql),
    date: "2021-2022",
  },
  {
    title: "Hack Reactor / Personal projects",
    location: "Fort Lee, NJ",
    description:
      "I wanted a career reset after I was laid off. I wanted to take some time for myself to re-invest in myself. I completed a full stack engineering bootcamp in which we built web applications using modern technologies. I spent 2022 and 2023 building personal projects and learning new technologies. I'm ready to get back to work!",
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
    imageUrl: type_better_2,
    projectLink: 'https://github.com/cisdell/type_better',
    webLink: 'https://typebetter.vercel.app/',
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