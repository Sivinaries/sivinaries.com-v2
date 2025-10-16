/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { GrTechnology } from "react-icons/gr";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Html from "../../assets/images/Html";
import Css from "../../assets/images/Css";
import Java from "../../assets/images/Java";
import Mysql from "../../assets/images/Mysql";
import Redis from "../../assets/images/Redis";
import Laravel from "../../assets/images/Laravel";
import Reactjs from "../../assets/images/Reactjs";
import Adonis from "../../assets/images/Adonis";
import Next from "../../assets/images/Next";
import Docker from "../../assets/images/Docker";
import Git from "../../assets/images/Git";
import Hub from "../../assets/images/Hub";
import Vsc from "../../assets/images/Vsc";

const viewportSettings = { once: true, amount: 0.2 };

const techs = [
    { icon: <Html /> },
    { icon: <Css /> },
    { icon: <Java /> },
    { icon: <Mysql /> },
    { icon: <Redis /> },
    { icon: <Laravel /> },
    { icon: <Reactjs /> },
    { icon: <Adonis /> },
    { icon: <Next /> },
    { icon: <Docker /> },
    { icon: <Git /> },
    { icon: <Hub /> },
    { icon: <Vsc /> }
];

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

/* Motion Variants */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const Tech = () => {
    return (
        <div className="bg-black relative py-10 md:py-20 px-4 md:px-20 overflow-hidden">
            <motion.div
                className="absolute top-20 right-0 w-44 md:w-80 h-44 md:h-80 bg-blue-500 opacity-60 blur-3xl rounded-full"
                animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
            <div className="space-y-4 md:space-y-8 relative z-10 text-left md:max-w-7xl mx-auto">
                <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">Our Technologies</h1>
                <motion.h1 animate={electricEffect.animate} className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white">
                    <GrTechnology className="text-cyan-400" /> Foundation of the Digital Future
                </motion.h1>
                <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
                    We build digital solutions using modern technology to drive business efficiency and growth. Powered by top technology stacks like Laravel, React, Redis, MySQL, and Docker.
                </p>

                <motion.div className="md:flex flex-col items-center justify-center relative space-y-6"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <Swiper
                        loop={true}
                        slidesPerView={2.2}
                        spaceBetween={20}
                        breakpoints={{ 1024: { slidesPerView: 5 } }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        className="w-full h-full"
                    >
                        {techs.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <motion.div className="w-full bg-gray-300 rounded-3xl p-4 h-16 md:h-24 md:p-6 flex flex-col items-center text-center shadow-lg border border-gray-700"
                                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportSettings}>
                                    {tech.icon}
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
};

export default Tech;
