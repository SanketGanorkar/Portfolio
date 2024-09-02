import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechStack from "./components/TechStack";
import DevStory from "./components/DevStory";
import Certifications from "./components/Certifications";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

import "./index.css";
function App() {
  const cld = new Cloudinary({ cloud: { cloudName: "djad4ajle" } });
  const img = cld
    .image("cld-sample-5")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/work" element={<TechStack />} />
            <Route path="/work/techstack" element={<TechStack />} />
            <Route path="/work/dev-story" element={<DevStory />} />
            <Route path="/work/certifications" element={<Certifications />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
      {/* <AdvancedImage cldImg={img}/> */}
    </>
  );
}

export default App;
