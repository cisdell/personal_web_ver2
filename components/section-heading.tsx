import React from "react";
type SectionHeadingProps = {
  title: React.ReactNode;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{title}</h2>;
}
