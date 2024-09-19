"use client";

import React, { useRef, useState, useEffect } from "react";

const BackEnd = () => {
  const [influencerType, setInfluencerType] = useState("");
  const [followers, setFollowers] = useState(500000);
  const [products, setProducts] = useState(25);
  const [monthlyEarning, setMonthlyEarning] = useState(0);
  const [yearlyEarning, setYearlyEarning] = useState(0);

  const sliderRef = useRef(null);
  const productSliderRef = useRef(null);
  const isDraggingFollowers = useRef(false);
  const isDraggingProducts = useRef(false);

  const calculateEarnings = () => {
    let baseEarning = 0;
    const followersIn10K = Math.floor(followers / 10000);
    if (followersIn10K > 0) {
      baseEarning = followersIn10K * 1000;
      setMonthlyEarning(baseEarning + (products - 1) * 1000);
    } else {
      setMonthlyEarning(0);
    }
    setYearlyEarning(monthlyEarning * 12);
  };

  useEffect(() => {
    calculateEarnings();
  }, [followers, products]);

  const handleFollowersDrag = (event) => {
    event.preventDefault();
    if (!isDraggingFollowers.current) return;

    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    const newValue = Math.min(
      Math.max(
        1,
        Math.round(((clientX - rect.left) / rect.width) * 999999 + 1)
      ),
      1000000
    );
    setFollowers(newValue);
  };

  const handleProductsDrag = (event) => {
    event.preventDefault();
    if (!isDraggingProducts.current) return;

    const slider = productSliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    const newValue = Math.min(
      Math.max(1, Math.round(((clientX - rect.left) / rect.width) * 99 + 1)),
      100
    );
    setProducts(newValue);
  };

  const startDragFollowers = () => {
    isDraggingFollowers.current = true;
    document.addEventListener("mousemove", handleFollowersDrag);
    document.addEventListener("mouseup", stopFollowersDrag);
    document.addEventListener("touchmove", handleFollowersDrag);
    document.addEventListener("touchend", stopFollowersDrag);
  };

  const startDragProducts = () => {
    isDraggingProducts.current = true;
    document.addEventListener("mousemove", handleProductsDrag);
    document.addEventListener("mouseup", stopProductsDrag);
    document.addEventListener("touchmove", handleProductsDrag);
    document.addEventListener("touchend", stopProductsDrag);
  };

  const stopFollowersDrag = () => {
    isDraggingFollowers.current = false;
    document.removeEventListener("mousemove", handleFollowersDrag);
    document.removeEventListener("mouseup", stopFollowersDrag);
    document.removeEventListener("touchmove", handleFollowersDrag);
    document.removeEventListener("touchend", stopFollowersDrag);
  };

  const stopProductsDrag = () => {
    isDraggingProducts.current = false;
    document.removeEventListener("mousemove", handleProductsDrag);
    document.removeEventListener("mouseup", stopProductsDrag);
    document.removeEventListener("touchmove", handleProductsDrag);
    document.removeEventListener("touchend", stopProductsDrag);
  };

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    } else {
      return value.toString();
    }
  };

  return (
    <div className="relative bg-[#E5F0F1] h-auto p-4 md:p-6 mt-16 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-4xl ml-[24rem] md:ml-0 md:text-2xl font-bold mb-6 text-center md:text-left">
            ESTIMATE EARNING POTENTIAL
          </h1>
          <div className="mb-6">
            <label className="mb-2 text-2xl block text-center md:text-left">
              What kind of influencer are you?
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded text-sm md:text-base"
              value={influencerType}
              onChange={(e) => setInfluencerType(e.target.value)}
            >
              <option value="" disabled>
                Select influencer type
              </option>
              <option value="social-media">Social Media</option>
              <option value="marketing">Marketing</option>
              <option value="all-in-one">All In One</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="mb-2 ml-4 text-2xl block text-center md:text-left">
              How many followers do you have?
            </label>
            <div
              ref={sliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={startDragFollowers}
              onTouchStart={startDragFollowers}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((followers - 1) / 999999) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((followers - 1) / 999999) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full text-sm md:text-base">
              {formatValue(followers)}
            </div>
          </div>

          <div>
            <label className="mb-2 ml-20 text-2xl block text-center md:text-left">
              How many products do you list monthly?
            </label>
            <div
              ref={productSliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={startDragProducts}
              onTouchStart={startDragProducts}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((products - 1) / 99) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((products - 1) / 99) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full text-sm md:text-base">
              {products}
            </div>
          </div>
        </div>

        <div className="flex-1 md:ml-10 flex flex-col justify-center items-center md:items-end">
          <div className="text-center mb-6 md:text-left">
            <div className="text-lg ml-64 text-2x1 font-semibold">
              Monthly Earning
            </div>
            <div className="text-xl ml-56 md:text-2xl font-bold">
              ₹{monthlyEarning.toLocaleString()}
            </div>
          </div>
          <div className="text-center text-2x1 ml-60 md:text-left">
            <div className="text-lg font-semibold">Yearly Earning</div>
            <div className="text-xl md:text-2xl font-bold">
              ₹{yearlyEarning.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-6 ml-56 md:px-8 py-2 md:py-3 bg-dark text-white rounded-full text-sm md:text-lg font-semibold">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BackEnd;
