import React from "react";
import Image from "next/image"; // Import Image from next/image

const SmallBar = () => {
  return (
    <div className="relative flex justify-center mt-24 px-4 md:px-0">
      {/* Desktop View */}
      <div className="hidden md:flex w-full max-w-[1200px] h-[350px] bg-white shadow-2xl rounded-3xl relative">
        {/* Earth Travel Image */}
        <Image
          src="/images/Earthtravel.svg"
          width={155}
          height={190}
          alt="travel"
          className="absolute"
          style={{ left: "12%", top: "48px" }}
        />

        {/* Custom Cloth Image */}
        <Image
          src="/images/custom.svg"
          width={242}
          height={355}
          alt="cloth"
          className="absolute"
          style={{ left: "30%", top: "50px" }}
        />

        {/* Filmy Shooting Image */}
        <Image
          src="/images/filmy.svg"
          width={155}
          height={190}
          alt="shooting"
          className="absolute"
          style={{ left: "55%", top: "52px" }}
        />

        {/* Fashion Image */}
        <Image
          src="/images/fashion.svg"
          width={170}
          height={220}
          alt="fashion"
          className="absolute"
          style={{ right: "10%", top: "58px" }}
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full ml-[25rem] mb-12 mt-[-6rem] max-w-[400px] h-auto bg-white shadow-2xl rounded-3xl relative grid grid-cols-2 gap-4 p-8">
        {/* Earth Travel Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/Earthtravel.svg"
            width={120}
            height={150}
            alt="travel"
            className="object-contain"
          />
        </div>

        {/* Custom Cloth Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/custom.svg"
            width={180}
            height={270}
            alt="cloth"
            className="object-contain"
          />
        </div>

        {/* Filmy Shooting Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/filmy.svg"
            width={120}
            height={150}
            alt="shooting"
            className="object-contain"
          />
        </div>

        {/* Fashion Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/fashion.svg"
            width={140}
            height={180}
            alt="fashion"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallBar;
