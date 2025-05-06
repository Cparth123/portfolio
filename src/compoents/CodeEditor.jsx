import React from "react";

function CodeEditor() {
  return (
    <div>
      <div className="py-20 w-full flex justify-center">
        <div id="codeeditor" className="w-fit h-fit relative">
          <img
            src="../../public/assets/images/ts.png"
            className="!w-14 !h-14 float-animation rotate-12 object-cover -top-10 absolute"
          />
          <img
            src="../../public/assets/images/nextjs.png"
            className="!w-14 !h-14 float-animation z-20 -rotate-12 object-cover -top-10 right-20 absolute"
          />
          <img
            src="../../public/assets/images/Redux.png"
            className="!w-14 !h-14 float-animation z-20 -rotate-12 object-cover -top-10 right-1 md:right-56 absolute"
          />

          <img
            src="../../public/assets/images/MongoDB.png"
            className="!w-14 !h-14 float-animation rotate-12 object-cover -bottom-10 z-20 right-12 absolute"
          />
          <img
            src="../../public/assets/images/react.png"
            className="!w-14 !h-14 float-animation z-20 right-1 -md:rotate-12 object-cover -bottom-12 md:right-60  absolute"
          />
          <img
            src="../../public/assets/images/Tailwind CSS.png"
            className="!w-14 !h-14 float-animation -rotate-12 object-cover -bottom-10 left-10 absolute"
          />
          <img
            src="../../public/assets/images/nextjs.png"
            className="w-32 h-32 -rotate-12 object-cover top-10 left-52 absolute"
          />

          <div className="w-fit text-xs md:text-lg mx-auto rounded-md overflow-hidden backdrop-blur-md">
            <div className="backdrop-blur-sm bg-[#ffffff11] rounded-md overflow-hidden">
              <div className="flex items-center space-x-2 px-4 py-2 bg-[#6969695a]">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-4 font-mono">
                {[
                  {
                    line: 1,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">develop</span>{" "}
                        <span className="text-gray-300">with</span>{" "}
                        <span className="text-green-400">React.js</span>{" "}
                        <span className="text-gray-300">and</span>{" "}
                        <span className="text-purple-400">Next.js</span>.
                      </>
                    ),
                  },
                  {
                    line: 2,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">write</span>{" "}
                        <span className="text-blue-300">TypeScript</span>{" "}
                        <span className="text-gray-300">for scalable apps</span>
                        .
                      </>
                    ),
                  },
                  {
                    line: 3,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">use</span>{" "}
                        <span className="text-red-400">Redux</span>{" "}
                        <span className="text-gray-300">for</span>{" "}
                        <span className="text-gray-300">state</span>{" "}
                        <span className="text-gray-300">management</span>.
                      </>
                    ),
                  },
                  {
                    line: 4,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">handle</span>{" "}
                        <span className="text-yellow-400">API integration</span>{" "}
                        <span className="text-gray-300">with</span>{" "}
                        <span className="text-gray-300">Axios</span>{" "}
                        <span className="text-gray-300">or</span>{" "}
                        <span className="text-gray-300">fetch</span>.
                      </>
                    ),
                  },
                  {
                    line: 5,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">style</span>{" "}
                        <span className="text-gray-300">apps</span>{" "}
                        <span className="text-gray-300">using</span>{" "}
                        <span className="text-pink-400">Tailwind CSS</span>,{" "}
                        <span className="text-indigo-400">MUI</span>,{" "}
                        <span className="text-blue-400">Bootstrap</span>.
                      </>
                    ),
                  },
                  {
                    line: 6,
                    code: (
                      <>
                        <span className="text-gray-300">I</span>{" "}
                        <span className="text-gray-300">manage</span>{" "}
                        <span className="text-gray-300">projects</span>{" "}
                        <span className="text-pink-400">using</span>{" "}
                        <span className="text-indigo-400">GitHub</span> for{" "}
                        <span className="text-blue-400">version control</span>.
                      </>
                    ),
                  },
                ].map(({ line, code }) => (
                  <div className="flex" key={line}>
                    <span className="w-8 text-gray-500 select-none">
                      {line}
                    </span>
                    <pre className="flex-1 whitespace-pre-wrap">
                      <code>{code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
