import { useState } from "react";
import tripwise from "../assets/tripwise.png";
import logoexpress from "../assets/logoexpress.png";
import rapiddine from "../assets/rapiddine.png";
import matadaan from "../assets/Matadaan.png";
import blogapp from "../assets/BlogApp.png";
import podstream from "../assets/podstream.png";
import { LuGithub } from "react-icons/lu";

const Projects = () => {
  const projects = [
    {
      img: tripwise,
      name: "Tripwise",
      link: "https://github.com/SanketGanorkar/Tripwise",
      tech: ["React", "Tailwind", "Firebase", "Shadcn UI", "Gemini AI"],
    },
    {
      img: logoexpress,
      name: "LogoExpress",
      link: "https://github.com/SanketGanorkar/LogoExpress",
      tech: ["React", "Tailwind"],
    },
    {
      img: matadaan,
      name: "Matadaan",
      link: "https://github.com/SanketGanorkar/Matdaan",
      tech: ["Nodejs", "Expressjs", "MongoDB", "JSON Web Tokens", "Rest API"],
    },
    {
      img: podstream,
      name: "PodStream",
      link: "https://github.com/SanketGanorkar/Podstream",
      tech: ["React", "Vanilla CSS"],
    },
    {
      img: rapiddine,
      name: "RapidDine",
      link: "https://github.com/SanketGanorkar/RapidDine",
      tech: ["React", "Vanilla CSS"],
    },
    {
      img: blogapp,
      name: "BlogRestAPI",
      link: "https://github.com/SanketGanorkar/BlogRestAPI",
      tech: ["Nodejs", "Expressjs", "MongoDB"],
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (img) => {
    setSelectedImage(img);
  };

  const handleClose = (e) => {
    if (e.target.id === "modal") {
      setSelectedImage(null);
    }
  };

  return (
    <div className="bg-[#171717] min-h-screen flex flex-col items-center relative p-4">
      <h1 className="text-3xl text-white font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="h-[350px] w-[300px] bg-[#1a202c] relative rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(project.img)}
          >
            <div className="h-[200px] w-full overflow-hidden">
              <img
                src={project.img}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1a202c] h-[140px]">
              <div className="flex items-center mb-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <LuGithub className="text-white mr-2 mt-1" />
                </a>
                <h1 className="text-white text-lg font-semibold">{project.name}</h1>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-[#2b4048] text-white px-2 py-1 rounded-md text-center font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          id="modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-opacity duration-300 opacity-100"
          onClick={handleClose}
        >
          <img
            src={selectedImage}
            className="w-11/12 md:w-1/2 h-auto max-h-[80vh] transform transition-transform duration-300 scale-100"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
