import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    img: "studyMate.png",
    title: "StudyMate",
    desc: "A modern productivity web app with tasks, notes, and a Pomodoro timer, built using React and Firebase with real-time sync.",
    link: "https://study-mate-b31fc.web.app/",
  },
  {
    id: 2,
    img: "weatherSnap.png",
    title: "Weather Snap",
    desc: "Weather Snap is a modern weather application that fetches live climate data using the OpenWeather API.",
    link: "https://weather-app-ten-nu-78.vercel.app/",
  },
  {
    id: 3,
    img: "gshock.png",
    title: "G-Shock Product",
    desc: "A modern product showcase website for the G-Shock DW-5600 watch with responsive UI.",
    link: "https://gshock-watch.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="w-full min-h-screen py-10 md:py-20">
      <div className="container mx-auto flex justify-center items-center h-full px-5">
        <div className="flex flex-col md:flex-row gap-10 max-w-[1366px] items-center justify-center">
          
          {/* IMAGE */}
          <div className="w-full md:w-[45%] flex justify-center " ref={ref}>
            <motion.img
  src={item.img}
  className="rounded-xl w-full h-auto object-cover"
  animate={{
    boxShadow: [
      "0 0 0px rgba(0,140,191,0)",
      "0 0 25px rgba(0,140,191,0.7)",
      "0 0 0px rgba(0,140,191,0)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
/>
          </div>

          {/* TEXT */}
          <motion.div
            className="w-full md:w-[55%] flex flex-col gap-6 text-center md:text-left"
            style={{ y }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {item.title}
            </h2>

            <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed">
              {item.desc}
            </p>

            <a href={item.link} target="_blank">
              <button className="bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition duration-200 cursor-pointer">
                See Demo
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Projects() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section id="projects" ref={ref} className="relative w-full  bg-linear-to-br from-black via-[#131313] to-black">
      {/* Progress Header */}
      <div className="sticky top-0 left-0 bg-black/30 backdrop-blur-sm py-6 text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] mt-5">
          Featured Works
        </h1>

        <motion.div
          style={{ scaleX }}
          className="h-1.5 w-full bg-linear-to-r from-[#b2eaff] via-[#38a8d0] to-[#b2eaff]"
        />
      </div>

      {/* PROJECT SECTIONS */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </section>
  );
}

export default Projects;
