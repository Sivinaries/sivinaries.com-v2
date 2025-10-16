import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoArrowRedoSharp, IoArrowDownOutline } from "react-icons/io5";

function Hero() {
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

    const arrowAnimation = anime({
      targets: arrowRef.current,
      translateY: [0, 10],
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
      duration: 800,
    });

    return () => {
      arrowAnimation.pause();
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
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
      opacity: [1, 0.8, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-screen bg-black text-center flex flex-col items-center justify-center px-4">
      {/* Blob Background */}
      <motion.div
        className="absolute top-44 left-0 w-44 md:w-60 h-44 md:h-80 bg-cyan-400 opacity-60 blur-3xl rounded-full"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-44 right-0 w-44 md:w-80 h-44 md:h-80 bg-blue-500 opacity-60 blur-3xl rounded-full"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      {/* Background Grid */}
      <div ref={bgRef} className="absolute inset-0 grid grid-cols-2 grid-rows-3 bg-stagger blur-[3px] opacity-50">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-500 rounded-3xl"></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center space-y-6 md:max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          animate={electricEffect.animate}
        >
          <TypeAnimation
            sequence={[
              '"Your Trusted Technology Partner"', 2000,
              '"Building Scalable Solutions"', 2000,
              '"Driving Innovation Forward"', 2000,
            ]}
            speed={60}
            repeat={Infinity}
            cursor={true}
          />
        </motion.h1>

        <p className="text-lg md:text-2xl text-white md:max-w-2xl">
          We design reliable, high-performance software tailored to your future-ready needs.
        </p>

        <div className="flex gap-4">
          <div
            className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl shadow-md transition-transform transform hover:scale-105">
            <a href="/contact">
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Get Started
              </h1>
            </a>
          </div>
          <div className="my-auto">
            <a href="/product">
              <div className="flex items-center text-lg md:text-xl text-white hover:text-gray-700 transition-all">
                View Our Partners
                <IoArrowRedoSharp className="ml-2 w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          ref={arrowRef}
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className="animate-bounce border rounded-full border-white py-4 flex items-center justify-center"
        >
          <IoArrowDownOutline className="w-14 h-14 md:w-20 md:h-20 text-gray-100" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
