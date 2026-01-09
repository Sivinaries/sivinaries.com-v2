import { motion } from "framer-motion";
import { FaComments, FaPencilRuler, FaCode, FaRocket,  } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
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
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

const processData = [
  {
    title: "Requirement & Consultation",
    icon: <FaComments size={38} className="text-cyan-600" />,
    description:
      "We discuss your business goals, target users, and technical requirements to ensure the right website solution from the start.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPencilRuler size={38} className="text-cyan-600" />,
    description:
      "We design a clean, modern, and responsive interface focused on usability, branding, and user experience.",
  },
  {
    title: "Development",
    icon: <FaCode size={38} className="text-cyan-600" />,
    description:
      "We develop your website using clean code, modern frameworks, and performance-focused architecture.",
  },
  {
    title: "Launch & Optimization",
    icon: <FaRocket size={38} className="text-cyan-600" />,
    description:
      "We deploy, test, and optimize your website to ensure speed, security, and long-term stability.",
  },
];

function Process() {
  return (
    <div className="relative bg-black px-4 md:px-20 py-10 md:py-20 overflow-hidden">
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

      <div className="md:max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Section Header */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">
            How It Works
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
            animate={electricEffect.animate}
          >
            <GrTechnology className="text-cyan-400" />
            Website Development Process
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 md:max-w-3xl">
            A structured and transparent workflow to deliver high-quality,
            scalable, and reliable websites tailored to your business needs.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-10">
          {processData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-300 rounded-3xl p-4 md:p-6 shadow-lg transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-24 h-24 bg-white flex items-center justify-center rounded-full mb-4">
                {item.icon}
              </div>

              {/* Content */}
              <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
