import Image from 'next/image';

export default function Discover() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#f8f8f8]">
          <Image 
            src="https://images.unsplash.com/photo-1574691250077-03a929faece5?q=80&w=2069&auto=format&fit=crop" 
            alt="Blueprint background" 
            fill 
            className="object-cover opacity-[0.07]"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="md:max-w-[60%] lg:max-w-[50%] xl:max-w-[45%] md:ml-auto">
            {/* Heading - Desktop */}
            <div className="hidden md:block">
              <h1 className="text-[2.5rem] lg:text-[3.2rem] font-bold text-gray-900 leading-[1.2]">
                Crafting Timeless Spaces with
                <br />
                <span className="text-[#73472A]">Innovation & Passion</span>
              </h1>
            </div>

            {/* Heading - Mobile */}
            <div className="md:hidden">
              <h1 className="text-[2.2rem] font-bold text-gray-900 leading-[1.2]">
                Crafting Timeless
                <br />
                Spaces with
                <br />
                <span className="text-[#73472A]">Innovation & Passion</span>
              </h1>
            </div>

            {/* Description Paragraphs */}
            <div className="mt-8 md:mt-10 space-y-6 text-gray-500">
              <p className="text-lg leading-relaxed">
                At SuparnaSSa, we believe that great design is a blend of creativity, functionality, and purpose. Founded in 2010 by Mr. Ashok Kumar, a seasoned Interior Designer, and Mrs. Kavitha Ashok, a visionary Architect, our firm has transformed nearly 150+ spaces into inspiring realities.
              </p>

              <p className="text-lg leading-relaxed">
                From luxurious residential bungalows to sophisticated office spaces, boutiques, apartments, and restaurants, we bring a unique design perspective to every project. Our approach encourages "outside-the-box" thinking, ensuring innovative, customized solutions tailored to our clients' needs.
              </p>
              
              <div className="h-2"></div>

              <p className="text-lg leading-relaxed">
                Let's bring your dream space to life—with elegance, precision, and passion.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10 md:mt-12">
              <button className="bg-[#C89666] hover:bg-[#B88555] text-white font-medium py-3 px-10 rounded-md transition duration-300">
                Discover Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}