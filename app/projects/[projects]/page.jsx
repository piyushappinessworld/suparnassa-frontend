"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
const page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segment = pathname.split("/")[2];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/properties`
        );
        setData(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full mx-auto py-[50px] md:py-[100px] px-[16px] md:px-[80px]  bg-[#FFE4CF] border-b border-[#262626] ">
        <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[10px]">
          Bringing Vision to Life, One Project at a Time
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#242424] max-w-7xl">
          At SuparnaSSa, we bring passion to every project, crafting functional
          and inspiring spaces across homes, offices, apartments, and
          restaurants, with 150+ projects completed.
        </p>
      </div>

      <main className="mx-auto px-[16px] pb-[30px] md:px-[80px] md:pb-[80px] w-full">
        <div className="flex items-center gap-2 text-[14px] my-[40px]">
          <Link href="/" className="text-[#969696]">
            Home
          </Link>
          <img
            src="/projects/right.svg"
            alt="stars"
            className="text-[#969696]"
          />
          <Link href="/projects" className="text-[#969696]">
            Projects
          </Link>
          <img
            src="/projects/right.svg"
            alt="stars"
            className="text-[#969696]"
          />
          <p>{segment} Porjects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((category) => {
            if (category.type == segment) {
              return (
                <div
                  onClick={() =>
                    router.push(
                      `/projects/${category.type}/${category.name}/${category._id}`
                    )
                  }
                  key={category._id}
                  className="rounded-[18px] border border-[#5E362E] overflow-hidden cursor-pointer"
                >
                  <div className="relative h-[165px] md:h-[291px] w-full p-[11px] md:p-[18px] ">
                    <img
                      src={category.images[0]}
                      alt={category.alt}
                      className="w-full h-full object-cover overflow-hidden rounded-[16px]"
                    />
                  </div>
                  <div className="px-[11px] pb-[11px] md:px-[20px] md:pb-[20px] flex justify-between items-center">
                    <h2 className="text-[16px] md:text-[26px] font-semibold text-[#242424]">
                      {category.name}
                    </h2>
                    <p className="text-[#5E362E] text-[12px] md:text-[16px] font-semibold underline">
                      Learn More
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default page;
