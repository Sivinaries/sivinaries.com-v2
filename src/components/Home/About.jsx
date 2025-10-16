/* eslint-disable react/no-unescaped-entities */
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from "react";
import { GrTechnology } from "react-icons/gr";
import { FaTrophy, FaProjectDiagram, FaUsers } from "react-icons/fa";
import img from "../../assets/images/about.jpeg";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const electricEffect = {
  animate: {
    textShadow: [
      "0px 0px 5px #00FFFF",
      "0px 0px 15px #00FFFF",
      "0px 0px 25px #00BFFF",
      "0px 0px 35px #1E90FF",
      "0px 0px 45px #007FFF",
      "0px 0px 35px #1E90FF",
      "0px 0px 25px #00BFFF",
      "0px 0px 15px #00FFFF",
      "0px 0px 5px #00FFFF",
    ],
    opacity: [1, 0.85, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function useCountAnimation(target) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, viewportSettings);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return { count, ref };
}

function About() {
  const { count: projects, ref: projectsRef } = useCountAnimation(50);
  const { count: clients, ref: clientsRef } = useCountAnimation(50);
  const { count: awards, ref: awardsRef } = useCountAnimation(2);

  return (
    <div className='relative bg-black py-12 md:py-32 px-6 md:px-24'>
      {/* Blob Background */}
      <motion.div
        className="absolute top-20 left-0 w-44 md:w-80 h-44 md:h-80 bg-cyan-400 opacity-60 blur-3xl rounded-full"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center relative md:max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.img
            src={img}
            alt="Sivinaries"
            className="md:w-3/4 rounded-md shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={viewportSettings}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-4 md:space-y-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">About Us</h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3"
            animate={electricEffect.animate}
          >
            <GrTechnology className="text-cyan-400" /> What is Sivinaries?
          </motion.h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <strong>Sivinaries</strong> is a software house focused on building innovative, scalable, and future-ready digital solutions. We help businesses grow through modern web and mobile applications.
          </p>

          <p className="text-xl md:text-2xl font-bold">
            We've successfully delivered <span className='text-cyan-300'>{projects}+</span> projects.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We specialize in <strong>full-stack development</strong>, cloud technologies, and advanced system integration—ensuring your business thrives in the digital era.
          </p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-3 text-center gap-3 md:gap-6 bg-gray-300 p-2 md:p-4 rounded-3xl"
          >
            <div ref={projectsRef} className="flex flex-col items-center">
              <FaProjectDiagram className="text-2xl md:text-5xl text-blue-500 mb-2" />
              <motion.h1 className="text-xl md:text-5xl font-semibold text-black">
                {projects}+
              </motion.h1>
              <span className="text-gray-900 text-base md:text-lg">Projects</span>
            </div>
            <div ref={clientsRef} className="flex flex-col items-center">
              <FaUsers className="text-2xl md:text-5xl text-green-500 mb-2" />
              <motion.h1 className="text-xl md:text-5xl font-semibold text-black">
                {clients}+
              </motion.h1>
              <span className="text-gray-900 text-base md:text-lg">Clients</span>
            </div>
            <div ref={awardsRef} className="flex flex-col items-center">
              <FaTrophy className="text-2xl md:text-5xl text-yellow-500 mb-2" />
              <motion.h1 className="text-xl md:text-5xl font-semibold text-black">
                {awards}+
              </motion.h1>
              <span className="text-gray-900 text-base md:text-lg">Experiences</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
