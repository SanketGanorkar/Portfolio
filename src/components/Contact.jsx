import { Button } from "./ui/button";

const Contact = () => {
  const openResume = () => {
    const resumeUrl = "/Sanket_resume.pdf"; // Path to the resume file in the public directory
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="bg-[#171717] min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="font-bold text-white font-[inter] mb-10 text-3xl text-center max-sm:mt-3">
        Let's Get in Touch
      </h1>
      <div className="bg-[#1a202c] p-8 rounded-3xl shadow-lg w-full max-w-[400px]">
        <form className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="name"
              className="text-white font-[inter] font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-2 p-2 rounded-md border border-gray-600 bg-[#2d3748] text-white focus:outline-none focus:border-[#4299e1]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-white font-[inter] font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-2 p-2 rounded-md border border-gray-600 bg-[#2d3748] text-white focus:outline-none focus:border-[#4299e1]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white font-[inter] font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-2 p-2 h-20 rounded-md border border-gray-600 bg-[#2d3748] text-white focus:outline-none focus:border-[#4299e1]"
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-[#4299e1] text-white font-[inter] font-semibold py-2 rounded-md hover:bg-[#3182ce]"
          >
            Send Message
          </Button>
        </form>
      </div>
      <h2 className="font-bold text-white font-[inter] text-3xl mt-10 mb-4 text-center">
        Click here to check my resume
      </h2>
      <Button
        className="bg-[#4299e1] text-white font-[inter] font-semibold py-2 mb-10 rounded-md hover:bg-[#3182ce]"
        onClick={openResume}
      >
        Resume
      </Button>
    </div>
  );
};

export default Contact;