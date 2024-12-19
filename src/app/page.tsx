import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#F1EAFF] via-[#E2D5FD] to-[#AECDFC]">
      {/* <div> */}
      <Nav />
      {/* </div> */}
      <h1 className="mx-10 mt-10 text-2xl text-dark-purple">
        Undergoing reconstruction. Thank you for your understanding!
      </h1>
      <h2 className="mt-10">-Shane J.</h2>
      <Hero />
      <Experience />
    </div>
  );
}
