"use client";
import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function Gallery() {
  // Gallery images
  const galleryImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Modern white house with pool",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Contemporary house with large windows",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Modern house with swimming pool",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Luxury living room with large windows",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Modern kitchen with island",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Dining area with modern design",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Modern dining room with wooden table",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Bedroom with minimalist design",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      alt: "Modern living room with sofa",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <main className="mx-auto w-full">
      <div className="bg-[#FFE4CF] p-[20px] md:p-[40px] rounded-[12px] border border-[#262626]">
        <div className="flex flex-col-reverse justify-center gap-[20px] md:block">
          <div className="bg-[#CE8943] p-[5px] md:p-[10px] rounded-[12px] mb-6 overflow-x-auto border border-[#262626]">
            <div className="flex space-x-[5px] md:space-x-[10px]">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-shrink-0 w-[67px] h-[41px]  md:w-[123px] md:h-[75px] rounded-[6px] overflow-hidden border-2 cursor-pointer ${
                    currentImageIndex === index
                      ? "border-[#D4A276]"
                      : "border-transparent"
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={image.image}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main image display */}
          <div className="relative rounded-[10px] overflow-hidden h-[280px] md:h-[350px] lg:h-[500px]">
            <img
              src={galleryImages[currentImageIndex].image}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center mt-0 md:mt-6">
          <div className="w-full md:w-auto flex items-center justify-between bg-[#CE8943] rounded-full p-[8px]">
            <div
              onClick={goToPrevious}
              className="flex items-center justify-center w-12 h-12 rounded-full text-[#FFE4CF] border border-[#FFE4CF] cursor-pointer"
              aria-label="Previous image"
            >
              <GoArrowLeft size={24} />
            </div>
            <div className="px-3 flex items-center">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-[11px] mx-[2px] ${
                    i === 0 ? "bg-white" : "bg-[#E5C3A6]"
                  }`}
                />
              ))}
            </div>
            <div
              onClick={goToNext}
              className="flex items-center justify-center w-12 h-12 rounded-full text-[#CE8943] bg-[#FFE4CF] cursor-pointer"
              aria-label="Next image"
            >
              <GoArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
