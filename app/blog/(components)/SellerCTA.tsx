"use client";
import Image from "next/image";
import background from "../../../public/images/image4.jpeg";

const SellerCTA = () => {
  return (
    <div>
      <div className=" px-[10rem] py-[6rem] ">
        <div className=" flex justify-between bg-white drop-shadow-md rounded-md">
          <div className=" w-1/2 p-[6rem]">
            <h4 className=" uppercase text-sm text-green-600 font-semibold py-3">
              How Success in Biznez.lk
            </h4>
            <h1 className=" text-xl font-bold">
              What is a Penetration Test, and Does Your Website Need One?
            </h1>
            <p className=" py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              ipsa asperiores animi esse fugiat amet saepe numquam ab,
              architecto similique veniam, minus harum eaque totam, voluptatibus
              voluptatem aliquid magnam. Hic.
            </p>
          </div>
          <div className=" bg-blue-600 w-1/2">
            <h1 className=" flex justify-center items-center p-[10rem] text-4xl text-white font-semibold">
              How Success in Biznez.lk
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerCTA;
