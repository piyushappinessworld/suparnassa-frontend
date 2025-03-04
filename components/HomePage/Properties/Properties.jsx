"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Properties() {
  const router = useRouter();
  const props = [
    {
      title: "Residential",
      img1: "/properties/pm4.svg",
      img2: "/properties/p4.svg",
    },
    {
      title: "Commercial",
      img1: "/properties/pm3.svg",
      img2: "/properties/p3.svg",
    },
    {
      title: "Office",
      img1: "/properties/pm2.svg",
      img2: "/properties/p2.svg",
    },
    {
      title: "Hospitality",
      img1: "/properties/pm1.svg",
      img2: "/properties/p1.svg",
    },
  ];
  return (
    <main id="projects" className="bg-white px-[16px] py-[24px] md:px-[60px]">
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
          {props?.map((item, index) => {
            return (
              <div
                onClick={() => router.push(`/projects/${item?.title}`)}
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
              >
                <div className="relative w-[100vw] h-[300px] md:w-[305px] md:h-[386px]">
                  {/* Mobile Image */}
                  <div className="absolute inset-0 md:hidden">
                    <Image
                      src={item?.img1}
                      alt="Residential Project"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  {/* Desktop Image */}
                  <div className="absolute inset-0 hidden md:block">
                    <Image
                      src={item?.img2}
                      alt="Residential Project"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="absolute top-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                      {item?.title}
                    </h3>
                    <p className="text-[16px] md:text-[20px] font-semibold text-[#5E362E]">
                      Projects
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
