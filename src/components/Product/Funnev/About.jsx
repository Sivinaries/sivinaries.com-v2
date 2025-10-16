/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { IoTicket } from "react-icons/io5";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const electricEffect = {
  animate: {
    textShadow: [
      "0px 0px 5px #FFA500", // orange
      "0px 0px 15px #FFA500",
      "0px 0px 25px #FF8C00", // dark orange
      "0px 0px 35px #FF7F50", // coral
      "0px 0px 45px #FF6A00", // strong orange
      "0px 0px 35px #FF7F50",
      "0px 0px 25px #FF8C00",
      "0px 0px 15px #FFA500",
      "0px 0px 5px #FFA500",
    ],
    opacity: [1, 0.85, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function About() {
  return (
    <div className="relative bg-black py-8 md:py-20 px-6 md:px-24">
      {/* Blob Background */}
      <motion.div
        className="absolute top-10 left-0 w-44 md:w-80 h-44 md:h-80 bg-cyan-400 opacity-60 blur-3xl rounded-full"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <div className="grid grid-cols-1 relative md:max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="space-y-4 md:space-y-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <h1 className="text-xl md:text-2xl font-semibold text-orange-500">
            Tentang Kami
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3"
            animate={electricEffect.animate}
          >
            <IoTicket className="text-orange-500" /> Kenalin Funnev
          </motion.h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <strong>Funnev</strong> adalah solusi lengkap untuk kebutuhan event
            Anda dari <strong>e-ticketing</strong>, sistem
            profesional, Semua dirancang untuk
            menciptakan pengalaman acara yang tak terlupakan.
          </p>

          <p className="text-xl md:text-2xl font-bold text-gray-300">
            Telah dipercaya oleh <span className="text-orange-500">50+</span> event
            organizer dan komunitas di berbagai kota.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Dibangun oleh tim <strong>Sivinaries</strong> dengan keahlian{" "}
            <strong>teknologi event</strong> dan
            <strong>full-stack development</strong>, Funnev hadir sebagai
            partner andal untuk setiap acara — dari konser, seminar, festival,
            hingga acara komunitas.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
