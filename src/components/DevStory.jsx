import Work from "./Work.jsx";
import cec from "../assets/Cec.png";
import armoriq from "../assets/armoriq.png";
import itsf from "../assets/Itsf.jpg";
import { useTheme } from "../context/ThemeContext.jsx"; // Import ThemeContext

const DevStory = () => {
  const { isDark } = useTheme(); // Access theme mode

  // Define colors based on theme
  const bgColor = isDark ? "#1a202c" : "#ffffff";
  const containerBgColor = isDark ? "#171717" : "#f9f9f9";
  const cardBorderColor = isDark ? "#333b4a" : "#dcdcdc";
  const textColor = isDark ? "text-white" : "text-black";
  const subTextColor = isDark ? "text-gray-300" : "text-gray-600";
  const tagBgColor = isDark ? "#3a404c" : "#e2e8f0";

  const volunteer = [
    {
      img: cec,
      name: "Competitive Examination Cell",
      role: ["Design Head", "Publicity Co-ordinator"],
      skills: ["Communication", "Leadership"],
    },
    {
      img: itsf,
      name: "Information Technocrats Student Forum",
      role: ["Joint Content Head"],
      skills: ["Design", "Writing", "Management"],
    },
  ];

  return (
    <Work>
      <div className={`bg-[${containerBgColor}] min-h-screen flex flex-col items-start justify-start p-6 space-y-6 ${textColor}`}>
        <div>
          <h1 className="font-bold text-3xl mb-4">Professional Experience</h1>
          <div
            className={`w-full max-w-2xl h-auto mt-5 rounded-xl border-[1px] shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 ${bgColor}`}
            style={{ borderColor: cardBorderColor }}
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src={armoriq}
                  alt="ArmourIQ"
                  className="h-[100px] w-[100px] rounded-full border border-gray-400 mr-6 object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">{`ArmourIQ`}</h1>
                  <h1 className={`font-medium ${subTextColor}`}>Freelance Web Developer</h1>
                </div>
              </div>
              <h1 className={`font-medium text-right ml-[50px] mb-12 ${subTextColor}`}>
                Present
              </h1>
            </div>
            <div className="flex flex-row mt-2 space-x-2">
              <span
                className={`py-1 h-8 ${subTextColor} w-20 text-center font-semibold rounded-lg shadow-md`}
                style={{ backgroundColor: tagBgColor }}
              >
                React
              </span>
              <span
                className={`py-1 h-8 ${subTextColor} w-20 text-center font-semibold rounded-lg shadow-md`}
                style={{ backgroundColor: tagBgColor }}
              >
                Tailwind
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-3xl mb-4">Volunteer Experience</h1>
          {volunteer.map((vol, index) => (
            <div
              key={index}
              className={`w-full max-w-2xl h-auto mt-5 rounded-xl border-[1px] shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 ${bgColor}`}
              style={{ borderColor: cardBorderColor }}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <img
                    src={vol.img}
                    alt={vol.name}
                    className="h-[100px] w-[100px] rounded-full border border-gray-400 mr-6 object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl">{vol.name}</h1>
                    <div className={`font-medium ${subTextColor}`}>
                      {vol.role.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-2 space-x-2">
                {vol.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`h-8 ${subTextColor} text-center font-semibold rounded-lg shadow-md px-3 py-1`}
                    style={{ backgroundColor: tagBgColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .h-[100px] {
            height: 80px;
          }
          .w-[100px] {
            width: 80px;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
          .text-lg {
            font-size: 1rem;
          }
          .p-6 {
            padding: 1rem;
          }
          .mb-4 {
            margin-bottom: 1rem;
          }
          .max-w-2xl {
            max-width: 100%;
          }
          .space-y-6 {
            gap: 1.5rem;
          }
        }
      `}</style>
    </Work>
  );
};

export default DevStory;
