// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
//   { name: "React", icon: <FaReact className="text-cyan-300" /> },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative min-h-screen w-full bg-black text-white py-24 px-6 overflow-hidden"
//     >
//       {/* BACKGROUND PARTICLES */}
//       <div className="pointer-events-none absolute inset-0 opacity-40">
//         <div className="absolute w-96 h-96 bg-[#008cbf] blur-[180px] rounded-full left-[-100px] top-10"></div>
//         <div className="absolute w-[450px] h-[450px] bg-[#64bedf] blur-[200px] rounded-full right-[-150px] bottom-10"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl font-extrabold mb-20 bg-clip-text text-transparent bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca]"
//         >
//          My Skills
//         </motion.h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8, y: 30 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.12 }}
//               viewport={{ once: true }}
//             >
//               <Tilt glareEnable glareMaxOpacity={0.35} tiltMaxAngleX={20} tiltMaxAngleY={20}>
//                 <div
//                   className="relative group p-0.5 rounded-2xl bg-linear-to-br from-[#64bedf] via-[#008cbf] to-[#1b6dca] shadow-[0_0_30px_rgba(0,140,191,0.4)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(0,140,191,0.8)]"
//                 >
//                   {/* Glass Inner Card */}
//                   <div className="rounded-2xl bg-black/60 backdrop-blur-xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">

//                     {/* Floating Glow Orb */}
//                     <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-linear-to-br from-[#008cbf] to-[#1b6dca] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all"></div>

//                     <div className="text-6xl mb-4 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
//                       {skill.icon}
//                     </div>

//                     <h3 className="text-xl font-semibold tracking-wide">{skill.name}</h3>
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion, useMotionValue } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaJsSquare />, name: "Javascript" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
  ];

  const repeated = [...skills, ...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);
    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if(touchY.current === null) return;
      const delta = e.touches[0].clientY -touchY.current;
      setDir(delta>0?1:-1);
      touchY.current = e.touches[0].clientY

    }
    window.addEventListener('wheel', onWheel, {passive :true})
    window.addEventListener('touchstart', onTouchStart, {passive :true})
    window.addEventListener('touchmove', onTouchMove, {passive :true})

    return ()=>{
      window.addEventListener('wheel', onWheel)
      window.addEventListener('touchstart', onTouchStart)
      window.addEventListener('touchmove', onTouchMove)
    }
  },[active]);


  useEffect(()=>{
    let id;
    let last = performance.now();
    const SPEED = 80;

    const tick = (now) =>{
      const dt = ( now - last)/1000;
      last = now;
      let next = x.get() + SPEED*dir*dt
      const loop = trackRef.current?.scrollWidth/2 || 0;

      if(loop){
        if(next <= -loop) next += loop;
        if(next >= 0) next -= loop

      }
      x.set(next)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(id);
  },[dir,x]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#7acae8] to-[#64bedf] opacity-20 blur-[120px] animate-pulse" />

        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#7acae8] to-[#64bedf] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <motion.h2
        className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#64bedf] via-[#008cbf] to-[#1b6dca] z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 2, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        My Skills
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
        
          ref={trackRef}
          className="flex mt-10 gap-10 text-6xl md:text-8xl text-[#008cbf] "
          style={{x, whiteSpace: "nowrap", willChange:"transform"}}
        >
          {repeated.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 min-w-[60px] md:min-w-[150px]"
              aria-label={s.name}
              title={s.name}
            >
              <span className="hover:scale-125 transition-transform duration-300">
                {s.icon}
              </span>
              <p className="text-sm">{s.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
