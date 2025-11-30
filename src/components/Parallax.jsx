import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";

function Parallax() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      id="projects"
      className="relative w-full h-screen flex flex-col justify-center items-center bg-linear-to-b from-gray-950 via-gray-950 to-black overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute -top-32 -right-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>

      <motion.h1
        style={{ y: yText }}
        className="text-5xl text-blue-100 font-bold md:text-[100px] lg:text-[120px] text-center z-2"
      >
        PROJECTS
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-10"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-10 h-10 md:w-20 md:h-20 text-blue-200"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* bottom.png */}
      <motion.div className="absolute w-full h-full -bottom-32 z-10  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bottom.png')" }}
      ></motion.div>

      {/* stars.png */}
      <motion.div
        style={{ x: yBg, backgroundImage: "url('/stars.png')" }}
        className="absolute w-full h-full z-3 bg-cover bg-center bg-no-repeat"
        
      ></motion.div>
    </div>
  );
}

export default Parallax;
