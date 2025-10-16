/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaCashRegister } from "react-icons/fa";

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
          <h1 className="text-xl md:text-2xl font-semibold text-red-800">
            Tentang Kami
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3"
            animate={electricEffect.animate}
          >
            <FaCashRegister className="text-red-800" /> Kenalin Beil POS
          </motion.h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            <strong>Beil POS</strong> adalah sistem kasir modern yang dirancang
            untuk menyederhanakan operasional bisnis Anda. Dari pengelolaan
            stok, transaksi cepat, hingga laporan penjualan otomatis—semua dalam
            satu aplikasi yang mudah digunakan.
          </p>

          <p className="text-xl md:text-2xl font-bold text-gray-300">
            Dipercaya oleh <span className="text-red-800">50+</span> bisnis dari
            berbagai sektor.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Dikembangkan oleh <strong>Sivinaries</strong>, kami memadukan
            teknologi terkini dengan pendekatan{" "}
            <strong>full-stack development</strong> untuk memberikan solusi yang
            tangguh, cepat, dan dapat disesuaikan sesuai kebutuhan bisnis Anda.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
