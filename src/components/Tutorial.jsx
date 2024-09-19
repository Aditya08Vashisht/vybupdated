import React from "react";
import Image from "next/image";

const Tutorial = () => {
  // Array of heading and subheading text for each bar
  const barTexts = [
    {
      heading: "Sign-up and create your own store hassle-free",
      subheading:
        "Join us via Google signin and verify your influencer status by entering your social media Id and unlock your store @ zero cost.",
    },
    {
      heading: "Build and customize your system front.",
      subheading:
        "Simply fill in the details to build your digital store. Once done, start selling your products to your audience.",
    },
    {
      heading:
        "Call the audience to your store. Easily integrate links into content.",
      subheading:
        "After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !",
    },
    {
      heading:
        "'Monetize your influencer status: Earn money adding real value to your true followers!'",
      subheading:
        "Let VYB the money now !! It's here and withdraw it periodically.",
    },
  ];

  return (
    <div className="tutorial-gallery-wrapper overflow-hidden w-full">
      {/* Mobile Layout */}
      <div className="md:hidden px-2.5 py-6">
        <div className="flex flex-row items-start">
          <div className="w-1/3 mr-3">
            <Image
              src="/images/line.svg"
              width={140} // Width is kept the same
              height={400} // Increased the height of the line image
              alt="Line Image"
              className="object-contain ml-[28rem] mt-80"
            />
          </div>

          {/* Bar Container for GIFs */}
          <div className="w-1/4 flex flex-col space-y-36 ml-56 mt-80">
            {["tutvid1.gif", "tutvid2.gif", "tutvid3.gif", "tutvid4.gif"].map(
              (gif, index) => (
                <div
                  key={index}
                  className="w-[550px] h-[1200px] relative border border-gray-300 bg-[rgba(229,240,241,1)] rounded-[30px] shadow-[0_4px_20px_rgba(64,64,64,1)]"
                >
                  {/* Display unique heading and subheading for each bar */}
                  <h1 className="text-center text-4xl font-bold mb-4 mt-6">
                    {barTexts[index].heading}
                  </h1>
                  <h2 className="text-center text-3xl font-bold mb-4 mt-6 px-4">
                    {barTexts[index].subheading}
                  </h2>
                  <Image
                    src={`/images/${gif}`}
                    width={300}
                    height={380}
                    alt={`Tutorial Video ${index + 1}`}
                    className="absolute bottom-4 left-11 w-[460px] h-[900px] rounded-[30px] shadow-[0_4px_20px_rgba(64,64,64,1)]"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Desktop Layout - NO CHANGES */}
      <div className="hidden md:flex flex-row items-start px-6 relative py-[-10rem] ml-[-5rem] lg:ml-[18rem]">
        <div className="w-[150px] mr-[-5rem] mt-[5rem] absolute">
          <Image
            src="/images/line.svg"
            width={100}
            height={180}
            alt="New Image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col space-y-72 ml-[8rem]">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="w-[450px]">
              <Image
                src={`/images/image${num}.svg`}
                width={450}
                height={550}
                alt={`Image ${num}`}
                className="w-full h-auto mt-[6rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
