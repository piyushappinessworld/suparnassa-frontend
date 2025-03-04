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
                At SuparnaSSa, we believe that great design is a blend of
                creativity, functionality, and purpose. Founded in 2010 by Mr.
                Ashok Kumar, a seasoned Interior Designer, and Mrs. Kavitha
                Ashok, a visionary Architect, our firm has transformed nearly
                150+ spaces into inspiring realities.
              </p>

              <p className="text-[14px] lg:text-[20px] leading-relaxed">
                From luxurious residential bungalows to sophisticated office
                spaces, boutiques, apartments, and restaurants, we bring a
                unique design perspective to every project. Our approach
                encourages "outside-the-box" thinking, ensuring innovative,
                customized solutions tailored to our clients' needs.
              </p>
              <p className="text-[14px] lg:text-[20px] leading-relaxed">
                Let's bring your dream space to life—with elegance, precision,
                and passion.
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
