/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInSmall = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
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
    opacity: [1, 0.85, 1], // Subtle pulsing effect
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Ready() {
  const bgRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".bg-stagger div",
      opacity: [0, 1],
      scale: [0.8, 1],
      easing: "easeOutQuad",
      delay: anime.stagger(80, { start: 100 }),
      duration: 600,
    });

    anime({
      targets: arrowRef.current,
      translateY: [0, 10],
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
      duration: 800,
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-center flex flex-col items-center justify-center px-4">
      <motion.div
        className="absolute top-44 left-0 w-44 md:w-60 h-44 md:h-80 bg-cyan-400 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-44 right-0 w-44 md:w-80 h-44 md:h-80 bg-blue-500 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Background Grid */}
      <div ref={bgRef} className="absolute inset-0 grid grid-cols-2 grid-rows-3 bg-stagger blur-[3px] opacity-50">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-500 rounded-3xl"></div>
        ))}
      </div>
      <div className="mx-auto md:max-w-7xl space-y-6">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          animate={electricEffect.animate}
          className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg text-center"
        >
          "Ready to Start Your Own Project?"
        </motion.h1>

        <motion.p
          variants={fadeInSmall}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white md:max-w-2xl mx-auto"
        >
          Let’s build something amazing together with scalable, future-ready technology.
        </motion.p>

        <div
          className="px-6 py-3 text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl shadow-md transition-transform transform hover:scale-105 w-fit mx-auto"
        >
          <a href="/contact">
            <h1>Contact Us</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ready;
