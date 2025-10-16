/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

/* Motion Variants */
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const electricEffect = {
  animate: {
    textShadow: [
      "0px 0px 5px #00FFFF",
      "0px 0px 15px #00FFFF",
      "0px 0px 25px #00BFFF",
      "0px 0px 35px #1E90FF",
      "0px 0px 25px #00BFFF",
      "0px 0px 15px #00FFFF",
      "0px 0px 5px #00FFFF",
    ],
    opacity: [1, 0.9, 1], // Smooth pulsing effect
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const underlineEffect = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

function Quote() {
    return (
    <div className="relative w-full h-fit py-16 md:py-32 bg-black text-center flex flex-col items-center ">

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-white text-3xl md:text-5xl font-extrabold relative w-4/5 md:w-1/3"
      >
        <motion.span variants={electricEffect} animate="animate" className="inline-block">
        "The best way to predict the future is to invent it."
        </motion.span>
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={underlineEffect}
        className="h-1 w-32 md:w-1/4 bg-cyan-400 mt-2"
      />
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-gray-300 text-lg mt-3"
      >
– Alan Kay
      </motion.p>
    </div>
  );
}

export default Quote;
