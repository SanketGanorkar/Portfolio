import google from "../assets/google.png";
import cisco from "../assets/cisco.png";
import sololearn from "../assets/sololearn.png";

import aws from "../assets/aws2.png";
import Work from "./Work.jsx";

const Certifications = () => {
  const openCertificate = (path) => {
    window.open(path, "_blank");
  };

  const certifications = [
    {
      logo: sololearn,
      title: "Introduction to Web Development HTML",
      company: "Sololearn",
      completed: "January 2022",
      credential: "https://www.sololearn.com/en/profile/25062702",
      certificate: "../../public/HTML.pdf",
    },
    {
      logo: sololearn,
      title: "Introduction to Programming - Python",
      company: "Sololearn",
      completed: "March 2022",
      credential: "https://www.sololearn.com/en/profile/25062702",
      certificate: "../../public/Python.pdf",
    },
    {
      logo: cisco,
      title: "CCNA Module - 1",
      company: "Cisco Networking Academy",
      completed: "May 2023",
      credential: "",
      certificate: "../../public/CCNA-1.pdf",
    },
    {
      logo: google,
      title: "Introduction to Generative AI",
      company: "Google",
      completed: "July 2023",
      credential: "https://www.cloudskillsboost.google/public_profiles/a5e0277d-f165-4994-90c6-6f3bb3d01e6c",
      certificate: "",
    },
    {
      logo: aws,
      title: "AWS Academy Cloud Foundations",
      company: "AWS",
      completed: "April 2024",
      credential: "https://www.credly.com/badges/e67e20c1-7a5d-4399-a1b2-a18b9d140ff6/",
      certificate: "../../public/AWS_Cloud_Foundations.pdf",
    },
  ];

  return (
    <Work>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1a202c] h-[400px] w-[300px] flex flex-col items-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-[150px] flex items-center justify-center mb-4">
              <img
                src={cert.logo}
                alt={cert.company}
                className="w-2/3 h-full object-contain transition-transform duration-300 hover:scale-110"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                  borderRadius: "8px",
                }}
              />
            </div>
            <h1 className="text-gray-400 mb-2 font-semibold text-xl">{cert.company}</h1>
            <h1 className="text-white font-semibold text-2xl text-center mb-2">
              {cert.title}
            </h1>
            <h2 className="text-white font-medium mb-2">
              Completed: {cert.completed}
            </h2>
            {cert.certificate && (
              <h2
                onClick={() => openCertificate(cert.certificate)}
                className="text-blue-400 font-normal text-[16px] cursor-pointer mb-2"
              >
                Show Certificate
              </h2>
            )}
            {cert.credential && (
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-normal text-[16px] cursor-pointer"
              >
                Show Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </Work>
  );
};

export default Certifications;
