import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen  w-full bg-gradient-to-b from-black via-midnightpurple/5 to-midnightpurple relative">
      <img
        src="assets/Images/hero4.png"
        className="!h-5/6 float-animation absolute object-contain left-1/2 md:left-1/3 translate-x-[-50%] bottom-20"
        alt=""
      />
      <div className="absolute -top-0 max-w-[100vw] flex flex-col gap-3 right-0 px-3 md:right-32">
        <h1 className="md:text-9xl text-8xl ml-8 inline-grid grid-cols-1 text-white">
          <span className="bg-gradient-to-b from-[#4eff36] to-black text-transparent bg-clip-text">
            12+
          </span>
          <span className="-translate-y-12 md:text-5xl text-4xl">
            Stars<span className="text-xl ml-1">on GitHub</span>
          </span>
        </h1>
        <h1 className="text-7xl ml-4 inline-grid grid-cols-1 text-white">
          <span className="bg-gradient-to-b from-[#4eff36] to-black text-transparent bg-clip-text">
            53+
          </span>
          <span className="-translate-y-6 text-2xl">
            Contributions<span className="text-sm ml-1">on GitHub</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
