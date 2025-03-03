import React from "react";
import { Twitter, Send } from "lucide-react";

const teamMembers = [
  {
    name: "Max Mitchell",
    role: "Founder",
    image: "/team/t1.svg",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
    image: "/team/t2.svg",
  },
  {
    name: "David Brown",
    role: "Head of Property Management",
    image: "/team/t3.svg",
  },
  {
    name: "Michael Turner",
    role: "Legal Counsel",
    image: "/team/t4.svg",
  },
];
const Teams = () => {
  return (
    <div className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:pt-[35px] md:pb-[70px]">
      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Meet the Suparnassa Team
          </h2>

          {/* Description */}
          <p className="w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>

          <div className="">
            <div className="w-full mx-auto">
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[12px] overflow-hidden border border-[#262626]"
                  >
                    <div className="relative">
                      <div className="aspect-w-1 aspect-h-1 w-full p-[20px] md:p-[24px] rounded-[12px] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-[220px] object-cover object-center rounded-[12px]"
                        />
                      </div>
                      <div className="absolute bottom-[5px] left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#CE8943] rounded-full p-3 shadow-md w-[60px] h-[40px] flex items-center justify-center">
                          <Twitter className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 md:pt-8 pb-6 px-6 text-center">
                      <h3 className="text-[18px] md:text-[20px] font-bold text-[#242424]">
                        {member.name}
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-[#999999] mt-1">
                        {member.role}
                      </p>

                      <div className="mt-6">
                        <button className="flex items-center justify-between bg-[#1A1A1A] border border-[#262626] text-white rounded-full px-[15px] py-[12px] w-full">
                          <span className="text-[14px] md:text-[16px]">
                            Say Hello 👋
                          </span>
                          <span className="bg-[#CE8943] rounded-full w-[36px] h-[36px] flex items-center justify-center">
                            <img
                              src="/footer/send.svg"
                              alt="stars"
                              className=""
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
