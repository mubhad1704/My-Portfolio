import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <>
      <div className="relative gradient text-white">
        <CustomCursor/>
        {/* <ParticlesBackground /> */}

        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
