/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import anime from "animejs";
import Beil from "../../../assets/images/beil.png";

function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    anime({
      targets: ".bg-stagger div",
      opacity: [0, 1],
      scale: [0.8, 1],
      easing: "easeOutQuad",
      delay: anime.stagger(80, { start: 100 }),
      duration: 600,
    });
  }, []);

  const electricEffect = {
    animate: {
      textShadow: [
        "0px 0px 5px #FF0000",
        "0px 0px 15px #FF0000",
        "0px 0px 25px #FF4500",
        "0px 0px 35px #FF6347",
        "0px 0px 45px #FF2400",
        "0px 0px 35px #FF6347",
        "0px 0px 25px #FF4500",
        "0px 0px 15px #FF0000",
        "0px 0px 5px #FF0000",
      ],
      opacity: [1, 0.8, 1], // Pulsing effect
      transition: {
        repeat: Infinity,
        duration: 2, // Slower for a premium feel
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="grid grid-cols-1 relative bg-black h-full">
      {/* Background Grid */}
      <div
        ref={bgRef}
        className="absolute inset-0 grid grid-cols-2 grid-rows-1 bg-stagger blur-[3px] opacity-50 pointer-events-none"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="border border-gray-500 rounded-md"></div>
        ))}
      </div>

      <div className="md:max-w-7xl w-full mx-auto h-[400px] md:h-[450px] overflow-hidden">
        <div className="my-24 md:my-44 mx-4 md:mx-0">
          <div className="md:flex h-full justify-between items-center space-y-6 md:space-y-0">
            <div className="md:w-1/2 w-full my-auto flex flex-col md:items-start items-center">
              <img className="w-32 md:w-56" src={Beil} alt="" />
            </div>
            <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center md:items-end">
              <div>
                <motion.h1
                  animate={electricEffect.animate}
                  className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg"
                >
                  <TypeAnimation
                    sequence={['"Beil"', 2000]}
                    speed={60}
                    repeat={Infinity}
                    cursor={true}
                  />
                </motion.h1>
              </div>
              <a
                href="https://beilpos.click/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center md:justify-end w-full md:w-1/3"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto text-white font-semibold py-2 px-8 rounded-full shadow-md hover:scale-105 transition-transform">
                  Visit Website
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
