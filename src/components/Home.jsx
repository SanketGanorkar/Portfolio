import avatar from "../assets/avatar.png";
import { FaInstagram, FaLinkedin, FaGithub, FaRegFile } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
  return (
    // <div className="bg-[#171717] h-screen flex flex-col justify-center items-center">
    //   <div className="flex flex-row items-center gap-5">
    //     <div className="flex flex-col max-w-[600px]">
    //       <h2 className="text-gray-400 text-4xl font-bold">Hey! 👋🏼</h2>
    //       <h3 className="text-gray-400 text-4xl font-bold">
    //         I'm Sanket Ganorkar
    //       </h3>
    //       <p className="text-gray-400 font-semibold text-[22px]">
    //         A tech enthusiast who tries to search and learn new things every
    //         day. I am an ambition-driven, goal-oriented person who seeks
    //         opportunities in web and full-stack development as well as cloud
    //         computing, where I can hone my skills.
    //       </p>
    //       <h3 className="text-gray-400 text-4xl font-bold mt-12">
    //         <div className="min-h-[56px]">
    //           <span> {typeEffect}</span>
    //           <Cursor /> {/* Adds a blinking cursor effect to the end of the typewriter text */}
    //         </div>
    //       </h3>
          
    //     </div>
    //     <div>
    //       <img src={avatar} className="h-[365px] w-[250px] object-cover" />
    //     </div>
    //   </div>
    //   <div className="flex flex-row justify-center items-center gap-5 mt-10 ">
    //     <FaInstagram
    //       className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
    //       size={40}
    //       onClick={() => window.open('https://www.instagram.com/sanket.2053/', '_blank')}
    //     />
    //     <FaLinkedin
    //       className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
    //       size={40}
    //       onClick={() => window.open('https://www.linkedin.com/in/sanket-web-developer-8a543b234/', '_blank')}
    //     />
    //     <IoMail
    //       className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
    //       size={40}
    //       onClick={() => window.location.href = 'mailto:sanket200503@gmail.com'}
    //     />
    //     <FaRegFile
    //       className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
    //       size={40}
    //       onClick={openResume}
    //     />
    //     <FaGithub
    //       className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
    //       size={40}
    //       onClick={() => window.open('https://github.com/SanketGanorkar', '_blank')}
    //     />
    //   </div>
    // </div>
    <div className="bg-[#171717] h-screen flex flex-col justify-center items-center px-4 md:px-0 max-sm:pt-5">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col max-w-[600px] text-center md:text-left">
          <h2 className="text-gray-400 text-4xl font-bold">Hey! 👋🏼</h2>
          <h3 className="text-gray-400 text-4xl font-bold">
            I'm Sanket Ganorkar
          </h3>
          <p className="text-gray-400 font-semibold text-[22px] mt-4 md:mt-0">
            A tech enthusiast who tries to search and learn new things every
            day. I am an ambition-driven, goal-oriented person who seeks
            opportunities in web and full-stack development as well as cloud
            computing, where I can hone my skills.
          </p>
          <h3 className="text-gray-400 text-4xl font-bold mt-12">
            <div className="min-h-[56px]">
              <span> {typeEffect}</span>
              <Cursor /> {/* Adds a blinking cursor effect to the end of the typewriter text */}
            </div>
          </h3>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={avatar} className="h-[365px] w-[250px] object-cover mx-auto md:mx-0 max-sm:mt-2" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 mt-10">
        <FaInstagram
          className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
          size={40}
          onClick={() => window.open('https://www.instagram.com/sanket.2053/', '_blank')}
        />
        <FaLinkedin
          className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
          size={40}
          onClick={() => window.open('https://www.linkedin.com/in/sanket-web-developer-8a543b234/', '_blank')}
        />
        <IoMail
          className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
          size={40}
          onClick={() => window.location.href = 'mailto:sanket200503@gmail.com'}
        />
        <FaRegFile
          className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
          size={40}
          onClick={openResume}
        />
        <FaGithub
          className="text-white transform transition-transform duration-1200 ease-in-out hover:scale-125 cursor-pointer"
          size={40}
          onClick={() => window.open('https://github.com/SanketGanorkar', '_blank')}
        />
      </div>
    </div>
  );
};

export default Home;
