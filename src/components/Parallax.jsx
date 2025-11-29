import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      className="relative w-full h-screen flex justify-center items-center bg-linear-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>
      <div className="absolute -top-32 -right-32 w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>

      <motion.h1
        style={{ y: yText }}
     
        className="text-5xl text-blue-100 font-bold md:text-[100px] lg:text-[120px] text-center z-2"
      >
        PROJECTS
      </motion.h1>

      {/* bottom.png */}
      <motion.div className="absolute w-full h-full -bottom-32 z-10 bg-[url('bottom.png')] bg-cover bg-center bg-no-repeat"></motion.div>

      {/* stars.png */}
      <motion.div
        style={{ x: yBg }}
        className="absolute w-full h-full z-3 bg-[url('stars.png')] bg-cover bg-center bg-no-repeat"
      ></motion.div>

      {/* settings.png */}
      <motion.div
        style={{ y: yBg }}
        whileInView={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-36 h-36 z-4 bg-[url('settings.png')] bg-contain bg-center bg-no-repeat -translate-y-40"
      ></motion.div>
    </div>
  );
}

export default Parallax;
