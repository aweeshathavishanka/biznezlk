"use client";

import NavBar from "@/app/(components)/NavBar";
import NewsBlogData from "../(components)/NewsBlogData";
import { BlogPostData } from "../blogdata";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className=" px-10">
      <NavBar />
      <div className="py-10">
        <div className=" ">
          <div className="flex justify-center items-center ">
            {BlogPostData.map((items) => (
              <div key={items.id} className="  ">
                <div className=" text-lg uppercase text-green-500 text-center">
                  {items.category}
                </div>
                <div className=" text-6xl py-4 font-bold text-center">
                  {items.title}
                </div>
                <div className=" flex justify-center items-center text-center">
                  <div className=" flex gap-5">
                    <span>By {items.author}</span>

                    <span>|</span>

                    <span>{items.date}</span>
                  </div>
                </div>
                <div className=" text-center items-center justify-center flex px-[10rem] py-10 ">
                  <Image src={items.image} alt={items.category} />
                </div>
                <div className=" px-[10rem]">
                  <p className=" text-xl text-justify">{items.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
