"use client";

import { useState } from "react";
import Link from "next/link";

export default function hamburgerMenu() {
  // export default function hamburgerMenu({}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const links: object = {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    other: "Other",
    resume: "Resume",
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center justify-center bg-transparent py-4">
        <span
          className={`block h-0.5 w-6 rounded-sm 
        bg-purple-700 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
        }
      }`}></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm  
          bg-purple-700 transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`block h-0.5 w-6 rounded-sm 
        bg-purple-700 transition-all duration-300 ease-out ${
          isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
        }`}></span>
      </button>

      {isOpen && (
        <div className="flex-col bg-transparent text-center text-2xl font-light lg:hidden">
          {Object.keys(links).map((key, index) => (
            <p key={index} className="pb-2">
              <Link href={`#${key}`}>{links[key]}</Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
