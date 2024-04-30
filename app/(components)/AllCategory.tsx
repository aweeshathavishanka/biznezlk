"use client";

import { useState } from "react";

import repairAndServices from "../../public/images/icon/repair icon.png";
import hotelAndLeisure from "../../public/images/icon/Hotel & Leisure icon.png";
import Health from "../../public/images/icon/Health icon.png";
import RestaurantPub from "../../public/images/icon/restaurant & pub icon.png";
import agricultureFarm from "../../public/images/icon/agriculture icon.png";
import businessSolution from "../../public/images/icon/business solution icon.png";
import RentHire from "../../public/images/icon/rent & hire icon.png";
import MobileServices from "../../public/images/icon/mobile service icon.png";
import Construction from "../../public/images/icon/construction icon.png";
import Fashion from "../../public/images/icon/fashion icon.png";
import WeddingEventPlanning from "../../public/images/icon/wedding and event planning icon.png";
import BuyingAndSelling from "../../public/images/icon/buying and selling icon.png";
import SafetySecurity from "../../public/images/icon/safety & securoty icon.png";
import VocationalTraining from "../../public/images/icon/vocational training icon.png";
import Image from "next/image";

const AllCategory = () => {
  const [allCategory, setAllCategory] = useState([
    { title: "Repairs & Services", icon: repairAndServices, id: 1 },
    { title: "Hotel & Leisure", icon: hotelAndLeisure, id: 2 },
    { title: "Health", icon: Health, id: 3 },
    { title: "Restaurant & Pub", icon: RestaurantPub, id: 4 },
    { title: "Agriculture & Farm", icon: agricultureFarm, id: 5 },
    { title: "Business Solution", icon: businessSolution, id: 6 },
    { title: "Rent & Hire", icon: RentHire, id: 7 },
    { title: "Mobile Services", icon: MobileServices, id: 8 },
    { title: "Construction", icon: Construction, id: 9 },
    { title: "Fashion", icon: Fashion, id: 10 },
    { title: "Wedding & Event Planning", icon: WeddingEventPlanning, id: 12 },
    { title: "Buying & Selling", icon: BuyingAndSelling, id: 13 },
    { title: "Safety & Security", icon: SafetySecurity, id: 14 },
    { title: "Vocational Training", icon: VocationalTraining, id: 15 },
  ]);

  return (
    <div className=" py-[10rem] px-10">
      <div className=" flex justify-center items-center text-center">
        <p className=" text-2xl font-bold">
          Hire expert <span className=" font-serif">service providers in</span>
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-7  grid grid-cols-1 gap-x-6 gap-y-10 py-10  ">
        {allCategory.map((category) => (
          <div
            key={category.id}
            className=" border border-black rounded-lg p-10 cursor-pointer hover:bg-blue-400 ">
            <Image
              src={category.icon}
              alt={category.title}
              className="h-10 w-10 mr-4"
            />
            <div className="text-lg font-semibold pt-3">{category.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
