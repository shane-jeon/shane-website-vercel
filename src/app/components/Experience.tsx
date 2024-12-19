"use client";

import Image from "next/image";
import Autoscroll from "./Autoscroll";

export default function Experience() {
  const experienceDescription = [
    [
      "/gear.png",
      "Technical",
      "Specialized in frontend development and quality assurance with hands-on experience in modern web technologies and tools. Proficient in React, TypeScript, and TailwindCSS.",
    ],
    [
      "/collaborate.png",
      "Team Collaboration",
      "Experienced in navigating team dynamics and workflows to ensure effective collaboration and project success.",
    ],
    [
      "/world.png",
      "Real-World Impact",
      "Creative problem-solver with a track record of delivering practical solutions to real-world tech challenges.",
    ],
  ];
  return (
    <div className="mx-8 mt-12 w-5/6">
      <div className="font-regular mb-6 mt-10  text-center  text-4xl tracking-wider text-dark-purple lg:mb-8">
        <h2 className=" lg:hidden">Expertise</h2>
        <h2 className="hidden lg:block">Experience</h2>
      </div>
      <div className="mb-10 flex flex-col justify-center lg:mb-16 lg:flex-row lg:gap-4">
        {experienceDescription.map(([imgSrc, title, description, index]) => (
          <div
            key={index}
            className="mt-10 rounded-lg bg-light-purple p-6 lg:mr-10 lg:w-3/4 xl:w-1/4">
            <div className="flex items-center gap-3 pb-3">
              <Image src={imgSrc} alt="exp icons" width={35} height={35} />
              <h3 className="text-xl font-medium tracking-wide text-dark-purple">
                {title}
              </h3>
            </div>
            <p className="text-justify text-dark-gray">{description}</p>
          </div>
        ))}
      </div>

      <Autoscroll />
    </div>
  );
}
