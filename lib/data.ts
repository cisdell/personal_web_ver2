import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
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
    title: "First Job",
    location: "Remote",
    description:
      "exp1.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Second Job",
    location: "Loc",
    description:
      "exp",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Third Job",
    location: "Remote",
    description:
      "exp",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
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