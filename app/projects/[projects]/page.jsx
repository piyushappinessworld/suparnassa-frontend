"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const projectCategories = [
    {
      id: 1,
      title: "Dash",
      name: "Dash",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Residential apartment buildings",
    },
    {
      id: 2,
      title: "Dash",
      name: "Dash",
      image:
        "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern commercial building with green terraces",
    },
    {
      id: 3,
      title: "Ohana",
      name: "Dash",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern office buildings and skyscrapers",
    },
    {
      id: 4,
      title: "Ohana",
      name: "Dash",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Modern architectural building with geometric design",
    },
  ];
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
          <p className="text-[#969696]">Home</p>
          <img
            src="/projects/right.svg"
            alt="stars"
            className="text-[#969696]"
          />
          <p className="text-[#969696]">Projects</p>
          <img
            src="/projects/right.svg"
            alt="stars"
            className="text-[#969696]"
          />
          <p>Residential Porjects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-[18px] border border-[#5E362E] overflow-hidden cursor-pointer"
              onClick={() =>
                router.push(`/projects/${category.title}/${category.name}/`)
              }
            >
              <div className="relative h-[165px] md:h-[291px] w-full p-[11px] md:p-[18px] ">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover overflow-hidden rounded-[16px]"
                />
              </div>
              <div className="px-[11px] pb-[11px] md:px-[20px] md:pb-[20px] flex justify-between items-center">
                <h2 className="text-[16px] md:text-[26px] font-semibold text-[#242424]">
                  {category.title}
                </h2>
                <a
                  href="#"
                  className="text-[#5E362E] text-[12px] md:text-[16px] font-semibold underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
