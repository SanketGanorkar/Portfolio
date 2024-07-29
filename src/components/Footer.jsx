import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Footer = () => {
  return (
    <div className="bg-[#171923] h-[65px]">
      <div className="flex flex-row justify-around gap-3">
        <img src={avatar} className="h-[45px] mt-2" alt="Avatar" />
        <p className="text-white mt-4 font-normal">
          © 2024. All rights reserved
        </p>
        {/*Social media handles*/}
        <div className="flex flex-row mt-3">
          <a
            href="https://www.instagram.com/sanket.2053/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#302f2f] rounded-full h-9 w-9 flex flex-row items-center justify-center mr-1"
          >
            <FaInstagramSquare color="white" className="cursor-pointer" size={23} />
          </a>
          <a
            href="https://www.linkedin.com/in/sanket-web-developer-8a543b234/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#302f2f] rounded-full h-9 w-9 flex flex-row items-center justify-center mr-1"
          >
            <FaLinkedin color="white" className="cursor-pointer" size={23} />
          </a>
          <a
            href="mailto:your-email@example.com" // Replace with your email address
            className="bg-[#302f2f] rounded-full h-9 w-9 flex flex-row items-center justify-center mr-1"
          >
            <MdEmail color="white" className="cursor-pointer" size={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
