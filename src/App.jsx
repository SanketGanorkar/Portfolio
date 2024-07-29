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
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
