"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  const sol = [
    {
      title: "Custom Home & Renovation Design",
      img1: "/banner/sol1.svg",
      img2: "/banner/s1.svg",
    },
    {
      title: "Commercial & Office Spaces",
      img1: "/banner/s2.svg",
      img2: "/banner/sol4.svg",
    },
    {
      title: "Landscape & Urban Planning",
      img1: "/banner/s3.svg",
      img2: "/banner/sol5.svg",
    },
    {
      title: "Residential & Hospitality Interiors",
      img1: "/banner/s4.svg",
      img2: "/banner/sol2.svg",
    },
    {
      title: "Corporate & Retail Interiors",
      img1: "/banner/s5.svg",
      img2: "/banner/sol3.svg",
    },
    {
      title: "Sustainable & Smart Design",
      img1: "/banner/s6.svg",
      img2: "/banner/sol6.svg",
    },
  ];
  return (
    <section id="services" className="p-[40px] md:p-[80px] bg-[#D0A88A]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[28px] md:text-[46px] font-semibold text-[#5E362E] mb-3">
            Tailored Solutions for Every Space
          </h2>
          <p className="text-[#242424] text-[14px] lg:text-[18px] max-w-2xl mx-auto">
            Let's shape your vision into reality with innovation and expertise.
          </p>
        </div>

        <div className="w-full flex flex-wrap gap-[22px] lg:gap-x-[66px] lg:gap-y-[45px] items-center justify-center text-center">
          {sol?.map((item, i) => {
            return (
              <div
                key={i}
                className="w-[270px] h-[132px] hover:text-white hover:bg-[#CE8943] bg-white text-black border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2"
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").src = item?.img2;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").src = item?.img1;
                }}
              >
                <div className="flex items-center justify-center">
                  <Image src={item?.img1} alt="logo" width={54} height={54} />
                </div>
                <h3 className="text-[16px] font-medium">{item?.title}</h3>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/contact" className="bg-[#CE8943] text-white font-medium py-[14px] px-[20px] rounded-[8px] transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
