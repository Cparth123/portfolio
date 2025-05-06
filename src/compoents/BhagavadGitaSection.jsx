import React from "react";

const BhagavadGitaSection = () => {
  return (
    <div className="bg-gradient-to-b relative flex items-center w-full overflow-hidden justify-center h-screen  from-midnightpurple to-black rounded-md ">
      <div className="rounded-2xl relative h-full w-full  flex items-center justify-center">
      <div class="absolute video-shadow top-[-4px] left-0 w-full h-full bg-gradient-to-b from-midnightpurple md:from-black/5 via-black/30 to-black"></div>
        <video
          src="assets/krishna.mp4"
          className="h-full w-full rounded-md object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%]">
          <p className="flex flex-col text-center items-center text-2xl">
            <span>
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |
            </span>
            <span>
              मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||
            </span>
          </p>
          <p className="text-center text-xs opacity-60">
            You have a right to perform your duties, but you are not entitled to the fruits of your actions. Do not let the fruits of action be your motive, nor let your attachment be to inaction.
          </p>
          <p className="w-full text-end opacity-50">- Bhagavad Gita 2.47</p>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGitaSection;
