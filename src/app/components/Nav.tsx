import Image from "next/image";
import bunnylogo from "../../../public/bunnylogo.png";
import HamburgerMenu from "./HamburgerMenu";

export default function Hero() {
  const navLinks = {
    About: "/about",
    Experience: "/experience",
    Projects: "/projects",
    Other: "/other",
  };

  const navLinksArray = Object.entries(navLinks);

  console.log(navLinksArray);
  return (
    <div className="w-screen border border-green-800 p-4 text-dark-gray lg:p-10">
      <div className="mx-2 flex items-center justify-between lg:mx-6 ">
        <div className="flex items-center justify-between">
          <Image src={bunnylogo} alt="bunny logo" width={50} height={50} />
          <h1 className="text-lg lg:text-2xl">Shane Jeon</h1>
        </div>
        <HamburgerMenu />
        <div className="hidden lg:block">
          <div className="flex items-center ">
            {navLinksArray.map(([link, key]) => (
              <p className="text-lg lg:pr-8" key={link[0]}>
                {link}
              </p>
            ))}
            <p className="text-lg">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}
