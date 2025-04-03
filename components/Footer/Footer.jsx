"use client";

import { Mail, Send, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div
        style={{ backgroundImage: `url("/footer/top-bg.svg")` }}
        className="bg-cover bg-start text-white px-[16px] py-[50px] md:px-12 lg:px-[80px] lg:py-[60px] lg:bg-center"
      >
        <div className="w-full flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-[28px] lg:text-[38px] font-semibold md:text-5xl mb-2 lg:mb-6">
              Start Your Journey Today
            </h2>
            <p className="w-100% lg:w-[67%] text-[16px]">
              Whether you're looking to transform your home, enhance your
              workspace, or bring a unique design vision to life, we’re here to
              assist you every step of the way. Take the first step towards
              creating a beautifully designed space—explore our services or get
              in touch for personalized guidance.
            </p>
          </div>
          {/* Contact Button (Desktop) */}
          <div>
            <Link
              href="/contact"
              className="w-full md:w-[115px] flex items-center justify-center px-[20px] py-[14px] rounded-[8px] text-[14px] font-medium text-white bg-[#CE8943]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full bg-[#FFE4CF]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] md:gap-[80px] px-[16px] py-[50px] lg:p-[80px]">
          {/* Logo and Newsletter */}
          <div className="md:col-span-1">
            <div className="flex items-center w-[133px] mb-[24px]">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/footer/purple-logo.svg"
                  alt="logo"
                  width={34}
                  height={34}
                />
              </Link>
            </div>
            <div className="relative">
              <div className="flex items-center  border border-[#262626] bg-[#CE8943] rounded-[8px] overflow-hidden px-[20px] py-[14px]">
                <div className="flex items-center">
                  <Image
                    src="/footer/mail.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full pl-3 font-medium text-[14px] outline-none text-white placeholder-white placeholder:font-medium"
                />
                <div className="flex items-center">
                  <Image
                    src="/footer/send.svg"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row lg:flex-row gap-[35px] md:gap-[50px] lg:gap-[80px]">
              {/* Column 1 */}
              <div className="w-[300px] block">
                <h3 className="font-medium text-[#242424] text-[16px] mb-4">
                  Home
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#who-are-we"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Who we are
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#projects"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#testimonials"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="w-[300px] block">
                <h3 className="font-medium text-[#242424] text-[16px] mb-4">
                  About Us
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about-us#journey"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us#values"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us#achievements"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Achievements
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us#experience"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Why choose Suparnassa?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us#team"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-[300px] block">
                <h3 className="font-medium text-[#242424] text-[16px] mb-4">
                  Projects
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/projects/Residential"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Residential Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/Commercial"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Commercial Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/Office"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Office Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/Hospitality"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Hospitality Projects
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div className="w-[300px] block">
                <h3 className="font-medium text-[#242424] text-[16px] mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/contact#form"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Contact Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact#office"
                      className="text-gray-700 hover:text-[#c9a36f] whitespace-nowrap"
                    >
                      Our Offices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-[#FFD1AE] w-full flex flex-col-reverse md:flex-row justify-between items-center px-[40px] py-[12px] lg:px-[80px] lg:py-[12px]">
          <div className="flex flex-col md:flex-row items-center gap-[10px] md:gap-[20px]">
            <p className="text-[#242424] text-[14px] font-medium">
              &copy;2025 Suparnassa. All Rights Reserved.
            </p>
          </div>
          {/* <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex space-x-4">
              <Link
                href="/contact"
                aria-label="Facebook"
                className="bg-[#f8e1cf] w-[60px] h-[60px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full"
              >
                <FaFacebookF className="h-5 w-5 text-[#CE8943]" />
              </Link>
              <Link
                href="/contact"
                aria-label="LinkedIn"
                className="bg-[#f8e1cf] w-[60px] h-[60px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full"
              >
                <FaLinkedin className="h-5 w-5 text-[#CE8943]" />
              </Link>
              <Link
                href="/contact"
                aria-label="Twitter"
                className="bg-[#f8e1cf] w-[60px] h-[60px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full"
              >
                <FaTwitter className="h-5 w-5 text-[#CE8943]" />
              </Link>
              <Link
                href="/contact"
                aria-label="YouTube"
                className="bg-[#f8e1cf] w-[60px] h-[60px] md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full"
              >
                <FaYoutube className="h-5 w-5 text-[#CE8943]" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
