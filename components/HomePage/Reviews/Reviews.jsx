"use client";
import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Testimonial data
const testimonials = [
  {
    id: 1,
    title: "Exceptional Service!",
    content:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    author: "Wade Warren",
    location: "USA, California",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    content:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    author: "Emelie Thomson",
    location: "USA, Florida",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    title: "Trusted Advisors",
    content:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    author: "John Mans",
    location: "USA, Nevada",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    title: "Seamless Experience",
    content:
      "From the initial consultation to closing the deal, Estatein made the entire process seamless. Their attention to detail and market knowledge is unmatched in the industry.",
    author: "Sarah Johnson",
    location: "USA, New York",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    title: "Above and Beyond",
    content:
      "Estatein went above and beyond our expectations. They not only found us the perfect investment property but also provided valuable insights on market trends and potential growth areas.",
    author: "Michael Chen",
    location: "USA, Texas",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 6,
    title: "Professional Team",
    content:
      "The professionalism of the Estatein team is remarkable. They were always available to answer our questions and address our concerns. Their expertise made our first-time home buying experience stress-free.",
    author: "Lisa Rodriguez",
    location: "USA, Arizona",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Determine how many testimonials to show based on screen size
  function getVisibleCount() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  }

  // Update visible count on window resize and component mount
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    // Set initial visible count
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigation functions
  const goToPrev = () => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return Math.max(0, testimonials.length - visibleCount);
      }
      return Math.max(0, prev - 1);
    });
  };

  const goToNext = () => {
    setActiveIndex((prev) => {
      const maxStartIndex = Math.max(0, testimonials.length - visibleCount);
      if (prev >= maxStartIndex) {
        return 0;
      }
      return Math.min(maxStartIndex, prev + 1);
    });
  };

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    // If we need to wrap around
    if (activeIndex + visibleCount > testimonials.length) {
      const firstPart = testimonials.slice(activeIndex);
      const secondPart = testimonials.slice(0, visibleCount - firstPart.length);
      return [...firstPart, ...secondPart];
    }

    // Normal case
    return testimonials.slice(activeIndex, activeIndex + visibleCount);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="bg-white" id="testimonials">
      <div className="w-full mx-auto px-[16px] py-[24px] md:px-[80px] md:py-[100px]">
        {/* Decorative elements */}
        <div className="mb-1 ml-[-8px]">
          <img src="/reviews/stars.svg" alt="stars" className="" />
        </div>

        {/* Heading */}
        <h2 className="text-[28px] md:text-[38px] font-semibold text-[#242424] mb-[10px]">
          What Our Clients Say
        </h2>

        {/* Subheading */}
        <p className="text-[14px] md:text-[16px] text-[#999999] mb-[40px] md:mb-[60px]">
          Read the success stories and heartfelt testimonials from our valued
          clients.
        </p>

        {/* Testimonials grid/carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mb-10">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F6F6F6] rounded-[10px] p-[30px] md:p-[40px] border-1 border-[#262626] transition-all duration-300 ease-in-out"
            >
              {/* Stars */}
              <div className="flex mb-[24px] md:mb-[30px]">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[36px] h-[36px] p-1 bg-[#FFE5E5] flex items-center justify-center border-1 border-[#ff7575]  rounded-full mr-[8px]"
                  >
                    <img src="/reviews/Shape.svg" alt="stars" className="" />
                  </div>
                ))}
              </div>

              <div className="mb-[24px] md:mb-[30px]">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#242424] mb-[10px]">
                  {testimonial.title}
                </h3>
                <p className="text-[14px] md:text-[16px] font-medium text-[#242424]">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-[50px] h-[50px] rounded-full object-cover mr-[10px]"
                />
                <div>
                  <p className="font-medium text-[16px] md:text-[18px] text-[#242424]">
                    {testimonial.author}
                  </p>
                  <p className="text-[#999999] text-[14px] md:text-[16px] font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center md:justify-end gap-[10px]">
          <button
            onClick={goToPrev}
            className="w-[44px] h-[44px] rounded-full border-1 border-[#CE8943] flex items-center justify-center text-[#CE8943] cursor-pointer"
            aria-label="Previous testimonial"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={goToNext}
            className="w-[44px] h-[44px] rounded-full bg-[#CE8943] flex items-center justify-center text-white cursor-pointer"
            aria-label="Next testimonial"
          >
            <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
