import { FaInstagram, FaLinkedin, FaGithub, FaRegFile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import avatar from "../assets/avatar.png";
import { useTheme } from "../context/ThemeContext.jsx"; // Import the theme context

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Freelancer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 70,
  });
  
  const openResume = () => {
    const resumeUrl = "/Sanket_resume.pdf"; // Path to the resume file in the public directory
    window.open(resumeUrl, "_blank");
  };

  const { isDark } = useTheme(); // Get theme state

  return (
    <div className={`h-screen flex flex-col justify-center items-center px-4 md:px-0 max-sm:pt-5 ${isDark ? "bg-[#171717]" : "bg-[#f4f4f4]"}`}>
      <div className="flex flex-col md:flex-row items-center gap-5 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col max-w-[600px] text-center md:text-left max-sm:order-2">
          <h2 className={`text-${isDark ? "white" : "gray-800"} text-4xl font-bold`}>Hey! 👋🏼</h2>
          <h3 className={`text-${isDark ? "white" : "gray-800"} text-4xl font-bold`}>I'm Sanket Ganorkar</h3>
          <p className={`text-${isDark ? "white" : "gray-800"} font-semibold text-[22px] mt-4 md:mt-0`}>
            A tech enthusiast who tries to search and learn new things every day. I am an ambition-driven, goal-oriented person who seeks opportunities in web and full-stack development as well as cloud computing, where I can hone my skills.
          </p>
          <h3 className={`text-${isDark ? "white" : "gray-800"} text-4xl font-bold mt-12 max-sm:mt-6`}>
            <div className="min-h-[56px]">
              <span>{typeEffect}</span>
              <Cursor /> {/* Adds a blinking cursor effect to the end of the typewriter text */}
            </div>
          </h3>
        </div>
        <div className="mt-8 md:mt-0 max-sm:order-1 max-sm:mb-2 max-sm:mt-[55px]">
          <img src={avatar} className="h-[365px] w-[250px] object-cover mx-auto md:mx-0 max-sm:h-[248px] max-sm:w-[170px]" alt="Avatar" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 mt-10 max-sm:mt-3 max-sm:mb-[70px]">
        <FaInstagram
          className={`transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          size={40}
          onClick={() => window.open('https://www.instagram.com/sanket.2053/', '_blank')}
        />
        <FaLinkedin
          className={`transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          size={40}
          onClick={() => window.open('https://www.linkedin.com/in/sanket-web-developer-8a543b234/', '_blank')}
        />
        <IoMail
          className={`transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          size={40}
          onClick={() => window.location.href = 'mailto:sanket200503@gmail.com'}
        />
        <FaRegFile
          className={`transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          size={40}
          onClick={openResume}
        />
        <FaGithub
          className={`transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer ${isDark ? "text-white" : "text-black"}`}
          size={40}
          onClick={() => window.open('https://github.com/SanketGanorkar', '_blank')}
        />
      </div>
    </div>
  );
};

export default Home;
