import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { GrTechnology } from "react-icons/gr";
import beil from '../../assets/images/beil.png';
import funnev from '../../assets/images/funnev.png';

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
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

const serviceItems = [
    {
        title: "Beil",
        description: "A modern POS system with multi-store support, real-time transaction tracking, and flexible payment integration.",
        icon: beil
    },
    {
        title: "Funnev",
        description: "User-friendly, secure, and efficient e-ticketing for a better event experience.",
        icon: funnev
    },
];

function Product() {
    return (
        <div className="bg-black relative py-10 md:py-20 px-4 md:px-20 overflow-hidden">
            <motion.div
                className="absolute top-20 left-0 w-44 md:w-80 h-44 md:h-80 bg-cyan-400 opacity-60 blur-3xl rounded-full"
                animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <div className="space-y-4 md:space-y-8 relative z-10 text-left md:max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">Our Products</h1>
                <motion.h1 animate={electricEffect.animate} className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white">
                    <GrTechnology className="text-cyan-400" /> Your Smart Solution
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
                    We bring you innovative technologies to support your business—from modern POS systems, ticketing solutions, and CRM to professional websites—all in one platform!
                </p>

                {/* Mobile Carousel View */}
                <div className="md:hidden">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                    >
                        {serviceItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportSettings}
                                    className="bg-gray-300 h-60 rounded-3xl p-2 flex flex-col items-center text-center shadow-lg"
                                >
                                    <div className="w-20 h-20">
                                        <img className="w-full h-full" src={item.icon} alt={item.title} />
                                    </div>
                                    <h2 className="text-lg font-semibold text-black mt-3">{item.title}</h2>
                                    <p className="text-base font-light text-gray-900 mt-2">{item.description}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-2 gap-8">
                    {serviceItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportSettings}
                            className="bg-gray-300 rounded-3xl h-72 p-6 flex flex-col items-center text-center shadow-lg border border-gray-700"
                        >
                            <div className="w-32 h-32">
                                <img className="w-full h-full" src={item.icon} alt={item.title} />
                            </div>
                            <h2 className="text-2xl font-semibold text-black mt-3">{item.title}</h2>
                            <p className="text-base font-light text-gray-900 mt-2">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Learn More Button */}
                <div className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl shadow-md transition-transform transform hover:scale-105 w-fit">
                    <a href="/product">
                        <h1 className="text-lg md:text-xl font-semibold text-white">
                            Learn More
                        </h1>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Product;
