"use client";
import Image from "next/image";
import picture1 from "../../public/images/providerCTA.png";
import Benefit from "./Benefit";

const ServiceProviderCTA = () => {
  return (
    <div className=" bg-black py-10 rounded-3xl">
      <div className=" bg-black rounded-xl py-[4rem] grid grid-2 lg:flex  justify-between">
        <div className=" rounded-2xl  lg:w-1/2 flex justify-center items-center px-10 lg:px-0">
          <Image
            src={picture1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className=" text-white  lg:w-1/2  justify-center items-center text-center px-4 lg:pr-[4rem] lg:block lg:pt-[5rem]">
          <h1 className=" font-bold lg:text-6xl text-xl py-6 ">
            Are you <span className=" font-serif">Service Provider .?</span>
          </h1>
          <p className=" text-lg pb-10 ">
            Join the world’s best independents on the commission-free freelancer
            marketplace with $30MM+ in projects. Keep 100% of what you earn with
            0% commission fees.
          </p>
          <button className=" bg-violet-500 px-5 py-2 rounded-full ">
            Become a Service Provider
          </button>
        </div>
      </div>
      <Benefit />
    </div>
  );
};

export default ServiceProviderCTA;
