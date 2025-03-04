import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
const Address = () => {
  return (
    <div id="office" className="w-full mx-auto px-[16px] md:px-[80px] py-[40px] md:py-[35px]">
      <div className="">
        <div className="w-full">
          {/* Decorative elements */}
          <div className="mb-1 ml-[-8px]">
            <img src="/reviews/stars.svg" alt="stars" className="" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
            Discover Our Office Locations
          </h2>

          {/* Description */}
          <p className="w-full md:w-2/3 text-[14px] md:text-[16px] font-medium text-[#999999] mb-[30px] md:mb-[50px]">
            Suparnassa is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we have offices conveniently located
            to serve your needs. Explore the categories below to find the office
            nearest to you At Estatein, we've designed a straightforward process
            to help you find and purchase your dream property with ease. Here's
            a step-by-step guide to how it all works.
          </p>

          {/* Address */}
          <div className="p-[20px] rounded-[8px] md:p-[40px] bg-[#FFE4CF] border border-[#262626] md:border-none">
            <div className="w-full mx-auto">
              <div className="">
                <div className="mb-4">
                  <h3 className="text-[14px] font-medium text-[#242424]">
                    Main Headquarters
                  </h3>
                </div>

                <div className="mb-4">
                  <h2 className="text-[20px] md:text-[24px] font-semibold text-[#242424]">
                    #20, 3rd Main, New BEL Road RMV 2nd Stage
                  </h2>
                  <h2 className="text-[20px] md:text-[24px] font-semibold text-[#242424] mt-2">
                    Bangalore – 560094
                  </h2>
                </div>

                <div className="mb-8">
                  <p className="text-[14px] md:text-[16px] text-[#242424]">
                    Our main headquarters serve as the heart of Suparnassa.
                    Located in the bustling city center, this is where our core
                    team of experts operates, driving the excellence and
                    innovation that define us.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <a
                    href="mailto:suparnassa@gmail.com"
                    className="inline-flex items-center bg-[#1A1A1A] text-white text-[14px] rounded-full px-6 py-3 gap-2"
                  >
                    <img src="/address/mail.svg" alt="stars" className="" />
                    suparnassa@gmail.com
                  </a>

                  <a
                    href="tel:+919845115539"
                    className="inline-flex items-center bg-gray-900 text-white rounded-full px-6 py-3 gap-2"
                  >
                    <img src="/address/location.svg" alt="stars" className="" />
                    +91-9845115539
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center bg-gray-900 text-white rounded-full px-6 py-3 gap-2"
                  >
                    <img src="/address/phone.svg" alt="stars" className="" />
                    Bangalore
                  </a>
                </div>

                <div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#CE8943] text-white text-[14px] text-center font-medium py-4 px-6 rounded-lg transition-colors"
                  >
                    Get Direction
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
