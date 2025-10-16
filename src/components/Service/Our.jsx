import { motion } from "framer-motion";
import { FaGlobe, FaLaptopCode, FaMobileAlt, FaCogs } from "react-icons/fa";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const serviceData = [
  {
    service: "Landing Page Development",
    icon: <FaGlobe size={38} className="text-cyan-600" />,
    bg: "bg-white",
    answer:
      "We design engaging, responsive landing pages focused on conversion. Each page is crafted to strengthen your brand identity and create a strong first impression.",
  },
  {
    service: "Web App Development",
    icon: <FaLaptopCode size={38} className="text-cyan-600" />,
    bg: "bg-white",
    answer:
      "We build scalable and fast web applications using technologies like React, Laravel, and Node.js — ready to support your business systems.",
  },
  {
    service: "Mobile App Development",
    icon: <FaMobileAlt size={38} className="text-cyan-600" />,
    bg: "bg-white",
    answer:
      "We develop native and hybrid mobile apps (iOS & Android) that are intuitive, modern, and easy to manage with an agile approach.",
  },
  {
    service: "Custom App Development",
    icon: <FaCogs size={38} className="text-cyan-600" />,
    bg: "bg-white",
    answer:
      "Custom application solutions tailored to your business needs — from discovery to maintenance. We act as your reliable technology partner.",
  },
];

function Our() {
  return (
    <div className="relative bg-black px-4 md:px-20 py-8 md:py-20 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute top-20 right-0 w-44 md:w-60 h-44 md:h-60 bg-cyan-400 opacity-40 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-44 md:w-60 h-44 md:h-60 bg-blue-500 opacity-40 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="md:max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {serviceData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-300 rounded-3xl p-3 md:p-6 shadow-l transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`w-24 h-24 mx-auto md:mx-0 ${item.bg} flex items-center justify-center rounded-full mb-4`}>
                {item.icon}
              </div>

              {/* Title + Description */}
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">
                {item.service}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Our;
