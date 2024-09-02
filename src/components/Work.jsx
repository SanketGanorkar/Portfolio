import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

import { AdvancedImage } from '@cloudinary/react';
const Work = ({ children }) => {
  const { isDark } = useTheme(); // Access theme mode
  const navLinks = [
    { name: "Tech Stack", path: "/work/techstack" },
    { name: "Developer Story", path: "/work/dev-story" },
    { name: "Certifications", path: "/work/certifications" },
  ];

  const bgColor = isDark ? "#171717" : "#f4f4f4"; // Background color for the section
  const textColor = isDark ? "text-white" : "text-black"; // Text color
  const linkHoverColor = isDark ? "#4299e1" : "#3182ce"; // Link hover color

  return (
    <div className={`min-h-screen flex flex-col items-center px-4 ${textColor}`} style={{ backgroundColor: bgColor }}>
      <ul className="flex flex-row justify-center items-center space-x-6 mt-10 flex-wrap">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={`mb-3 cursor-pointer list-none font-[inter] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] ml-3 px-4 py-2 rounded transition-colors duration-300 ${textColor} focus:outline-none hover:text-${linkHoverColor}`}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      {children}
    </div>
  );
};

export default Work;
