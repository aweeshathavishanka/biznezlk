import Link from "next/link";
import Image from "next/image";
import { NewsBlog } from "../blogdata";

const BlogData = () => {
  return (
    <div className="lg:px-[8rem]">
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-y-8 gap-x-6  lg:pt-10  ">
        {NewsBlog.map((items) => (
          <div key={items.id} className="gap-y-4  lg:p-10  ">
            <Link href={items.url} className=" cursor-pointer">
              <div>
                <Image
                  src={items.image}
                  alt={items.category}
                  height={250}
                  className=" pb-3"
                />
              </div>

              <div className=" text-blue-600 uppercase text-sm py-2 font-medium">
                {items.category}
              </div>

              <div className=" text-sm">{items.date}</div>
              <div className="lg:text-3xl font-semibold pt-1">
                {items.title}
              </div>
              <div className=" py-3 opacity-40">
                <ul className=" flex gap-3 text-[10px] ">
                  <li className=" border border-black rounded-full px-4 py-1 ">
                    {items.keyword1}
                  </li>
                  <li className=" border border-black rounded-full px-4 py-1 ">
                    {items.keyword2}
                  </li>
                </ul>
              </div>
              <div className="text-sm font-normal pt-3 opacity-55">
                {items.shortDescription}
              </div>
            </Link>
            <div className=" py-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogData;
