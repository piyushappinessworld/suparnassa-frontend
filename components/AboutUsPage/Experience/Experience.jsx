import React from "react";
// Stats data for Our Journey section
const stats = [
  {
    value: "Discover a World of Possibilities",
    label:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    value: "Narrowing Down Your Choices",
    label:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    value: "Personalized Guidance",
    label:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
];
const Experience = () => {
  return (
    <div className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[35px]">
      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Navigating the Suparnassa Experience
          </h2>

          {/* Description */}
          <p className="w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] md:gap-[30px]">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-[10px]">
                <div className="border-l border-[#FFE4CF] px-[16px] py-[14px]">
                  Step 0{index + 1}
                </div>
                <div className="p-[30px] md:p-[40px] rounded-b-[10px] rounded-tr-[10px] border-1 border-[#262626] bg-[linear-gradient(120.79deg,#88292B_-49.01%,rgba(136,41,43,0)_13.65%)]">
                  <p className="text-[18px] md:text-[20px] md:text-[20px] font-semibold text-[#242424] mb-[16px] md:mb-[24px]">
                    {stat.value}
                  </p>
                  <p className="text-[14px] md:text-[16px] md:text-[16px] text-[#999999] font-medium">
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
