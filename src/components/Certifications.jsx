import Work from "./Work.jsx";
import google from "../assets/google.png";
import cisco from "../assets/cisco.png";
import sololearn from "../assets/sololearn.png";
import aws from "../assets/aws2.png";
import { useTheme } from "../context/ThemeContext.jsx"; // Import ThemeContext

const Certifications = () => {
  const { isDark } = useTheme(); // Access theme mode

  // Define colors based on theme
  const cardBgColor = isDark ? "#1a202c" : "#ffffff";
  const cardTextColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const cardShadowColor = isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)";
  const borderColor = isDark ? "#333b4a" : "#dcdcdc";

  const certifications = [
    {
      logo: sololearn,
      title: "Introduction to Web Development HTML",
      company: "Sololearn",
      completed: "January 2022",
      credential: "https://www.sololearn.com/en/profile/25062702",
      certificate: "../../public/html.pdf",
    },
    {
      logo: sololearn,
      title: "Introduction to Programming - Python",
      company: "Sololearn",
      completed: "March 2022",
      credential: "https://www.sololearn.com/en/profile/25062702",
      certificate: "../../public/python.pdf",
    },
    {
      logo: cisco,
      title: "CCNA Module - 1",
      company: "Cisco Networking Academy",
      completed: "May 2023",
      credential: "",
      certificate: "../../public/CCNA_1.pdf",
    },
    {
      logo: google,
      title: "Introduction to Generative AI",
      company: "Google",
      completed: "July 2023",
      credential:
        "https://www.cloudskillsboost.google/public_profiles/a5e0277d-f165-4994-90c6-6f3bb3d01e6c",
      certificate: "",
    },
    {
      logo: aws,
      title: "AWS Academy Cloud Foundations",
      company: "AWS",
      completed: "April 2024",
      credential:
        "https://www.credly.com/badges/e67e20c1-7a5d-4399-a1b2-a18b9d140ff6/",
      certificate: "../../public/AWS_Cloud.pdf",
    },
  ];

  const openCertificate = (path) => {
    window.open(path, "_blank");
  };

  return (
    <Work>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`bg-[${cardBgColor}] h-[400px] w-[300px] flex flex-col items-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}
            style={{
              boxShadow: `0 4px 15px ${cardShadowColor}`,
              borderColor: borderColor,
            }}
          >
            <div className="w-full h-[150px] flex items-center justify-center mb-4">
              <img
                src={cert.logo}
                alt={cert.company}
                className="w-2/3 h-full object-contain transition-transform duration-300 hover:scale-110"
                style={{
                  boxShadow: `0 4px 15px ${cardShadowColor}`,
                  borderRadius: "8px",
                }}
              />
            </div>
            <h1 className={`mb-2 font-semibold text-xl ${subTextColor}`}>
              {cert.company}
            </h1>
            <h1
              className={`font-semibold text-2xl text-center mb-2 ${cardTextColor}`}
            >
              {cert.title}
            </h1>
            <h2 className={`font-medium mb-2 ${cardTextColor}`}>
              Completed: {cert.completed}
            </h2>
            {cert.certificate && (
              <h2
                onClick={() => openCertificate(cert.certificate)}
                className={`cursor-pointer mb-2 ${subTextColor}`}
              >
                Show Certificate
              </h2>
            )}
            {cert.credential && (
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-400 font-normal text-[16px] cursor-pointer ${subTextColor}`}
              >
                Show Credential
              </a>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .h-[400px] {
            height: auto;
          }
          .w-[300px] {
            width: 100%;
          }
        }
      `}</style>
    </Work>
  );
};

export default Certifications;
