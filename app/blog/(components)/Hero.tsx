"use client";

import Image from "next/image";
import picture1 from "../../../public/images/image1.jpeg";

const Hero = () => {
  return (
    <div className=" lg:px-[8rem]">
      <h1 className=" text-6xl lg:text-[150px] pt-[3rem] font-semibold  lg:pt-[10rem]">
        Hello Guys !
      </h1>
      <p className=" text-lg lg:text-3xl pt-[1rem] lg:pr-[25rem] py-10">
        Tips on working with freelancers, and resources on flexible and remote
        work — from Contra and our global community.
      </p>
    </div>
  );
};

export default Hero;
