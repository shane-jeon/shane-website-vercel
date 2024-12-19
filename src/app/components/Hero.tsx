import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const socialMedia = [
    {
      name: "Github",
      url: "https://github.com/shane-jeon",
      imgSrc: "/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shane-jeon-7b2663160/",
      imgSrc: "/linkedin.png",
    },
    {
      name: "e-mail",
      url: "mailto:shanexjeonx@gmail.com",
      imgSrc: "/email.png",
    },
  ];

  return (
    <div>
      {/* <div className="flex h-screen w-screen justify-center bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat lg:items-center"> */}
      <div className=" h-screen w-screen bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat lg:items-center">
        {/* <div className="flex items-center justify-center"> */}
        <div className="mx-auto mb-20 mt-40 flex flex-col items-center justify-center lg:max-w-4xl lg:flex-row lg:justify-between">
          <div className="mt-20 flex flex-col px-10">
            <div className="max-w-lg text-dark-purple ">
              <h1 className="mb-3 text-5xl">Shane Jeon</h1>
              <h2 className="mb-3 text-3xl">Software Engineer</h2>
              <p className="mb-5 text-lg">
                A freelance software engineer specializing in Frontend
                Development.{" "}
              </p>
            </div>

            <div className="flex gap-4 lg:gap-6">
              {socialMedia.map((link) => (
                <Link key={link.name} href={link.url}>
                  <Image
                    src={link.imgSrc}
                    alt={link.name}
                    width={35}
                    height={35}
                    className="mr-4 hover:opacity-75"></Image>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-10">
            <Image
              src="/selfie.jpg"
              alt="selfie"
              width={370}
              height={370}
              className="mt-8 rounded-full border-8 border-[#AC98CF]"
            />
          </div>
          {/* </div> */}
        </div>
        {/* <div className="hero__content">
          <p className="hero__description">
            Website under reconstruction. Thank you for your understanding!
            -Shane J.
          </p>
        </div> */}
      </div>
    </div>
  );
}
