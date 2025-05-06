import React from "react";

const SkillsSection = () => {
  return (
    <div
      id="skills"
      //   className=" bg-gradient-to-br from-transparent to-midnightpurple"
    >
      {/* Globe Background */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center bg-black">
          <video
            src="assets/globe.mp4"
            autoPlay
            muted
            loop
            className="w-[60%] h-[50%] object-contain top-0 rounded-xl transition-all duration-1000"
          />
        </div>
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 justify-center">
          <h1 className="font-bold w-full text-center md:text-7xl text-5xl z-20">
            Proficiencies
          </h1>
        </div>
      </div>

      {/* Skills Sections */}
      {[
        {
          title: "Programming Languages",
          icon: "assets/Images/code.png", // You can use an icon related to frontend development, like a browser or code icon
          description:
            "I have a strong command of multiple frontend technologies, including JavaScript, TypeScript, and HTML/CSS. JavaScript is my go-to language for building dynamic, interactive user interfaces, while TypeScript provides type safety, improving code quality and scalability in larger projects. I also have deep expertise in HTML and CSS, ensuring pixel-perfect layouts and responsive designs across various screen sizes. These technologies, paired with frameworks like React and Next.js, allow me to build modern, high-performance web applications.",
        },

        {
          title: "CSS Frameworks & Design Systems",
          icon: "assets/Images/CSS3.png",
          description:
            "I have extensive experience working with popular CSS frameworks such as Bootstrap, Tailwind CSS, Material UI, and others. These frameworks enable me to create responsive, visually appealing, and user-friendly interfaces. I leverage the power of utility-first design with Tailwind CSS, as well as component libraries like MUI, to rapidly build and scale applications with consistent design patterns.",
        },

        {
          title: "Frontend Development",
          icon: "assets/Images/nextjs.png",
          description:
            "For frontend development, I rely on React and Next.js. React’s component-based architecture and hooks enable me to create dynamic, responsive user interfaces. Next.js enhances development with features like server-side rendering (SSR), static site generation (SSG), and API routes. Together, they allow me to deliver fast, SEO-friendly, and scalable web applications with exceptional user experiences.",
        },
        {
          title: "API Integration & Development",
          icon: "assets/Images/Appwrite.png", // You can update with an icon related to API integration
          description:
            "I specialize in integrating various third-party APIs into web applications, ensuring seamless data flow between services. Whether it's RESTful or GraphQL APIs, I implement secure, reliable, and scalable integrations. My expertise includes authenticating, consuming, and processing data from external APIs, and transforming that data into usable formats for front-end or backend systems. I also focus on ensuring efficient error handling, rate-limiting, and maintaining smooth performance in high-volume scenarios.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="h-screen bg-custom-gradient w-full flex items-center justify-center sticky top-0 p-4 z-20"
        >
          <div className="w-full bg-black h-80 max-w-md flex items-start rounded-lg overflow-hidden">
            <div className="h-14 flex items-center justify-center pr-4">
              <img
                src={item.icon || ""}
                alt={item.title}
                className="!md:w-10 !md:h-10 !h-8 !w-8 object-cover rounded-md object-center"
              />
            </div>
            <div className="border-l-2 border-l-purple-400 flex-1 h-full">
              <h1 className="w-full text-start border-b-2 border-b-purple-400 min-h-14 flex items-center p-4 text-2xl">
                {item.title}
              </h1>
              <p className="w-full text-start p-4">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
