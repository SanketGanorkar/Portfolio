// import { useState } from "react";
// import { IoCheckmarkCircleSharp } from "react-icons/io5";
// import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
// import pfp from "../assets/pfp.png";
// import { Link } from "react-router-dom";
// import CustomizedSwitches from "./ui/toggle";
// import { useTheme } from "../context/ThemeContext.jsx";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isDark, toggleTheme } = useTheme();

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

  
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Blog", path: "/blogs" },
//     { name: "Work", path: "/work" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <div className={`pt-3 px-4 nav ${isDark ? "" : "bg-[#f4f4f4]"} text-${isDark ? "primary-text-color" : "black"}`}>
//       <div className="flex justify-between items-center">
//         <div className="flex flex-row items-center mt-2 ml-2 md:mt-3 mb-2 md:ml-7">
//           <img src={pfp} className="h-12 mb-1 w-12" alt="Profile" />
//           <div className="flex flex-row items-center mt-2 ml-2">
//             <h2 className={`font-[inter] font-semibold text-[20px] mb-3 ${isDark ? "" : "text-black"}`}>
//               Sanket
//             </h2>
//             <IoCheckmarkCircleSharp color="cyan" className="ml-1 mb-3" size={20} />
//           </div>
//         </div>

//         <div className="flex items-center md:hidden">
//           <CustomizedSwitches toggleMode={toggleTheme} isDarkMode={isDark} />
//           <a
//             href="https://github.com/SanketGanorkar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`hover:rounded-sm h-8 w-8 flex items-center justify-center mr-2 ${isDark ? "text-white" : "text-black"}`}
//           >
//             <FaGithub size={20} />
//           </a>

//           <button onClick={toggleMenu} className={`text-${isDark ? "primary-text-color" : "black"}`}>
//             {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>

//         <ul
//           className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 md:mt-3 mb-2 ${
//             isMenuOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`cursor-pointer list-none font-[inter] font-semibold text-[20px] ml-3 transform transition-transform duration-200 ease-in-out hover:scale-110 ${isDark ? "text-white" : "text-black"}`}
//               onClick={closeMenu} // Close menu when a link is clicked
//             >
//               {link.name}
//             </Link>
//           ))}
//         </ul>

//         <div className="hidden md:flex flex-row md:mt-3 mb-2 mr-[40px] items-center space-x-3">
//           <CustomizedSwitches toggleMode={toggleTheme} isDarkMode={isDark} />
//           <a
//             href="https://github.com/SanketGanorkar"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`hover:rounded-sm h-8 w-8 flex items-center justify-center ${isDark ? "" : "text-black"}`}
//           >
//             <FaGithub size={20} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import pfp from "../assets/pfp.png";
import { Link } from "react-router-dom";
import CustomizedSwitches from "./ui/toggle";
import { useTheme } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`pt-3 px-4 nav ${isDark ? "" : "bg-[#f4f4f4]"} text-${isDark ? "primary-text-color" : "black"}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center mt-2 ml-2 md:mt-3 mb-2 md:ml-7">
          <img src={pfp} className="h-12 mb-1 w-12" alt="Profile" />
          <div className="flex flex-row items-center mt-2 ml-2">
            <h2 className={`font-[inter] font-semibold text-[20px] mb-3 ${isDark ? "" : "text-black"}`}>
              Sanket
            </h2>
            <IoCheckmarkCircleSharp color="cyan" className="ml-1 mb-3" size={20} />
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <CustomizedSwitches toggleMode={toggleTheme} isDarkMode={isDark} />
          <a
            href="https://github.com/SanketGanorkar"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:rounded-sm h-8 w-8 flex items-center justify-center mr-2 ${isDark ? "text-white" : "text-black"}`}
          >
            <FaGithub size={20} />
          </a>

          <button onClick={toggleMenu} className={`text-${isDark ? "primary-text-color" : "black"}`}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 md:mt-3 mb-2 md:block`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`cursor-pointer list-none font-[inter] font-semibold text-[20px] ml-3 transform transition-transform duration-200 ease-in-out hover:scale-110 ${isDark ? "text-white" : "text-black"}`}
              onClick={closeMenu} // Close menu when a link is clicked
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex flex-row md:mt-3 mb-2 mr-[40px] items-center space-x-3">
          <CustomizedSwitches toggleMode={toggleTheme} isDarkMode={isDark} />
          <a
            href="https://github.com/SanketGanorkar"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:rounded-sm h-8 w-8 flex items-center justify-center ${isDark ? "" : "text-black"}`}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;