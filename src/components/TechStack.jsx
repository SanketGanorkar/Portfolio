import { tech } from "./techStack/data.js";
// import Lottie from "lottie-web";
// import React from "../assets/lottie/react.json"
import Work from "./Work.jsx";
const TechStack = () => {
  return (
    <Work>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-gray-300 font-bold text-3xl mb-2">Tech Stack</h1>
        <p className="text-gray-300 font-medium text-xl text-center">
          A list of my favorite tools and technologies that I use on a regular
          basis.
        </p>
        <div className="flex flex-wrap justify-center">
          {tech.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a202c] m-2 w-[240px] p-3 border-[#333b4a] border-[1px] rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-start"
            >
              <div className="flex items-center mb-1">
                <div
                  className="w-[60px] h-[60px] rounded-full flex justify-center items-center"
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    src={item.icon}
                    className="w-[40px] h-[40px]"
                    alt={item.title}
                  />
                  {/* <Lottie loop={true} animationData={React} /> */}
                </div>
                <div className="ml-3">
                  <h1 className="text-white text-lg font-semibold font-[inter]">
                    {item.title}
                  </h1>
                  <p className="text-gray-300 text-sm font-medium font-[inter]">
                    {item.skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Work>
  );
};

export default TechStack;
