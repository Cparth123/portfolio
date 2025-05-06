import React from "react";
import CodeEditor from "./CodeEditor";

function LandingSection() {
  return (
    <div className="flex px-5 pt-10 md:pt-0 md:px-10 w-full overflow-hidden items-center flex-col ">
      <audio autoPlay loop className="hidden"></audio>
      {/* hero section */}
      <div className=" h-[500px] lg:h-svh  flex items-center w-full  relative">
        <div className="absolute right-0 bottom-[-5%] md:bottom-[50%]">
          <span class="md:ml-8 ml-2  text-sm  md:translate-y-2 opacity-40">
            Jai Shree Krishna, I'm
          </span>
          <h1
            className=" bg-gradient-to-r from-[#ff2764] to-[#00d0ff] bg-clip-text text-transparent text-7xl  md:text-[12rem] xl:text-[15rem] "
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            D<span>E</span>V
          </h1>
        </div>
        <div
          id="welcome"
          className="absolute bottom-[85%] z-40 md:bottom-20 left-[5%] flex flex-col -space-y-2 md:items-end justify-center md:left-20 lg:left-0"
        >
          <h1
            className="bg-gradient-to-tr from-white/60 to-[#ff2764] bg-clip-text text-transparent text-3xl md:text-5xl"
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            WELCOME
          </h1>
          <h1
            className="text-lg text-white/80 sm:text-xl"
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            TO MY
          </h1>
          <h1
            className="bg-gradient-to-r from-[#ff2764] to-[#00d0ff] bg-clip-text text-lg text-transparent sm:text-xl"
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            PORTFOLIO
          </h1>
        </div>

        <div className="w-full h-full absolute top-[85px]">
          <img
            className="w-[100%] md:!w-[60%] mx-auto float-animation"
            src={"assets/Images/hero3.png"}
            alt="im1"
          />
        </div>
      </div>
      {/*  role text */}
      <div className="w-full relative z-40 flex justify-center">
        <h1 className="title w-fit flex flex-col ">
          <span className="text-xl ml-2">I'm a</span>
          <span className="lg:text-[13rem] md:text-9xl text-7xl tracking-tight font-semibold -mt-2">
            Frontend
          </span>
          <span className="lg:text-4xl text-2xl text-end w-full -mt-3">
            Developer
          </span>
        </h1>
      </div>
      {/* infro */}
      <CodeEditor />
      <div class="w-full flex justify-end">
        <h1 class="title w-fit flex flex-col lg:mr-32">
          <span class="md:text-4xl text-2xl text-end w-full">Building</span>
          <span class="md:text-9xl text-2xl tracking-tight font-semibold -mt-4">
            seamless
          </span>
          <span class="text-md lg:text-xl  ml-2">
            Develop seamless user experiences with React.js, Next.js, and Redux.
          </span>
        </h1>
      </div>
      {/* tr... */}

      <div
        id="projects"
        className="flex flex-col items-center justify-center w-full bg-gradient-to-br from-transparent to-midnightpurple"
      >
        <div className="w-full h-[250px] md:h-96 flex items-center justify-center  bg-gradient-to-b from-midnightpurple to-transparent">
          <h1 className="text-xl lg:text-5xl text-center">
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundSize: "100% 200%",
                backgroundImage:
                  "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
                opacity: 1,
              }}
            >
              Transforming concepts into
            </span>
            <span
              className="text-xl lg:text-7xl"
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundSize: "100% 200%",
                backgroundImage:
                  "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
                opacity: 1,
              }}
            >
              {" "}
              functional,
            </span>
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundSize: "100% 200%",
                backgroundImage:
                  "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
                opacity: 1,
              }}
            >
              user-friendly
            </span>
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                backgroundSize: "120.03% 260.091%",
                backgroundImage:
                  "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
                opacity: 1,
              }}
            >
              {" "}
              Applications
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
