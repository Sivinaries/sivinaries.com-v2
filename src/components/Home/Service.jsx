import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import {
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
  FaShoppingCart,
  FaLayerGroup,
} from "react-icons/fa";

const serviceData = [
  {
    service: "Landing Page Development",
    icon: <FaLayerGroup className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "High-converting landing pages designed to capture attention, deliver clear messaging, and drive user actions. Optimized for speed, SEO, and marketing campaigns.",
  },
  {
    service: "Website Development",
    icon: <FaGlobe className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "Professional company websites built with clean design, responsive layouts, and scalable architecture — suitable for corporate profiles, portfolios, and content-driven sites.",
  },
  {
    service: "E-commerce Development",
    icon: <FaShoppingCart className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "Robust e-commerce solutions with secure payments, product management, and smooth checkout flows to help you sell online efficiently and scale your business.",
  },
  {
    service: "Web App Development",
    icon: <FaLaptopCode className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "Scalable web applications built using modern technologies like React, Laravel, and Node.js — ideal for dashboards, internal systems, and SaaS platforms.",
  },
  {
    service: "Mobile App Development",
    icon: <FaMobileAlt className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "Native and cross-platform mobile apps for iOS and Android, focused on performance, usability, and seamless user experience across devices.",
  },
  {
    service: "Custom App Development",
    icon: <FaCogs className="text-white text-xl md:text-3xl" />,
    bg: "bg-white",
    answer:
      "Tailor-made application solutions designed around your business workflows — from planning and development to long-term maintenance and optimization.",
  },
];

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

const Service = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black relative py-10 md:py-20 px-4 md:px-20">
      <motion.div
        className="absolute top-20 right-0 w-44 md:w-60 h-44 md:h-60 bg-blue-500 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="grid gap-4 md:gap-8 md:grid-cols-2 grid-cols-1 md:max-w-7xl mx-auto">
        <div className="space-y-4 md:space-y-8 my-auto">
          <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">
            Our Services
          </h1>
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
            animate={electricEffect.animate}
          >
            <GrTechnology className="text-cyan-400" />
            From Ideas to Digital Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
            Transform your business with innovative technology! We deliver digital solutions that accelerate growth, enhance productivity, and ensure a competitive edge!
          </p>
        </div>

        {/* Right Side (Service List) */}
        <div className="space-y-4">
          {serviceData.map((service, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              <button
                className="w-full flex justify-between items-center text-left py-3 text-lg md:text-xl font-semibold text-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center gap-3">
                  {service.icon}
                  {service.service}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="text-gray-100" />
                ) : (
                  <FiChevronDown className="text-gray-100" />
                )}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-300 text-lg md:text-xl mt-2">
                  {service.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
