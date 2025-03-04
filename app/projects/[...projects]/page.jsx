import Gallery from "@/components/ProjectsPage/Gallery/Gallery";
import { MdLocationOn } from "react-icons/md";
import React from "react";
import Contact from "@/components/ProjectsPage/Contact/Contact";

const page = () => {
  return (
    <div className="p-[16px] md:p-[80px]">
      <div className="flex flex-wrap items-center gap-[20px] mb-[30px] md:mb-[40px]">
        <p className="text-[20px] md:text-[24px] font-semibold text-[#242424]">
          LUX workspace
        </p>
        <button className="flex items-center gap-1 border border-[#262626] p-[8px] rounded-[6px] text-[14px] font-medium">
          <MdLocationOn className="w-[20px] h-[20px]" />
          Bangalore
        </button>
      </div>
      <Gallery />
      <div className="border border-[#262626] p-[20px] md:p-[40px] rounded-[10px] mt-[20px] mb-[40px] md:mb-[100px]">
        <h3 className="text-[20px] font-semibold text-[#242424] mb-[10px]">
          Description
        </h3>
        <p className="text-[16px] text-[#999999] font-medium">
          Discover your own piece of paradise with the Seaside Serenity Villa. T
          With an open floor plan, breathtaking ocean views from every room, and
          direct access to a pristine sandy beach, this property is the epitome
          of coastal living.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default page;
