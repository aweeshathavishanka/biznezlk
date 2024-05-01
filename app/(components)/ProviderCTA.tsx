"use client";

import Link from "next/link";

const ProviderCTA = () => {
  return (
    <div className=" py-10">
      <div className=" lg:py-10 py-6 bg-red-950 rounded-3xl">
        <div className=" items-center justify-center text-center py-7">
          <h1 className=" lg:text-8xl text-4xl text-white">
            Freelance services at your fingertips!
          </h1>
          <div className=" pt-10">
            <Link
              href="/sign-up"
              className=" rounded-full py-4 px-6 border border-white text-white font-serif hover:text-white hover:bg-violet-500 hover:border-none">
              Join with Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCTA;
