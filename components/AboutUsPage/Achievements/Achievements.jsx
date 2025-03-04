import React from "react";
// Stats data for Our Journey section
const stats = [
  {
    value: "3+ Years of Excellence",
    label:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    value: "Happy Clients",
    label:
      "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    value: "Industry Recognition",
    label:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];
const Achievements = () => {
  return (
    <div id="achievements" className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[35px]">
      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Our Achievements
          </h2>

          {/* Description */}
          <p className="w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px] md:gap-[30px]">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#FFE4CF] rounded-[10px] p-[30px] md:p-[40px]">
                <p className="text-[20px] md:text-[24px] font-semibold text-[#5E362E] mb-[16px] md:mb-[24px]">
                  {stat.value}
                </p>
                <p className="text-[14px] md:text-[16px] text-[#242424] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
