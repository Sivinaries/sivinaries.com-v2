import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { IoTicket } from "react-icons/io5";
import { FiSettings, FiHeadphones, FiTag, FiTrendingUp } from "react-icons/fi";

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

const whyItems = [
  {
    title: "Kelola Event Praktis",
    description:
      "Buat, ubah, dan monitor event secara real-time lewat dashboard yang intuitif.",
    icon: FiSettings,
  },
  {
    title: "Dukungan Penuh",
    description:
      "Tim support siap membantu kapan pun dibutuhkan agar operasional tetap lancar.",
    icon: FiHeadphones,
  },
  {
    title: "Tiket Fleksibel",
    description:
      "Kustomisasi tiket undangan & pantau penjualan offline (OTS) dalam satu tempat.",
    icon: FiTag,
  },
  {
    title: "Dana Cepat Cair",
    description:
      "Nikmati pencairan hasil penjualan hanya dalam 1 hari kerja langsung ke rekeningmu.",
    icon: FiTrendingUp,
  },
];

function Product() {
  return (
    <div className="bg-black relative py-10 md:py-20 px-4 md:px-20">
      {/* Background effect */}
      <motion.div
        className="absolute top-20 right-0 w-44 md:w-60 h-44 md:h-60 bg-blue-500 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="space-y-4 md:space-y-8 md:max-w-7xl mx-auto">
        {/* Section title */}
        <h1 className="text-xl md:text-2xl font-semibold text-orange-500">
          Kenapa Memilih Kami?
        </h1>

        {/* Animated title */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
          animate={electricEffect.animate}
        >
          <IoTicket className="text-orange-500" />
          Keunggulan Kami!
        </motion.h1>

        {/* Section description */}
        <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
          Kami menghadirkan solusi inovatif dengan teknologi terkini, performa
          yang optimal, serta layanan terbaik untuk memastikan pengalaman
          terbaik bagi Anda. Keamanan, kecepatan, dan keandalan adalah prioritas
          utama kami.
        </p>

        {/* Mobile swiper */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {whyItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  className="bg-gray-300 h-60 rounded-3xl p-2 flex flex-col items-center text-center shadow-lg"
                >
                  <div className="w-20 h-20 flex items-center justify-center p-3 bg-white rounded-full">
                    <item.icon className="text-5xl text-orange-500" />
                  </div>
                  <h2 className="text-lg font-semibold text-black mt-3">
                    {item.title}
                  </h2>
                  <p className="text-base font-light text-gray-900 mt-2">
                    {item.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {whyItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="bg-gray-300 rounded-3xl h-80 p-6 flex flex-col items-center text-center shadow-lg"
            >
              <div className="w-32 h-32 flex items-center justify-center p-5 bg-white rounded-full">
                <item.icon className="text-7xl text-orange-500" />
              </div>
              <h2 className="text-2xl font-semibold text-black mt-3">
                {item.title}
              </h2>
              <p className="text-base font-light text-gray-900 mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
