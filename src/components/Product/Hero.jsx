/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import anime from "animejs";

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
      <div ref={bgRef} className="absolute inset-0 grid grid-cols-2 grid-rows-1 bg-stagger blur-[3px] opacity-50">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="border border-gray-500 rounded-md"></div>
        ))}
      </div>

      <div className="md:max-w-7xl w-full mx-auto h-[350px] md:h-[400px] overflow-hidden">
        <div className="my-24 md:my-44 mx-4 md:mx-0">
          <div className="md:flex h-full justify-between items-center space-y-2 md:space-y-0">
            <div className="w-2/3">
              <motion.h1
                animate={electricEffect.animate}
                className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg"
              >
                <TypeAnimation
                  sequence={['"Products"', 2000]}
                  speed={60}
                  repeat={Infinity}
                  cursor={true}
                />
              </motion.h1>
            </div>
            <div className="md:w-1/3 my-auto">
              <p className="text-lg md:text-2xl text-white">
                Innovating for the future—scalable, adaptive, and user-focused.
                We build solutions that transform industries and create impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
