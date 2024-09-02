import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "../assets/avatar.png";
import { useTheme } from "../context/ThemeContext.jsx";
import cld from "@/cloudConfig/cloudinaryConfig";
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
const Footer = () => {
  const img = cld
    .image('avatar_rcsadd')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));
  
  const { isDark } = useTheme();

  return (
    <div className={`h-[65px] flex items-center justify-between px-4 ${isDark ? "bg-[#171717]" : "bg-[#f4f4f4] text-black"}`}>
      {/* <img src={avatar} className="h-[45px]" alt="Avatar" /> */}
      <AdvancedImage cldImg = {img} className="h-[45px]" />
      <p className={`font-normal ${isDark ? "text-white" : "text-black"}`}>
        © 2024. All rights reserved
      </p>
      {/* Social media handles */}
      <div className="flex flex-row items-center">
        <a
          href="https://www.instagram.com/sanket.2053/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full h-9 w-9 flex items-center justify-center mr-1 ${isDark ? "bg-[#171717]" : "bg-[#e0e0e0]"}`}
        >
          <FaInstagramSquare
            color={isDark ? "white" : "black"}
            className="cursor-pointer"
            size={23}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sanket-web-developer-8a543b234/"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full h-9 w-9 flex items-center justify-center mr-1 ${isDark ? "bg-[#171717]" : "bg-[#e0e0e0]"}`}
        >
          <FaLinkedin
            color={isDark ? "white" : "black"}
            className="cursor-pointer"
            size={23}
          />
        </a>
        <a
          href="mailto:sanket200503@gmail.com" // Replace with your email address
          className={`rounded-full h-9 w-9 flex items-center justify-center mr-1 ${isDark ? "bg-[#171717]" : "bg-[#e0e0e0]"}`}
        >
          <MdEmail
            color={isDark ? "white" : "black"}
            className="cursor-pointer"
            size={23}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
