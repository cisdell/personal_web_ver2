import { links } from "./data";

//server component types
export type SectionName = (typeof links)[ number ][ "name" ];


//use context provider types
export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};