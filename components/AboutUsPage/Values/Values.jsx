export default function Values() {
  return (
    <main
      id="values"
      className="bg-white px-[16px] md:px-[80px] py-[20px] md:py-[70px]"
    >
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px] items-center">
          {/* Left side - Title and description */}
          <div className="lg:w-1/3">
            {/* Decorative elements */}
            <div className="mb-1 ml-[-8px]">
              <img src="/reviews/stars.svg" alt="stars" className="" />
            </div>

            <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[8px] md:mb-[10px]">
              Our Approach
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[16px] font-medium text-[#999999]">
              We follow a client-centric philosophy, ensuring that every project
              is a true reflection of the client’s personality, lifestyle, or
              brand identity. From conceptualization to execution, we emphasize:
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
                    Thoughtful Space Planning
                  </h3>
                </div>
                <p className="text-white">
                  Every design is meticulously planned to enhance functionality,
                  comfort, and aesthetic appeal while maximizing space
                  utilization.
                </p>
              </div>
              <div className="px-0 py-6 md:p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/hat.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Innovative & Sustainable Designs
                  </h3>
                </div>
                <p className="text-white">
                  We integrate modern innovation with eco-friendly solutions to
                  create sustainable and forward-thinking designs.
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
                    High-Quality Craftsmanship
                  </h3>
                </div>
                <p className="text-white">
                  We collaborate with expert artisans and use premium materials
                  to ensure impeccable quality in every detail.
                </p>
              </div>
              <div className="px-0 pt-6 md:p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-[60px] h-[60px] border-1 border-[#CE8943] bg-white rounded-full mr-[10px]">
                    <img src="/values/star.svg" alt="stars" className="" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-white">
                    Seamless Project Execution
                  </h3>
                </div>
                <p className="text-white">
                  From concept to completion, we ensure a smooth and hassle-free
                  process with timely delivery and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
