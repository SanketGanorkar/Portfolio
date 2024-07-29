import { useState } from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Sun, Moon } from "lucide-react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import pfp from "../assets/pfp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState({
    mode: "Light mode",
    icon: <Sun className="text-black" />,
    buttonColor: "bg-white text-black",
  });

  const toggleMode = () => {
    setMode((prevMode) => ({
      mode: prevMode.mode === "Light mode" ? "Dark mode" : "Light mode",
      icon: prevMode.mode === "Light mode" ? <Moon className="text-white" /> : <Sun className="text-black" />,
      buttonColor: prevMode.mode === "Light mode" ? "bg-black text-white" : "bg-white text-black",
    }));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={`bg-[#171717] pt-3 px-4 transition-colors duration-500 ${mode.mode === "Light mode" ? "bg-[#edf2f7]" : "bg-[#171717]"}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center mt-2 ml-2 md:mt-3 mb-2 md:ml-7">
          <img src={pfp} className="h-12 mb-1 w-12" alt="Profile" />
          <div className="flex flex-row items-center mt-2 ml-2">
            <h2 className={`text-${mode.mode === "Light mode" ? "black" : "white"} font-[inter] font-semibold text-[20px] mb-3`}>
              Sanket
            </h2>
            <IoCheckmarkCircleSharp color="cyan" className="ml-1 mb-3" size={20} />
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <div
            className={`cursor-pointer mr-2 ${mode.mode === "Light mode" ? "text-black" : "text-white"}`}
            onClick={toggleMode}
          >
            {mode.icon}
          </div>
          <a
            href="https://github.com/your-username" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:bg-[#302f2f] hover:rounded-sm h-8 w-8 flex items-center justify-center mr-2 ${mode.mode === "Light mode" ? "text-black" : "text-white"}`}
          >
            <FaGithub className={`cursor-pointer ${mode.mode === "Light mode" ? "text-black" : "text-white"}`} size={20} />
          </a>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <ul className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 md:mt-3 mb-2 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`cursor-pointer list-none ${mode.mode === "Light mode" ? "text-black" : "text-white"} font-[inter] font-semibold text-[20px] ml-3 transform transition-transform duration-200 ease-in-out hover:scale-110`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <div className="hidden md:flex flex-row md:mt-3 mb-2 mr-[40px] items-center space-x-3">
          <div
            className={`cursor-pointer ${mode.mode === "Light mode" ? "text-black" : "text-white"}`}
            onClick={toggleMode}
          >
            {mode.icon}
          </div>
          <a
            href="https://github.com/your-username" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:bg-[#302f2f] hover:rounded-sm h-8 w-8 flex items-center justify-center ${mode.mode === "Light mode" ? "text-black" : "text-white"}`}
          >
            <FaGithub className={`cursor-pointer ${mode.mode === "Light mode" ? "text-black" : "text-white"}`} size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
