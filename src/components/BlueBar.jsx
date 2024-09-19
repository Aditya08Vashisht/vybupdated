"use client";

import React from "react";
import Image from "next/image";

const BlueBar = () => {
  const handleItineraryClick = () => {};
  const handleButtonClick = () => {};
  const handlePricingClick = () => {};
  const handleMoreClick = () => {};

  return (
    <div className="flex justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-16">
      <div className="bg-[#E5F0F1] w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Products Title */}
          <h1 className="text-3xl font-bold font-urbanist mb-4 text-center ml-80">
            Products
          </h1>

          {/* Button Images */}
          <div className="flex justify-center space-x-4 ml-80 mb-4">
            <button onClick={handleItineraryClick}>
              <Image
                src="/images/Itinerary.svg"
                width={80}
                height={100}
                alt="Itinerary"
                className="object-contain w-32"
              />
            </button>
            <button onClick={handleButtonClick}>
              <Image
                src="/images/button.svg"
                width={80}
                height={100}
                alt="Button"
                className="object-contain w-32"
              />
            </button>
          </div>

          {/* Delhi Itinerary Text */}
          <div className="mb-4 px-4">
            <h2 className="text-2xl font-bold font-urbanist ml-[26rem] mb-2">
              Delhi Itinerary
            </h2>
            <p className="font-urbanist text-base ml-[26rem]">
              Delhi, India's capital territory, is a massive metropolitan area
              in the country's north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people.
            </p>
          </div>

          {/* India Gate Image */}
          <div className="flex justify-center ml-80 mb-4">
            <Image
              src="/images/Indiagate.svg"
              width={240}
              height={140}
              alt="India Gate"
              className="object-contain max-w-md"
            />
          </div>

          {/* Pricing and More Images */}
          <div className="flex justify-center mt-16 ml-80 space-x-4">
            <button onClick={handlePricingClick}>
              <Image
                src="/images/pricing.svg"
                width={80}
                height={45}
                alt="Pricing"
                className="object-contain w-36"
              />
            </button>
            <button onClick={handleMoreClick}>
              <Image
                src="/images/More.svg"
                width={80}
                height={45}
                alt="More"
                className="object-contain w-32 h-18"
              />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col">
          {/* Products Title and Button Images */}
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-5xl font-bold font-urbanist mb-4">Products</h1>
            <div className="flex space-x-4">
              <button onClick={handleItineraryClick}>
                <Image
                  src="/images/Itinerary.svg"
                  width={100}
                  height={120}
                  alt="Itinerary"
                  className="object-contain w-24"
                />
              </button>
              <button onClick={handleButtonClick}>
                <Image
                  src="/images/button.svg"
                  width={100}
                  height={120}
                  alt="Button"
                  className="object-contain w-24"
                />
              </button>
            </div>
          </div>

          {/* Delhi Itinerary Text */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold font-urbanist mb-2">
              Delhi Itinerary
            </h2>
            <p className="font-urbanist text-lg">
              Delhi, India's capital territory, is a massive metropolitan area
              in the country's north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
              and the sprawling Jama Masjid mosque, whose courtyard accommodates
              25,000 people.
            </p>
          </div>

          {/* India Gate Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Indiagate.svg"
              width={240}
              height={140}
              alt="India Gate"
              className="object-contain max-w-lg"
            />
          </div>

          {/* Pricing and More Images */}
          <div className="flex justify-center space-x-6">
            <button onClick={handlePricingClick}>
              <Image
                src="/images/pricing.svg"
                width={95}
                height={52}
                alt="Pricing"
                className="object-contain w-24"
              />
            </button>
            <button onClick={handleMoreClick}>
              <Image
                src="/images/More.svg"
                width={85}
                height={45}
                alt="More"
                className="object-contain w-22"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBar;
