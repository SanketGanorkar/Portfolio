import { NavLink } from "react-router-dom";

const Work = ({ children }) => {
  const navLinks = [
    { name: "Tech Stack", path: "/work/techstack" },
    { name: "Developer Story", path: "/work/dev-story" },
    { name: "Certifications", path: "/work/certifications" },
  ];

  return (
    <div className="bg-[#171717] min-h-screen flex flex-col items-center px-4">
      <ul className="flex flex-row justify-center items-center space-x-6 mt-10 flex-wrap">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="mb-3 cursor-pointer list-none font-[inter] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] ml-3 px-4 py-2 rounded transition-colors duration-300 text-white focus:outline-none"
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
