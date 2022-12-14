import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`My name is ${pageInfo?.name}`, `${pageInfo?.role}`],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center ">
      <BackgroundCircles />
      <img
        className="object-cover w-32 h-32 mx-auto rounded-full"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-0">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500 ">
          Software Engineer
        </h2>
        <h1 className="text-5xl font-semibold lg:text-6xl scroll-px10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="z-10 pt-5 ">
        <Link href="#about">
          <button type="button" className=" heroButton">
            About
          </button>
        </Link>
        <Link href="#experience">
          <button type="button" className="heroButton">
            Experience
          </button>
        </Link>
        <Link href="#skills">
          <button type="button" className="heroButton">
            Skills
          </button>
        </Link>
        <Link href="#projects">
          <button type="button" className="heroButton">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
