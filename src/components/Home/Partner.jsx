/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Ali from "../../assets/images/partner/Ali";
import Aws from "../../assets/images/partner/Aws";
import Biz from "../../assets/images/partner/Biz";
import Nia from "../../assets/images/partner/Nia";
import Ver from "../../assets/images/partner/Ver";
import Mid from "../../assets/images/partner/Mid";
import Cloud from "../../assets/images/partner/Cloud";
import Google from "../../assets/images/partner/Google";

const viewportSettings = { once: true, amount: 0.2 };

const items = [
    { icon: <Ali /> },
    { icon: <Aws /> },
    { icon: <Biz /> },
    { icon: <Cloud /> },
    { icon: <Google /> },
    { icon: <Ver /> },
    { icon: <Mid /> },
    { icon: <Nia /> },

];

/* Motion Variants */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
};

function Partner() {
    return (
        <div className="bg-black relative py-10 px-4 md:px-20 overflow-hidden">
            <div className="space-y-4 md:space-y-8 relative z-10 text-left md:max-w-7xl mx-auto">

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
                        {items.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <motion.div className="w-full bg-gray-300 h-16 md:h-24 rounded-3xl p-4 md:p-6 flex flex-col items-center text-center shadow-lg border border-gray-700"
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
}

export default Partner;
