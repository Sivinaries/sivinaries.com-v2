import { motion } from "framer-motion";
import beil from '../../assets/images/beil.png';
import funnev from '../../assets/images/funnev.png';
import { Link } from "react-router-dom";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const serviceItems = [
  {
    title: "Beil",
    description: [
      "Modern POS system with a simple interface and complete features.",
      "Supports multi-branch operations and real-time transaction monitoring.",
      "Flexible payment integrations like QRIS and e-wallets."
    ],
    icon: beil,
    link: "/product/beil"
  },
  {
    title: "Funnev",
    description: [
      "User-friendly and secure e-ticketing platform.",
      "Clean interface, perfect for all types of events.",
      "Fast purchase process, ideal for both large and small events."
    ],
    icon: funnev,
    link: "/product/funnev"
  },
];

function Our() {
  return (
    <div className="relative bg-black px-4 md:px-20 py-8 md:py-20 overflow-hidden">
      {/* Background Glow Circles */}
      <motion.div
        className="absolute top-24 right-0 w-52 h-52 md:w-72 md:h-72 bg-cyan-400 opacity-40 blur-3xl rounded-full"
        animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-0 w-52 h-52 md:w-72 md:h-72 bg-blue-500 opacity-40 blur-3xl rounded-full"
        animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              whileHover={{ scale: 1.015 }}
              className="bg-gray-300 rounded-3xl flex flex-col md:flex-row p-3 md:p-6 shadow-xl transition-transform duration-300 hover:shadow-2xl"
            >
              <div className="flex-shrink-0 flex items-center justify-center mb-0 md:mr-6">
                <img
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                <ul className="text-gray-600 text-sm md:text-base leading-relaxed list-disc list-inside space-y-1 mb-4">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <Link
                  to={item.link}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:scale-105 transition-transform w-fit"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Our;
