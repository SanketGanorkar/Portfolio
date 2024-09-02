import { useTheme } from "../context/ThemeContext.jsx";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'djad4ajle' } });
  const img = cld
    .image('blog1_lw3wes')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(360));
  const { isDark } = useTheme();

  const blog = [
    {
      icon: <AdvancedImage cldImg={img} />,
      title: "Demystifying Computer Science",
      desc: "This page aims to make the terms associated with computer science and software engineering more understandable.",
      link: "https://medium.com/@sanket200503/demystifying-computer-science-simplifying-key-concepts-for-beginners-part-i-bd8fe9f4f982",
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center py-10 px-5 ${isDark ? "bg-[#171717]" : "bg-[#f4f4f4]"}`}>
      <h1 className={`text-${isDark ? "white" : "black"} text-3xl font-bold mb-8`}>
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blog.map((item, index) => (
          <a href={item.link} key={index} className="no-underline" target="_blank">
            <Card className={`h-auto w-[300px] ${isDark ? "bg-[#333]" : "bg-white"} shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="h-[200px] w-full object-cover rounded-t-lg">
                {item.icon}
              </div>
              <CardHeader className={`px-4 pt-4 ${isDark ? "text-white" : "text-black"}`}>
                <CardTitle className={`max-sm:mt-5 text-3xl font-semibold ${isDark ? "text-white" : "text-black"}`}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={`px-4 pb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                <p className="text-[18px]">{item.desc}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
