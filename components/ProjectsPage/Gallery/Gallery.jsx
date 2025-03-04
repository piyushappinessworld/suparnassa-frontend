"use client";
import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export default function Gallery({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Check if images is defined and not empty
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <main className="mx-auto w-full">
      <div className="bg-[#FFE4CF] p-[20px] md:p-[40px] rounded-[12px] border border-[#262626]">
        <div className="flex flex-col-reverse justify-center gap-[20px] md:block">
          <div className="bg-[#CE8943] p-[5px] md:p-[10px] rounded-[12px] mb-6 overflow-x-auto border border-[#262626]">
            <div className="flex space-x-[5px] md:space-x-[10px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[67px] h-[41px]  md:w-[123px] md:h-[75px] rounded-[6px] overflow-hidden border-2 cursor-pointer ${
                    currentImageIndex === index
                      ? "border-[#D4A276]"
                      : "border-transparent"
                  }`}
                  onClick={() => selectImage(index)}
                >
                  <img
                    src={image}
                    alt="property image"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main image display */}
          <div className="relative rounded-[10px] overflow-hidden h-[280px] md:h-[350px] lg:h-[700px]">
            <img
              src={images[currentImageIndex]}
              alt="property image"
              className="w-full h-full object-contain bg-black"
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
              {Array.from({ length: images.length }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-[11px] mx-[2px] ${
                    i === currentImageIndex ? "bg-white" : "bg-[#E5C3A6]"
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
