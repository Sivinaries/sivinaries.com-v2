import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { GrTechnology, GrShieldSecurity } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaCogs, FaCheckCircle } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";

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

const whyItems = [
  {
    title: "Custom Solutions for Your Business",
    description: "We don't just build software, we craft solutions tailored to your business needs.",
    icon: FaCogs,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Powered by the latest technology for optimal performance, high speed, and maximum efficiency.",
    icon: GrTechnology,
  },
  {
    title: "Scalable & High Performance",
    description: "Our solutions are built to grow with your business, with microservices architecture and optimized databases.",
    icon: AiOutlineCloudServer,
  },
  {
    title: "Security & Reliability",
    description: "Security is our top priority. With data encryption, automatic backups, and reliable servers, your business stays safe.",
    icon: GrShieldSecurity,
  },
  {
    title: "Fast Support & Maintenance",
    description: "Our team is ready to assist quickly to ensure your app runs smoothly without interruptions.",
    icon: MdOutlineSupportAgent,
  },
  {
    title: "Proven Track Record",
    description: "We’ve helped various businesses build efficient and user-friendly systems.",
    icon: FaCheckCircle,
  },
];

function Why() {
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
        <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">
          Why Choose Us?
        </h1>

        {/* Animated title */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
          animate={electricEffect.animate}
        >
          <GrTechnology className="text-cyan-400" />
          Our Advantages!
        </motion.h1>

        {/* Section description */}
        <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
          We deliver innovative solutions using the latest technology, top performance,
          and exceptional service to ensure you have the best experience possible.
          Security, speed, and reliability are our top priorities.
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
                    <item.icon className="text-5xl text-cyan-500" />
                  </div>
                  <h2 className="text-lg font-semibold text-black mt-3">{item.title}</h2>
                  <p className="text-base font-light text-gray-900 mt-2">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
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
                <item.icon className="text-7xl text-cyan-500" />
              </div>
              <h2 className="text-2xl font-semibold text-black mt-3">{item.title}</h2>
              <p className="text-base font-light text-gray-900 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
