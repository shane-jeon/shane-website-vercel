import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#F1EAFF] via-[#E2D5FD] to-[#AECDFC]">
      <Hero />
      {/* <h1 className="text-xl ">
        Undergoing reconstruction. Thank you for your understanding!
      </h1>
      <h2 className="mt-10">-Shane J.</h2> */}
    </div>
  );
}
