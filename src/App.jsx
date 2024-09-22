// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home.jsx";
// import Blog from "./components/Blog.jsx";
// import Projects from "./components/Projects.jsx";
// import Contact from "./components/Contact.jsx";
// import TechStack from "./components/TechStack";
// import DevStory from "./components/DevStory";
// import Certifications from "./components/Certifications";
import Motion from "./components/motion.jsx";
import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/Navbar.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const TechStack = lazy(() => import("./components/TechStack.jsx"));
const DevStory = lazy(() => import("./components/DevStory.jsx"));
const Certifications = lazy(() => import("./components/Certifications.jsx"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Suspense fallback={<></>}>
            <Navbar />
          </Suspense>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path="/blogs"
              element={
                <Suspense fallback={<div>Blogs..loading</div>}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              exact
              path="/work"
              element={
                <Suspense fallback={<div>Loading Work...</div>}>
                  <TechStack />
                </Suspense>
              }
            />
            <Route
              path="/work/techstack"
              element={
                <Suspense fallback={<div>Loading TechStack...</div>}>
                  <TechStack />
                </Suspense>
              }
            />
            <Route
              path="/work/dev-story"
              element={
                <Suspense fallback={<div>Loading DevStory...</div>}>
                  <DevStory />
                </Suspense>
              }
            />
            <Route
              path="/work/certifications"
              element={
                <Suspense fallback={<div>Loading Certifications...</div>}>
                  <Certifications />
                </Suspense>
              }
            />

            <Route
              path="/projects"
              element={
                <Suspense fallback={<div>Loading Projects...</div>}>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading Contact...</div>}>
                  <Contact />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
      {/* <Suspense fallback={<div className="text-black font-extrabold">Aa raha hoon main.....</div>}>
        <Motion />
      </Suspense> */}
      {/* <AdvancedImage cldImg={img}/> */}
    </>
  );
}

export default App;
