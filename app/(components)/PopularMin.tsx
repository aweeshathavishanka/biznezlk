"use client";
import { useState } from "react";

const PopularMin = () => {
  const [popularCategoryMin, setPopularCategoryMin] = useState([
    { title: "Electronics", id: 1 },
    { title: "Agriculture", id: 2 },
    { title: "Hotel & Restaurant", id: 3 },
    { title: "Constructions", id: 4 },
    { title: "Health", id: 5 },
    { title: "Agriculture", id: 6 },
  ]);

  return (
    <div className=" hidden  lg:flex justify-center pt-10 opacity-45">
      <div className=" py-1">
        <p>Popular :</p>
      </div>
      <div className=" flex gap-3  px-2 ">
        {popularCategoryMin.map((category) => (
          <div
            key={category.id}
            className=" flex border border-slate-300 px-4 py-1 rounded-full">
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMin;
