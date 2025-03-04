import { ChevronDown } from "lucide-react";
import { MdLocationOn } from "react-icons/md";
export default function Contact() {
  return (
    <main className="bg-white">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px]">
          {/* Left side - Title and description */}
          <div className="lg:w-1/3">
            {/* Decorative elements */}
            <div className="mb-1 ml-[-8px]">
              <img src="/reviews/stars.svg" alt="stars" className="" />
            </div>

            <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
              Inquire About Seaside Serenity Villa
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#999999]">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
          </div>
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="">
              <div className="w-full mx-auto">
                <form className="bg-white rounded-lg border border-[#262626] p-[20px] md:p-[40px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[40px]">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter First Name"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter Last Name"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-[40px]">
                    <div>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter Phone Number"
                        className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 mb-[40px]">
                    <div className="flex items-center justify-between w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626] text-[#666666]">
                      <p>Location</p>{" "}
                      <MdLocationOn className="w-[20px] h-[20px]" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Enter your Message here.."
                      className="w-full px-[20px] py-[16px] rounded-[6px] border bg-[#EEEEEE] border-[#262626]"
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-5 w-5 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 text-[#999999] text-[14px] md:text-[16px]"
                      >
                        I agree with Terms of Use and Privacy Policy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#CE8943] cursor-pointer text-white font-medium py-3 px-6 text-[14px] md:text-[16px] rounded-md transition-colors"
                    >
                      Send Your Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
