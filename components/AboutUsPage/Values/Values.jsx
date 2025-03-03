import { Star, GraduationCap, Users } from "lucide-react";

export default function Values() {
  return (
    <main className="bg-white px-[16px] md:px-[80px] py-[20px] md:py-[70px]">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px] items-center">
          {/* Left side - Title and description */}
          <div className="lg:w-1/3">
            {/* Decorative elements */}
            <div className="mb-1 ml-[-8px]">
              <img src="/reviews/stars.svg" alt="stars" className="" />
            </div>

            <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
              Our Values
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#999999]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>
          <div className="lg:w-2/3 bg-[#D0A88A] rounded-[12px] p-[24px] md:p-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-2 md:mb-6">
              <div className="px-0 pb-6 md:p-6 bg-transparent border-r-0 border-b-1 border-[#CE8943] md:border-b-0 md:border-r-1 md:border-black">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/star.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Trust
                  </h3>
                </div>
                <p className="text-white">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>
              <div className="px-0 py-6 md:p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/hat.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Excellence
                  </h3>
                </div>
                <p className="text-white">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-[#CE8943] md:bg-black w-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-6">
              <div className="px-0 py-6 md:p-6 bg-transparent border-r-0 border-b-1 border-[#CE8943] md:border-b-0 md:border-r-1 md:border-black">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/group.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Client-Centric
                  </h3>
                </div>
                <p className="text-white">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>
              <div className="px-0 pt-6 md:p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/star.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Our Commitment
                  </h3>
                </div>
                <p className="text-white">
                  We are dedicated to providing you with the highest level of
                  service, professionalism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
