"use client";
import Gallery from "@/components/ProjectsPage/Gallery/Gallery";
import { MdLocationOn } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Contact from "@/components/ProjectsPage/Contact/Contact";
import { usePathname } from "next/navigation";
import axios from "axios";

const page = () => {
  const pathname = usePathname();
  const segment = pathname.split("/")[4];
  console.log(segment);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/properties/${segment}`
        );
        setData(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-[16px] md:p-[80px]">
      <div className="flex flex-wrap items-center gap-[20px] mb-[30px] md:mb-[40px]">
        <p className="text-[20px] md:text-[24px] font-semibold text-[#242424]">
          {data?.name}
        </p>
        <button className="flex items-center gap-1 border border-[#262626] p-[8px] rounded-[6px] text-[14px] font-medium">
          <MdLocationOn className="w-[20px] h-[20px]" />
          {data?.location}
        </button>
      </div>
      <Gallery images={data?.images} />
      <div className="border border-[#262626] p-[20px] md:p-[40px] rounded-[10px] mt-[20px] mb-[40px] md:mb-[100px]">
        <h3 className="text-[20px] font-semibold text-[#242424] mb-[10px]">
          Description
        </h3>
        <p className="text-[16px] text-[#999999] font-medium">
          {data?.details}
        </p>
      </div>
      <Contact subject={data?.name} />
    </div>
  );
};

export default page;
