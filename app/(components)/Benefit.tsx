"use client";

import { useState } from "react";

import Image from "next/image";

const BrowseTallent = () => {
  const [browseTalent, setBrowseTalent] = useState([
    {
      title: "Benefit 01",
      description:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",

      id: 1,
    },
    {
      title: "Benefit 02",
      description:
        "No hourly rates, just project-based pricing. Payments only get released when you approve.",

      id: 2,
    },
    {
      title: "Benefit 03",
      description:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",

      id: 3,
    },
    {
      title: "Benefit 04",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      id: 4,
    },
    {
      title: "Benefit 04",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      id: 4,
    },
    {
      title: "Benefit 04",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      id: 4,
    },
    {
      title: "Benefit 04",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      id: 4,
    },
    {
      title: "Benefit 04",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      id: 4,
    },
  ]);

  return (
    <div className=" py-[5rem] px-10 text-white ">
      <div className=" lg:px-[10rem] pb-10 text-center flex items-center justify-center ">
        <p className=" lg:text-6xl text-3xl font-semibold">
          A whole world of freelance talent at your fingertips
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-4 grid grid-cols-1 gap-x-10 gap-y-10  pt-10  ">
        {browseTalent.map((items) => (
          <div
            key={items.id}
            className=" p-10 cursor-pointer rounded-lg  border-2 border-violet-500 hover:bg-blue-400">
            <div className="text-lg font-semibold pt-3">{items.title}</div>
            <div className="text-sm font-normal pt-3 opacity-55">
              {items.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTallent;
