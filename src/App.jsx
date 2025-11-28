import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";


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
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
