import React from "react";
import {
  ClipboardList,
  Building2,
  Calculator,
  Clock,
  Building,
  FileSpreadsheet,
} from "lucide-react";
import Image from "next/image";

const Solutions = () => {
  return (
    <section className="p-[40px] md:p-[80px] bg-[#D0A88A]">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[28px] md:text-[46px] font-semibold text-[#5E362E] mb-3">
            Tailored Solutions for Every Space
          </h2>
          <p className="text-[#242424] text-[14px] lg:text-[18px] max-w-2xl mx-auto">
            Let's shape your vision into reality with innovation and expertise.
          </p>
        </div>

        <div className="w-full  flex flex-wrap gap-[22px] lg:gap-x-[66px] lg:gap-y-[45px] items-center justify-center">
          {/* Planning */}
          <div className="w-[270px] h-[132px] bg-[#CE8943] border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution.svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-white text-[16px] font-medium">Planning</h3>
          </div>

          <div className="w-[270px] h-[132px] bg-white border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution (1).svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-[#242424] text-[16px] font-medium">
              Feasibility Studies
            </h3>
          </div>

          <div className="w-[270px] h-[132px] bg-white border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution (1).svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-[#242424] text-[16px] font-medium">
              Cost Estimation
            </h3>
          </div>

          <div className="w-[270px] h-[132px] bg-white border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution (1).svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-[#242424] text-[16px] font-medium">
              Scheduling
            </h3>
          </div>

          <div className="w-[270px] h-[132px] bg-white border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution (1).svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-[#242424] text-[16px] font-medium">
              Construction Administration
            </h3>
          </div>

          <div className="w-[270px] h-[132px] bg-white border-1 border-black rounded-[8px] px-[10px] py-[16px] flex flex-col justify-center items-center gap-2">
            <div className="flex items-center justify-center">
              <Image
                src="/banner/solution (1).svg"
                alt="logo"
                width={54}
                height={54}
              />
            </div>
            <h3 className="text-[#242424] text-[16px] font-medium">
              Project Execution
            </h3>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="bg-[#CE8943] text-white font-medium py-[14px] px-[20px] rounded-[8px] transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
