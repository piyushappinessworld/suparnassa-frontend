"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";
export default function Banner() {
  const images = [
    "/carousel/property (1).jpg",
    "/carousel/property (2).jpg",
    "/carousel/property (3).jpg",
    "/carousel/property (4).jpg",
    "/carousel/property (5).jpg",
    "/carousel/property (6).jpg",
    "/carousel/property (7).jpg",
    "/carousel/property (8).jpg",
    "/carousel/property (9).jpg",
    "/carousel/property (10).jpg",
    "/carousel/property (11).jpg",
    "/carousel/property (12).jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [nextImage, setNextImage] = useState("");

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setCurrentImage(nextImage);
        setIsTransitioning(false);
      }, 500); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, nextImage]);

  const goToPrevious = () => {
    if (isTransitioning) return;

    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setNextImage(images[newIndex]);
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;

    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setNextImage(images[newIndex]);
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
  };

  return (
    <section className="w-full bg-[#FFE4CF]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="px-6 py-[30px] lg:py-[172px] md:px-12 lg:px-[80px] flex items-center">
          <div className="w-full">
            <h1 className="text-[28px] md:text-[35px] lg:text-[46px] font-semibold text-[#242424] mb-6">
              Designing Spaces, Defining Lifestyles with Suparnassa
            </h1>
            <p className="text-[#242424] font-medium mb-8 text-[16px]">
              Let’s create something extraordinary together. Connect with
              Suparnassa today and bring your vision to life!
            </p>
            <Link
              href="/projects"
              className="bg-[#CE8943] text-[14px] text-white px-[25px] lg:px-[20px] py-[14px] rounded-[8px] inline-block transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[170px] lg:h-[660px] overflow-hidden">
          {/* Current Image */}
          <div
            className={`h-full absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out ${
              isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
            style={{ backgroundImage: `url('${currentImage}')` }}
          ></div>

          {/* Next Image (shown during transition) */}
          {isTransitioning && (
            <div
              className="h-full absolute inset-0 bg-cover bg-center opacity-100 scale-100 transition-all duration-500 ease-in-out -z-10"
              style={{ backgroundImage: `url('${nextImage}')` }}
            ></div>
          )}

          {/* Navigation Arrows */}
          <div className="absolute bottom-0 left-0 flex z-10">
            <button
              className="bg-white w-[34px] h-[34px] lg:w-[61px] lg:h-[53px] flex items-center justify-center disabled:opacity-50 cursor-pointer"
              onClick={goToPrevious}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              <IoArrowBack className="h-6 w-6 text-[#D0A88A]" />
            </button>
            <button
              className="bg-[#D0A88A] w-[34px] h-[34px] lg:w-[61px] lg:h-[53px] flex items-center justify-center disabled:opacity-50 cursor-pointer"
              onClick={goToNext}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              <IoArrowForwardOutline className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
