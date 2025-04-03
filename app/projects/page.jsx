"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const projectCategories = [
    {
      id: 1,
      title: "Residential Projects",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Residential apartment buildings",
    },
    {
      id: 2,
      title: "Commercial Projects",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern commercial building with green terraces",
    },
    {
      id: 3,
      title: "Office Projects",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern office buildings and skyscrapers",
    },
    {
      id: 4,
      title: "Hospitality Projects",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern architectural building with geometric design",
    },
  ];
  return (
    <div>
      <div className="w-full mx-auto py-[50px] md:py-[100px] px-[16px] md:px-[80px]  bg-[#FFE4CF] border-b border-[#262626] ">
        <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[10px]">
          Designing Spaces, Defining Lifestyles with Suparnassa
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#242424] max-w-7xl">
          At Suparnassa, we believe that architecture and interior design are
          more than just structures and aesthetics—they are experiences.
        </p>
      </div>
      <main className="mx-auto px-[16px] py-[30px] md:p-[80px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCategories.map((category) => (
            <div
              onClick={() =>
                router.push(`/projects/${category.title.split(" ")[0]}/`)
              }
              key={category.id}
              className="rounded-[18px] border border-[#5E362E] overflow-hidden cursor-pointer"
            >
              <div className="relative h-[165px] md:h-[350px] w-full bg-black">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-contain  overflow-hidden rounded-[16px]"
                />
              </div>
              <div className="px-[11px] md:px-[20px] md:pb-[10px] flex justify-between mt-2 items-center">
                <h2 className="text-[16px] md:text-[26px] font-semibold text-[#242424]">
                  {category.title}
                </h2>
                <p className="text-[#5E362E] text-[12px] md:text-[16px] font-semibold underline">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
