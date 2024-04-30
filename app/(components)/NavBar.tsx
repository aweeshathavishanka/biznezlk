"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const NavBar = () => {
  return (
    <div className="  sticky flex justify-between py-5 border-b">
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div className=" flex gap-6">
        <div className=" border-black border  py-2 px-4 rounded-full">
          Register Now
        </div>
        <div className=" bg-black py-2 px-4 rounded-full text-white">
          Log In
        </div>
      </div>
    </div>
  );
};

export default NavBar;
