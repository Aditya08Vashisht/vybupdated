import React from "react";
import Image from "next/image";
import samira from "./samira.svg";
import Banner from "./Banner.svg";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-gray-100 pt-24 mt-10">
      {/* Container for the Profile */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/3 bg-white p-8 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={samira}
              alt="Samira Hadid"
              layout="fill"
              className="rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Samira Hadid</h2>
          <div className="w-full space-y-4">
            {/* Buttons */}
            <button className="w-full py-2 px-4 border hover:bg-teal-700 transition-all border-gray-300 rounded-md text-center">
              Profile
            </button>
            <button className="w-full py-2 px-4 border hover:bg-teal-700 transition-all border-gray-300 rounded-md text-center">
              My store
            </button>
            <button className="w-full py-2 px-4 border hover:bg-teal-700 transition-all border-gray-300 rounded-md text-center">
              Earnings
            </button>
            <button className="w-full py-2 px-4 border hover:bg-teal-700 transition-all border-gray-300 rounded-md text-center">
              Address
            </button>
            <button className="w-full py-2 px-4 bg-teal-700 text-white rounded-md text-center">
              Logout
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3 bg-gray-50 p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Creator Store</h2>
          <div className="mb-6">
            {/* Banner Image */}
            <div className="relative overflow-hidden w-full h-24 md:h-20">
              <Image
                src={Banner}
                alt="Samira Hadid Banner"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            {/* Form Sections */}
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Link Social Media Account
              </h3>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-3">
                <input
                  type="text"
                  placeholder="Followers Count"
                  className="flex-1 p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Instagram ID"
                  className="flex-1 p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <input
                  type="text"
                  placeholder="Followers Count"
                  className="flex-1 p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Youtube ID"
                  className="flex-1 p-2 border rounded-md"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Claim Your Store URL
              </h3>
              <input
                type="text"
                placeholder="Username for store"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Select Genre</h3>
              <select className="w-full p-2 border rounded-md">
                <option>Enter Your Genre</option>
              </select>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Add Your Bank Details
              </h3>
              <input
                type="text"
                placeholder="XXXXXXXXXXXX"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">
                Add PAN card Number
              </h3>
              <input
                type="text"
                placeholder="XXXXXXXXXXXX"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">GST Invoicing</h3>
              <input
                type="text"
                placeholder="XXXXXXXXXXXX"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button className="w-full py-3 px-4 bg-teal-700 text-white rounded-md text-center text-lg">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
