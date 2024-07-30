import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext.jsx"; // Import the useTheme hook
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const { isDark } = useTheme(); // Use the useTheme hook

  const openResume = () => {
    const resumeUrl = "/Sanket_resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.match(/^[a-zA-Z\s]*$/)) {
      errors.name = "Name should contain only letters and spaces";
    }
    if (!email.match(/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
      errors.email = "Invalid email address";
    }
    if (!message) {
      errors.message = "Message cannot be empty";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceId = 'service_l6snk49';
    const templateId = 'template_ciodf0d';
    const publicKey = 'DuSbBCyG3R1hNDXzG';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sanket Ganorkar',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!✅");
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((err) => {
        alert("Could not send the message!");
        console.log("Error sending the mail!", err);
      });
  };

  const bgColor = isDark ? "#171717" : "#f4f4f4"; // Background color
  const formBgColor = isDark ? "#1a202c" : "#ffffff"; // Form background color
  const borderColor = isDark ? "#2d3748" : "#e2e8f0"; // Input border color
  const focusBorderColor = isDark ? "#4299e1" : "#3182ce"; // Input focus border color
  const buttonBgColor = isDark ? "#4299e1" : "#3182ce"; // Button background color
  const buttonHoverBgColor = isDark ? "#3182ce" : "#2b6cb0"; // Button hover background color
  const textColor = isDark ? "text-white" : "text-black"; // Text color

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-4 ${textColor}`} style={{ backgroundColor: bgColor }}>
      <h1 className="font-bold font-[inter] mb-10 text-3xl text-center max-sm:mt-3 mt-8">
        Let's Get in Touch
      </h1>
      <div className="p-8 rounded-3xl shadow-lg w-full max-w-[400px]" style={{ backgroundColor: formBgColor }}>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="font-[inter] font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-2 rounded-md border"
              style={{ borderColor: borderColor, backgroundColor: formBgColor, color: textColor }}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="font-[inter] font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 rounded-md border"
              style={{ borderColor: borderColor, backgroundColor: formBgColor, color: textColor }}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="font-[inter] font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 p-2 h-20 rounded-md border"
              style={{ borderColor: borderColor, backgroundColor: formBgColor, color: textColor }}
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <Button
            type="submit"
            className="font-[inter] font-semibold py-2 rounded-md"
            style={{ backgroundColor: buttonBgColor, color: 'white' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverBgColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonBgColor}
          >
            Send Message
          </Button>
        </form>
      </div>
      <h2 className="font-bold font-[inter] text-3xl mt-10 mb-4 text-center">
        Click here to check my resume
      </h2>
      <Button
        className="font-[inter] font-semibold py-2 mb-10 rounded-md"
        style={{ backgroundColor: buttonBgColor, color: 'white' }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverBgColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonBgColor}
        onClick={openResume}
      >
        Resume
      </Button>
    </div>
  );
};

export default Contact;
