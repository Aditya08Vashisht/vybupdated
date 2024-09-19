"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] mx-auto bg-[rgba(214,214,214,0.4)] opacity-100 px-4 py-2 rounded-[35px] left-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-2">
        {/* Logo */}
        <div className="flex items-center mr-8">
          <Link href="/">
            <Image
              src="/images/logo_gif_file.gif"
              alt="logo"
              width={125}
              height={40}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Centered Search Bar for Desktop */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full border border-gray-300 w-1/2 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-black list-none space-x-5">
          {/* Cart, About, and Contact Links */}
          <li className="flex items-center">
            <Link
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/cartframe.svg"
                alt="cart"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              Cart
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/aboutframe.svg"
                alt="about"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/contactframe.svg"
                alt="contact"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              Contact
            </Link>
          </li>

          {/* Profile Dropdown */}
          <li className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center w-12 h-12 text-black hover:bg-gray-700 rounded-full transition"
              aria-expanded={isDropdownOpen}
              aria-label="Toggle Profile Dropdown"
            >
              <Image
                src="/images/Login.svg"
                alt="profile"
                width={28}
                height={28}
                className="object-contain"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 py-2 w-48 bg-white text-black rounded-lg shadow-lg z-20">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Burger Menu for Mobile Responsiveness */}
        <button
          className="md:hidden flex flex-col justify-around w-6 h-6 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Mobile Menu"
        >
          <div className="w-full h-0.5 bg-black mb-1 transition duration-300"></div>
          <div className="w-full h-0.5 bg-black mb-1 transition duration-300"></div>
          <div className="w-full h-0.5 bg-black transition duration-300"></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[rgba(214,214,214,0.9)] rounded-lg px-4 py-2 mt-2 space-y-4">
          {/* Centered Search Bar */}
          <li className="w-full flex justify-center mb-2">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-full border border-gray-300 w-[80%] focus:outline-none focus:border-gray-500"
            />
          </li>

          {/* Cart, About, and Contact Links */}
          <li>
            <Link
              href="#"
              className="flex items-center text-xl text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/cartframe.svg"
                alt="cart"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center text-xl text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/aboutframe.svg"
                alt="about"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center text-xl text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/contactframe.svg"
                alt="contact"
                width={24}
                height={24}
                className="mr-2 object-contain"
              />
              Contact
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center w-full text-black hover:bg-gray-700 rounded transition"
              aria-expanded={isDropdownOpen}
              aria-label="Toggle Profile Dropdown"
            >
              <Image
                src="/images/Login.svg"
                alt="profile"
                width={28}
                height={28}
                className="object-contain"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 py-2 w-48 bg-white text-black rounded-lg shadow-lg z-20">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
