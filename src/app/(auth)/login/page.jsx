import React from "react";
import Image from "next/image"; // Import Next.js Image component
import signingup from "../signup/signingup.svg"; // Adjust the path if needed
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#f4f4f9] px-4">
      {/* Left Image Section - Visible only on Desktop */}
      <div className="hidden md:block w-1/2 h-full relative">
        {" "}
        {/* Hidden on mobile */}
        <div
          className="relative"
          style={{
            left: "-50px", // Adjust this value to move the image left on desktop
            width: "450px", // Control image width
            height: "350px", // Control image height
            top: "4px",
          }}
        >
          <Image
            src={signingup}
            alt="login"
            layout="responsive"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Form Section - Visible on both Mobile and Desktop */}
      <div className="w-full md:w-1/2 flex justify-center mt-32 items-center">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg w-full md:w-[500px]">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black font-urbanist">
            Login
          </h1>

          {/* Email Input Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-bold mb-2 text-black font-urbanist"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg text-base font-urbanist focus:outline-none"
            />
          </div>

          {/* Password Input Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-bold mb-2 text-black font-urbanist"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg text-base font-urbanist focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button className="w-full p-3 bg-transparent border border-[#003c3c] text-[#003c3c] rounded-lg text-base font-urbanist font-bold hover:bg-[#003c3c] hover:text-white transition duration-300">
            Login
          </button>

          {/* Sign-up Link */}
          <div className="mt-6 flex justify-center">
            <span className="text-sm text-black font-urbanist">
              Don't have an account?
            </span>
            <Link
              href="/signup"
              className="ml-2 text-sm text-[#003c3c] font-bold font-urbanist"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
