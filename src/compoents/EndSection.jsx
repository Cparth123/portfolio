import React from "react";

function EndSection() {
  return (
    <div className=" bg-gradient-to-b relative h-screen w-full overflow-hidden from-black via-midnightpurple/30 to-black p-4 ">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
        <h1 className="sm:text-7xl text-6xl text-center w-full">
          The End Of The Beginning
        </h1>
      </div>
      <div className="h-10 w-full left-0 bg-gradient-to-b from-transparent to-black absolute bottom-0 z-20"></div>
      <img
        src="assets/Images/hero5.png"
        className="!h-96 w-fit object-fill bottom-0 absolute left-1/2 -translate-x-1/2 z-10"
        alt=""
      />
    </div>
  );
}

export default EndSection;
