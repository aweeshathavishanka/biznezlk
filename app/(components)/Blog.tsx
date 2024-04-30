"use client";

import { useState } from "react";

import image1 from "../../public/images/Blog Image.png";
import image2 from "../../public/images/Group 5.png";
import image3 from "../../public/images/Group 6.png";

import Image from "next/image";
import Link from "next/link";

const BrowseTallent = () => {
  const [browseTalent, setBrowseTalent] = useState([
    {
      title: "Biznez.lk For Clients",
      icon: image1,
      description:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",

      id: 1,
      link: "/blog3",
    },
    {
      title: "Hire on Biznez.lk",
      description:
        "No hourly rates, just project-based pricing. Payments only get released when you approve.",
      icon: image2,
      id: 2,
      link: "/blog2",
    },
    {
      title: "Guides to Discover",
      description:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
      icon: image3,
      id: 2,
      link: "/blog1",
    },
  ]);

  return (
    <div className=" py-[10rem] px-10">
      <div className=" lg:pr-[20rem] ">
        <p className=" lg:text-6xl font-semibold">
          How to get started on Biznez.lk
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-y-8 gap-x-6  lg:pt-10  ">
        {browseTalent.map((items) => (
          <div key={items.id} className="gap-y-4  lg:p-10  ">
            <Image src={items.icon} alt={items.title} className=" mr-4" />
            <div className="text-xl font-semibold pt-3">{items.title}</div>
            <div className="text-sm font-normal pt-3 opacity-55">
              {items.description}
            </div>
            <div className=" py-6">
              <Link
                href={items.link}
                className=" py-3 px-6 border border-black rounded-full cursor-pointer hover:bg-violet-500 hover:text-white hover:border-none">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTallent;
