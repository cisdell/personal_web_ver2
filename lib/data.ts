import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { MdWork } from "react-icons/md";

import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
    title: "test",
    description:
      "exp.",
    tags: [ "React", "Next.js", "MongoDB", "Tailwind", "Prisma" ],
    imageUrl: corpcommentImg,
  },
  {
    title: "test",
    description:
      "temp.",
    tags: [ "React", "TypeScript", "Next.js", "Tailwind", "Redux" ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [ "React", "Next.js", "SQL", "Tailwind", "Framer" ],
    imageUrl: wordanalyticsImg,
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