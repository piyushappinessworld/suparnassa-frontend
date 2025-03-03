"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (path) =>
    pathname === path
      ? "px-[20px] py-[12px] text-[14px] font-medium text-white bg-[#CE8943] rounded-[8px]"
      : "px-3 py-2 text-sm font-medium text-gray-900 hover:text-amber-700";

  return (
    <>
      {/* Banner */}
      <div
        style={{ backgroundImage: `url("/navbar/banner.png")` }}
        className="bg-cover bg-center px-[80px] py-[14px] text-center border-b border-[rgba(115,115,115,0.37)]"
      >
        <p className="text-[12px] lg:text-[14px] flex justify-center items-center gap-[6px] text-[#242424]">
          ✨Discover Your Dream Property with Suparnassa
          <Link
            href="/learn-more"
            className="text-[12px] lg:text-[14px] underline ml-1 text-[#CE8943]"
          >
            Learn More
          </Link>
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-[#FFE4CF]">
        <div className="w-full mx-auto py-[16px] px-[16px] sm:px-6 lg:px-[80px] border-b border-[rgba(115,115,115,0.37)]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center w-[133px]">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/navbar/logo.svg"
                  alt="logo"
                  width={34}
                  height={34}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-[24px]">
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
              <Link href="/about-us" className={linkClass("/about-us")}>
                About Us
              </Link>
              <Link href="/project" className={linkClass("/project")}>
                Project
              </Link>
            </div>

            {/* Contact Button (Desktop) */}
            <div className="hidden md:flex">
              <Link
                href="/contact"
                className="px-[20px] py-[12px] rounded-[8px] text-[14px] font-medium text-white bg-[#CE8943] border border-[#7373735E]"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <div
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Image
                    src="/navbar/menu.svg"
                    alt="logo"
                    width={34}
                    height={34}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-[rgba(115,115,115,0.37)]">
            <div className="flex flex-col px-3 pt-2 pb-3 space-y-1 sm:px-4">
              <Link
                href="/"
                className={linkClass("/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className={linkClass("/about-us")}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/project"
                className={linkClass("/project")}
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
              <Link
                href="/contact"
                className={linkClass("/contact")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
