import { motion } from "framer-motion";
import { GrTechnology } from "react-icons/gr";

/* Motion Variants */
const marqueeVariants = {
    animate: {
        x: ["100%", "-100%"],
        transition: { duration: 12, repeat: Infinity, ease: "linear" }
    }
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
        opacity: [1, 0.85, 1], // Smooth pulsing effect
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
        },
    },
};

function Running() {
    return (
        <div className="relative w-full h-fit overflow-hidden z-30 py-4 md:py-8 bg-black">
            {/* Marquee Text */}
            <motion.div
                className="flex space-x-8 md:space-x-16 whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
            >
                {["Custom Software", "Web Development", "Mobile Apps", "Cloud Solutions", "SaaS Development", "Enterprise Systems", "UI/UX Design", "API Integration"].map((text, index) => (
                    <motion.h1
                        animate={electricEffect.animate}
                        key={index}
                        className="text-white text-2xl md:text-5xl font-extrabold flex items-center"
                    >
                        {text} <GrTechnology className="mx-2 text-cyan-500 animate-spin" />
                    </motion.h1>
                ))}
            </motion.div>
        </div>
    );
}

export default Running;
