import Link from "next/link";

export default function Discover() {
  return (
    <main
      id="who-are-we"
      style={{ backgroundImage: `url("/banner/discover.svg")` }}
      className="bg-contain bg-left bg-no-repeat w-full h-auto"
    >
      <div className="px-6 md:px-12 lg:px-[180px] py-16 md:py-20 lg:py-24">
        <div className="w-full">
          {/* Heading - Desktop */}
          <div className="">
            <h1 className="text-[28px] lg:text-[46px] font-semibold text-[#242424] leading-[1.2]">
              Crafting Timeless Spaces with
              <br />
              <span className="text-[28px] lg:text-[46px] font-semibold text-[#5E362E]">
                Innovation & Passion
              </span>
            </h1>
          </div>

          <div className="w-full flex flex-col items-end">
            {/* Description Paragraphs */}
            <div className="w-full md:w-[75%] mt-8 md:mt-10 space-y-6 text-[#999999]">
              <p className="text-[14px] lg:text-[20px] leading-relaxed">
                At Suparnassa, we believe that architecture and interior design
                are more than just structures and aesthetics—they are
                experiences. Our mission is to create innovative, functional,
                and timeless spaces that reflect your vision while enhancing
                comfort and functionality.
              </p>

              <p className="text-[14px] lg:text-[20px] leading-relaxed">
                Suparnassa is a team of passionate architects and interior
                designers dedicated to crafting spaces that inspire. With a keen
                eye for detail and a deep understanding of materials, form, and
                function, we blend creativity with technical expertise to bring
                your dream spaces to life.
              </p>
              <p className="text-[14px] lg:text-[20px] leading-relaxed">
                Let’s create something extraordinary together. Connect with
                Suparnassa today and bring your vision to life!
              </p>
            </div>
            <div className="w-full md:w-[75%] mt-5 md:mt-12">
              <Link
                href="/contact"
                className="bg-[#CE8943] text-white font-medium py-3 px-10 rounded-md transition duration-300"
              >
                Discover Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
