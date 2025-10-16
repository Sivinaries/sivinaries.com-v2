import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaCashRegister } from "react-icons/fa";

const faqData = [
  {
    question: "Apa keunggulan layanan kami?",
    answer:
      "Kami menyediakan teknologi mutakhir dengan performa tinggi, sistem keamanan canggih, dan dukungan pelanggan yang siap membantu Anda kapan saja.",
  },
  {
    "question": "Bagaimana cara memulai?",
    "answer": "Hubungi kami di 'Contact Us', pilih layanan yang sesuai dengan kebutuhan Anda, dan tim kami akan membimbing Anda di setiap langkah untuk pengalaman terbaik."
  },
  {
    question: "Apakah tersedia layanan dukungan pelanggan?",
    answer:
      "Ya, kami menyediakan dukungan 24/7 melalui chat, email, dan telepon untuk memastikan Anda mendapatkan solusi dengan cepat dan tepat.",
  },
  {
    question: "Apakah bisa custom software sesuai kebutuhan bisnis saya?",
    answer:
      "Tentu! Kami menyediakan layanan pengembangan software kustom yang dapat disesuaikan dengan kebutuhan bisnis Anda, dari skala kecil hingga enterprise.",
  },
  {
    question: "Berapa lama proses pengembangan software?",
    answer:
      "Lama pengembangan tergantung pada kompleksitas proyek. Aplikasi sederhana bisa selesai dalam beberapa minggu, sementara proyek besar bisa memakan waktu beberapa bulan.",
  },
  {
    question: "Apakah ada garansi setelah proyek selesai?",
    answer:
      "Ya, kami memberikan garansi dan support setelah proyek selesai untuk memastikan software berjalan dengan baik dan bebas dari bug.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Kami menyediakan berbagai opsi pembayaran, termasuk pembayaran bertahap sesuai dengan milestone proyek yang telah disepakati.",
  },
];

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

function Faq() {
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
        <div className="space-y-4 md:space-y-8 my-auto ">
          <h1 className="text-xl md:text-2xl font-semibold text-red-800">
            Temukan Jawaban atas Pertanyaan Anda
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
            animate={electricEffect.animate}
          >
            <FaCashRegister className="text-red-800" />
            FAQ!
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
             Kami menyediakan solusi yang praktis dan efisien untuk mendukung kebutuhan Anda.
            Dengan sistem yang mudah digunakan, performa yang stabil, dan dukungan pelanggan
            yang responsif, kami memastikan pengalaman yang lancar dan tanpa kendala.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-2">
              <button
                className="w-full flex justify-between items-center text-left py-3 text-lg md:text-xl font-semibold text-gray-100 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
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
                <p className="text-gray-300 text-lg md:text-xl mt-2">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
