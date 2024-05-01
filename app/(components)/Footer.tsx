"use client";

import { useState } from "react";

import logo from "../../public/images/logo.png";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const [categories, setCategories] = useState([
    {
      title: "Repair & Services",
      link: "/repair-and-services",
      id: 1,
    },
    {
      title: "Hotel & Leisure",
      link: "/hotel-and-leisure",
      id: 2,
    },
    {
      title: "Health",
      link: "/health",
      id: 3,
    },
    {
      title: "Restaurant & Pub",
      link: "/restaurant-and-pub",
      id: 4,
    },
    {
      title: "Agriculture & Farm",
      link: "/agriculture-and-farm",
      id: 5,
    },
    {
      title: "Business Solution",
      link: "/business-solution",
      id: 6,
    },
    {
      title: "Rent & Hire",
      link: "/rent-and-hire",
      id: 7,
    },
    {
      title: "Mobile Services",
      link: "/mobile-services",
      id: 8,
    },
    {
      title: "Construction",
      link: "/construction",
      id: 9,
    },
    {
      title: "Fashion",
      link: "/fashion",
      id: 10,
    },
    {
      title: "Wedding & Event Planning",
      link: "/wedding-and-event-planning",
      id: 11,
    },
    {
      title: "Buying & Selling",
      link: "/buying-and-selling",
      id: 12,
    },
    {
      title: "Safety & Security",
      link: "/safety-and-security",
      id: 13,
    },
    {
      title: "Vocational Training",
      link: "/vocational-training",
      id: 14,
    },
  ]);

  const [about, setAbout] = useState([
    {
      title: "Careers",
      link: "/careers",
      id: 1,
    },
    {
      title: "News",
      link: "/blog/news",
      id: 2,
    },
    {
      title: "Partnership",
      link: "/blog/partnership",
      id: 3,
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
      id: 4,
    },
    {
      title: "Terms & Conditions",
      link: "/terms-and-conditions",
      id: 5,
    },
  ]);
  const [support, setSupport] = useState([
    {
      title: "Help & Support",
      link: "/help-and-support",
      id: 1,
    },
    {
      title: "Trust & safety",
      link: "/trust-and-safety",
      id: 2,
    },
    {
      title: "Biznez.lk Guides",
      link: "/blog/biznez.lk-guides",
      id: 3,
    },
    {
      title: "Learn",
      link: "/blog/learn",
      id: 4,
    },
    {
      title: "Terms & Conditions",
      link: "/terms-and-conditions",
      id: 5,
    },
  ]);

  return (
    <div>
      <div className=" border-black border-t-2 pt-10 grid grid-cols-5 ">
        <div className="  ">
          <p className=" text-md font-semibold ">Categories</p>
          <div className=" py-2 ">
            {categories.map((items) => (
              <ul key={items.id} className=" text-sm  ">
                <li className=" py-1 hover:underline">
                  <Link href={items.link}></Link>
                  {items.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="  ">
          <p className=" text-md font-semibold ">About</p>
          <div className=" py-2 ">
            {about.map((items) => (
              <ul key={items.id} className=" text-sm  ">
                <li className=" py-1 hover:underline">
                  <Link href={items.link}></Link>
                  {items.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="  ">
          <p className=" text-md font-semibold ">Support & Education</p>
          <div className=" py-2 ">
            {support.map((items) => (
              <ul key={items.id} className=" text-sm  ">
                <li className=" py-1 hover:underline">
                  <Link href={items.link}></Link>
                  {items.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="  ">
          <p className=" text-md font-semibold ">Commiunity</p>
          <div className=" py-2 ">
            {support.map((items) => (
              <ul key={items.id} className=" text-sm  ">
                <li className=" py-1 hover:underline">
                  <Link href={items.link}></Link>
                  {items.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="  ">
          <p className=" text-md font-semibold ">Business Solution</p>
          <div className=" py-2 ">
            {support.map((items) => (
              <ul key={items.id} className=" text-sm  ">
                <li className=" py-1 hover:underline">
                  <Link href={items.link}></Link>
                  {items.title}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className=" py-5">
        <div className=" flex justify-between border-t-2">
          <div className=" pt-4 flex align-baseline justify-between gap-8 opacity-70">
            <div>
              <Image src={logo} alt="biznez.lk" className=" w-auto h-8" />
            </div>
            <div>
              <p className=" text-md opacity-75">
                © 2024 Biznez.lk. All Rights Reserved.
              </p>
            </div>
          </div>
          <div>
            <div className=" pt-4 opacity-75">
              <ul className=" flex gap-4">
                <li className=" text-3xl">
                  <Link href="facebook.com">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li className=" text-3xl">
                  <Link href="facebook.com">
                    <AiFillTikTok />
                  </Link>
                </li>
                <li className=" text-3xl">
                  <Link href="facebook.com">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className=" text-3xl">
                  <Link href="facebook.com">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
