import Work from "./Work.jsx";
import aws from "../assets/aws2.png";
import tripwise from "../assets/tripwise.png";
import cec from "../assets/Cec.png";
import armoriq from "../assets/armoriq.png";
import itsf from "../assets/Itsf.jpg";

const DevStory = () => {
  const volunteer = [
    {
      img: cec,
      name: "Competitive Examination Cell",
      role: ["Design Head", "Publicity Co-ordinator"],
      skills: ["Communication", "Leadership", "Event Management"],
    },
    {
      img: itsf,
      name: "Information Technocrats Student Forum",
      role: ["Joint Content Head"],
      skills: ["Design", "Writing", "Guest Management"],
    },
  ];

  return (
    <Work>
      <div className="bg-[#171717] min-h-screen flex flex-col items-start justify-start p-6 space-y-6">
        <div>
          <h1 className="text-white font-bold text-3xl mb-4">Professional Experience</h1>
          <div className="bg-[#1a202c] w-full max-w-2xl h-auto mt-5 rounded-xl border border-gray-400 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src={armoriq}
                  alt="ArmourIQ"
                  className="h-[100px] w-[100px] rounded-full border border-gray-400 mr-6 object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="text-white font-bold text-xl">ArmourIQ</h1>
                  <h1 className="text-gray-300 font-medium">Freelance Web Developer</h1>
                </div>
              </div>
              <h1 className="text-gray-400 font-medium text-right ml-[50px] mb-12">June 2024 - Present</h1>
            </div>
            <div className="flex flex-row mt-2 space-x-2">
              <span className="bg-[#3a404c] py-1 h-8 text-white w-20 text-center font-semibold rounded-lg shadow-md">
                React
              </span>
              <span className="bg-[#3a404c] py-1 h-8 text-white w-20 text-center font-semibold rounded-lg shadow-md">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold text-3xl mb-4">Volunteer Experience</h1>
          {volunteer.map((vol, index) => (
            <div
              key={index}
              className="bg-[#1a202c] w-full max-w-2xl h-auto mt-5 rounded-xl border border-gray-400 shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <img
                    src={vol.img}
                    alt={vol.name}
                    className="h-[100px] w-[100px] rounded-full border border-gray-400 mr-6 object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-white font-bold text-xl">{vol.name}</h1>
                    <div className="text-gray-300 font-medium">
                      {vol.role.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-2 space-x-2">
                {vol.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#3a404c] h-8 text-white text-center font-semibold rounded-lg shadow-md px-3 py-1"
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
          .bg-[#1a202c] {
            width: 100%;
            padding: 4px;
          }
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
