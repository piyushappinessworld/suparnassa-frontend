import React from "react";
// Stats data for Our Journey section
const stats = [
  {
    value: "200+",
    label: "Happy Customers",
  },
  {
    value: "10k+",
    label: "Properties For Clients",
  },
  {
    value: "16+",
    label: "Years of Experience",
  },
];
const Journey = () => {
  return (
    <div className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[70px]">
      <div className="flex flex-col-reverse lg:flex-row gap-[20px] md:gap-[60px] items-center">
        {/* Left side - Content */}
        <div className="lg:w-1/2">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Our Journey
          </h2>

          {/* Description */}
          <p className="text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#D0A88A] rounded-[10px] p-[20px] border-1 border-[#FFBE8B]"
              >
                <p className="text-[24px] md:text-[30px] font-bold text-[#FFFFFF] mb-[2px]">
                  {stat.value}
                </p>
                <p className="text-[14px] md:text-[16px] text-[#FFFFFF] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="relative rounded-[15px] border-1 border-[#262626] overflow-hidden">
            <img
              src="/journey/journey.svg"
              alt="Hand holding a model house"
              className="relative z-10 w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
