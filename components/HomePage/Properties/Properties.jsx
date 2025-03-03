import Image from "next/image";

export default function Properties() {
  return (
    <main className="bg-white px-[16px] md:px-[80px] py-[24px] md:px-[60px]">
      {/* Hero Section */}
      <section className="w-full mx-auto mb-[24px] md:mb-[60px]">
        <div className="">
          <h1 className="text-[28px] md:text-[46px] font-semibold text-[#242424]">
            Crafting Timeless Spaces with
          </h1>
          <h2 className="text-[28px] md:text-[46px] font-semibold text-[#5E362E]">
            Innovation & Passion
          </h2>
        </div>
      </section>

      {/* Project Categories */}
      <section className="w-full mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-6">
          <div className="rounded-lg overflow-hidden">
            <div className="relative w-[100vw] h-[300px] md:w-[305px] md:h-[386px]">
              {/* Mobile Image */}
              <div className="absolute inset-0 md:hidden">
                <Image
                  src="/properties/pm4.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Desktop Image */}
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src="/properties/p4.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 p-6 text-center">
                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Residential
                </h3>
                <p className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Projects
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <div className="relative w-[100vw] h-[300px] md:w-[305px] md:h-[386px]">
              {/* Mobile Image */}
              <div className="absolute inset-0 md:hidden">
                <Image
                  src="/properties/pm3.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Desktop Image */}
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src="/properties/p3.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-6 text-center">
                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Commercial
                </h3>
                <p className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Projects
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="relative w-[100vw] h-[300px] md:w-[305px] md:h-[386px]">
              {/* Mobile Image */}
              <div className="absolute inset-0 md:hidden">
                <Image
                  src="/properties/pm2.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Desktop Image */}
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src="/properties/p2.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-6 text-center">
                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Office
                </h3>
                <p className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Projects
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <div className="relative w-[100vw] h-[300px] md:w-[305px] md:h-[386px]">
              {/* Mobile Image */}
              <div className="absolute inset-0 md:hidden">
                <Image
                  src="/properties/pm1.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Desktop Image */}
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src="/properties/p1.svg"
                  alt="Residential Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 p-6 text-center">
                <h3 className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Architecture
                </h3>
                <p className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
