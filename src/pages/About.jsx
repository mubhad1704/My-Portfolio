import React from "react";
import { motion } from "framer-motion";
import me2 from "../assets/me2.png";

function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-10 w-[420px] h-[420px] opacity-10 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] opacity-30 animate-pulse ${c}`}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-14">
        {/* TOP SECTION */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Profile Image */}
          <motion.div
            className="
              relative w-[160px] h-[160px]
              md:w-[250px] md:h-[250px]
              rounded-2xl overflow-hidden
            "
            whileHover={{scale:1.02}}
            transition={{type:"spring", stiffness:200, damping:18}}
          >
            <img
              src={me2}
              alt="profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Name + Title + Description */}
          <div className="max-w-xl space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-center md:text-left font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca]">
              Mubaris Hadeef
            </h2>

            <p className="text-lg text-gray-300">Front-End Developer</p>

            <p className="text-gray-400 leading-relaxed text-[15px]">
              I craft clean, modern, and responsive web experiences with a strong focus on speed, usability, and thoughtful design. Growing further into the MERN-stack workflow, I continue creating scalable applications with React, HTML5, CSS, TailwindCSS, Bootstrap, and JavaScript that feel smooth, intuitive, and visually refined to bring ideas from concept into reality.
            </p>

            {/* INFO CARDS
            <div className="flex flex-wrap gap-3 mt-5">
              <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-white font-semibold">1+ years</p>
              </div>

              <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-sm text-gray-400">Specialty</p>
                <p className="text-white font-semibold">Full Stack</p>
              </div>

              <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="text-white font-semibold">Performance & UX</p>
              </div>
            </div> */}

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                View Projects
              </a>

              <a
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* ABOUT ME SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
        >
          <h3 className="text-3xl font-bold mb-4">About Me</h3>

          <p className="text-gray-400  leading-relaxed ">
           I am a developer with a passion for crafting clean, modern, and responsive web experiences that harmoniously balance speed, usability, and great design. In my growth to be a MERN stack developer, I am focused on scalable applications that work seamlessly, feel intuitive, and are pleasing to the eye. I enjoy turning ideas into smooth, impactful digital products while continuously improving my skills and keeping my curiosity open for new things.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
