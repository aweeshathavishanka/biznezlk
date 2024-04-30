"use client";

import { useState } from "react";

import repairAndServices from "../../public/images/icon/repair icon.png";
import hotelAndLeisure from "../../public/images/icon/Hotel & Leisure icon.png";
import Health from "../../public/images/icon/Health icon.png";
import RestaurantPub from "../../public/images/icon/restaurant & pub icon.png";

import Image from "next/image";

const BrowseTallent = () => {
  const [browseTalent, setBrowseTalent] = useState([
    {
      title: "Over 700 categories",
      icon: repairAndServices,
      description:
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",

      id: 1,
    },
    {
      title: "Clear, upfront pricing",
      description:
        "No hourly rates, just project-based pricing. Payments only get released when you approve.",
      icon: hotelAndLeisure,
      id: 2,
    },
    {
      title: "Quality work done faster",
      description:
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
      icon: RestaurantPub,
      id: 2,
    },
    {
      title: "24/7 award-winning support",
      description:
        "Chat with our team to get your questions answered or resolve any issues with your orders.",
      icon: Health,
      id: 2,
    },
  ]);

  return (
    <div className=" py-[5rem] px-10">
      <div className=" lg:pr-[20rem] ">
        <p className=" lg:text-6xl font-semibold">
          A whole world of freelance talent at your fingertips
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-4 gap-x-6  pt-10  ">
        {browseTalent.map((items) => (
          <div
            key={items.id}
            className="gap-y-2  p-10 cursor-pointer hover:bg-blue-400">
            <Image
              src={items.icon}
              alt={items.title}
              className="h-10 w-10 mr-4"
            />
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
