import Image from "next/image";
import React from "react";
// import profilepic from "@/public/profilepic.jpg";
export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="/profilepic.jpg"
            width={192}
            height={192}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
}
