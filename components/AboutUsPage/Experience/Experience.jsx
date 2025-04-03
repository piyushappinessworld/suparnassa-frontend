import React from "react";
// Stats data for Our Journey section
const stats = [
  {
    value: "Experience & Expertise",
    label: "A team of skilled professionals with a strong design sensibility",
  },
  {
    value: "Personalized Designs",
    label: "Tailored solutions to meet your unique requirements",
  },
  {
    value: "Sustainability Focus",
    label: "Eco-friendly and energy-efficient design practices",
  },
  {
    value: "Turnkey Solutions",
    label: "From planning to execution, we handle it all",
  },
];
const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[35px]"
    >
      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Why Choose Suparnassa?
          </h2>

          {/* Description */}
          <p className="w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            Let’s create something extraordinary together. Connect with
            Suparnassa today and bring your vision to life!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] md:gap-[30px]">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-[10px]">
                <div className="border-l border-[#FFE4CF] px-[16px] py-[14px]">
                  Step 0{index + 1}
                </div>
                <div className="p-[30px] md:p-[40px] rounded-b-[10px] rounded-tr-[10px] border-1 border-[#262626] bg-[linear-gradient(120.79deg,#88292B_-49.01%,rgba(136,41,43,0)_13.65%)]">
                  <p className="text-[18px] md:text-[20px] font-semibold text-[#242424] mb-[16px] md:mb-[24px]">
                    {stat.value}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-[#999999] font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
