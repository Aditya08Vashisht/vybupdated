import React from "react";

const VYBStoreHero = () => {
  return (
    <div className="w-full">
      {/* Desktop video */}
      <video
        src="/images/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto mt-28 object-cover hidden md:block"
      />
      {/* Mobile video */}
      <video
        src="/images/mobilevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[824px] h-[924px] ml-[27rem] mt-[7rem] object-cover md:hidden"
      />
    </div>
  );
};

export default VYBStoreHero;
