import { tech } from "./techStack/data.js";
import Work from "./Work.jsx";
import { useTheme } from "../context/ThemeContext.jsx"; // Import ThemeContext

const TechStack = () => {
  const { isDark } = useTheme(); // Access theme mode

  // Define colors based on theme
  const bgColor = isDark ? "#1a202c" : "#ffffff";
  const cardBorderColor = isDark ? "#333b4a" : "#dcdcdc";
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";

  return (
    <Work>
      <div className={`flex flex-col justify-center items-center p-4 ${textColor}`}>
        <h1 className="font-bold text-3xl mb-2">Tech Stack</h1>
        <p className={`font-medium text-xl text-center ${subTextColor}`}>
          A list of my favorite tools and technologies that I use on a regular
          basis.
        </p>
        <div className="flex flex-wrap justify-center">
          {tech.map((item, index) => (
            <div
              key={index}
              className={`m-2 w-[240px] p-3 border-[1px] rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-start ${textColor}`}
              style={{ backgroundColor: bgColor, borderColor: cardBorderColor }}
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
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-semibold font-[inter]">{item.title}</h1>
                  <p className={`text-sm font-medium font-[inter] ${subTextColor}`}>
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
