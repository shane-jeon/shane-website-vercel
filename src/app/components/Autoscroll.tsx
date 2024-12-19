import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Image from "next/image";

const splideImgs = [
  ["/javascript.png", "Javascript"],
  ["/typescript.png", "Typescript"],
  ["/react.png", "React"],
  ["/tailwind.png", "Tailwind"],
  ["/nextjs.png", "NextJS"],
  ["/python.png", "Python"],
  ["/flask.png", "Flask"],
];

export default function Autoscroll() {
  return (
    <div className="mx-10 mt-6 flex justify-center lg:mt-8 ">
      <div className="">
        <Splide
          aria-label="Tech Stack"
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 6,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}>
          {splideImgs.map(([imgSrc, alt], index) => (
            <SplideSlide key={index} className="">
              {/* <div className=""> */}
              <Image
                className="rounded-lg bg-light-purple p-2 transition-none lg:h-24 lg:w-24"
                src={imgSrc}
                alt={alt}
                width={50}
                height={50}
              />
              {/* </div> */}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
