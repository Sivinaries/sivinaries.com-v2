import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoPricetags } from "react-icons/io5";

const faqData = [
  // Untuk Pengguna (Pembeli Tiket)
  {
    question: "Bagaimana cara membeli tiket?",
    answer:
      "Pilih acara yang ingin Anda hadiri, tentukan jumlah tiket, dan lanjutkan ke pembayaran. E-tiket akan langsung dikirim ke email Anda.",
  },
  {
    question: "Apa yang membuat layanan kami berbeda?",
    answer:
      "Kami menghadirkan pengalaman pembelian tiket yang cepat, mudah, dan aman. Dukungan pelanggan juga tersedia setiap hari.",
  },
  {
    question: "Bagaimana jika saya tidak menerima e-tiket setelah pembayaran?",
    answer:
      "Coba periksa folder spam terlebih dahulu. Jika belum ada, silakan hubungi tim kami, dan kami akan bantu kirim ulang tiket Anda.",
  },
  {
    question: "Apakah tiket bisa dikembalikan atau dijadwalkan ulang?",
    answer:
      "Hal ini tergantung kebijakan penyelenggara acara. Silakan cek informasi di halaman event atau hubungi kami untuk bantuan.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer:
      "Kami mendukung berbagai metode pembayaran seperti transfer bank, e-wallet, dan kartu debit/kredit.",
  },

  // Untuk Penyelenggara Event
  {
    question: "Bagaimana cara mulai menggunakan platform ini untuk event saya?",
    answer:
      "Hubungi tim kami melalui halaman 'Kontak Kami'. Kami akan bantu proses pendaftaran dan aktivasi akun penyelenggara Anda.",
  },
  {
    question: "Apakah saya bisa memantau penjualan tiket secara langsung?",
    answer:
      "Ya, Anda bisa memantau penjualan tiket, data peserta, dan statistik lainnya secara real-time melalui dashboard penyelenggara.",
  },
  {
    question: "Bisakah saya mengatur kategori tiket dan kuotanya sendiri?",
    answer:
      "Tentu. Anda bisa menentukan jenis tiket, harga, kuota, dan waktu penjualan sesuai kebutuhan acara Anda.",
  },
  {
    question: "Apakah bisa digunakan untuk event gratis?",
    answer:
      "Bisa. Anda tetap bisa mengatur event gratis dan mengelola pendaftaran peserta dengan sistem kami.",
  },
  {
    question: "Bagaimana sistem pembayaran untuk penyelenggara event?",
    answer:
      "Dana hasil penjualan tiket akan ditransfer ke rekening Anda sesuai dengan jadwal dan kesepakatan awal.",
  },
];

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
          <h1 className="text-xl md:text-2xl font-semibold text-orange-500">
            Temukan Jawaban atas Pertanyaan Anda
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
            animate={electricEffect.animate}
          >
            <IoPricetags className="text-orange-500" />
            FAQ!
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
            Kami menyediakan solusi yang praktis dan efisien untuk mendukung
            kebutuhan Anda. Dengan sistem yang mudah digunakan, performa yang
            stabil, dan dukungan pelanggan yang responsif, kami memastikan
            pengalaman yang lancar dan tanpa kendala.
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
                <p className="text-gray-300 text-lg md:text-xl mt-2">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
