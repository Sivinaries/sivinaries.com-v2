import { motion } from "framer-motion";

/* Motion Variants */
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
};

function Map() {
    
    return (
        <div className="bg-black relative py-10 px-4 md:px-20 overflow-hidden">
            <motion.div className="md:flex flex-col items-center justify-center relative"
                variants={fadeInUp}
                initial="hidden" animate="visible">
            <iframe className="mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126727.51321936972!2d110.37177055928903!3d-6.981597350966326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d8e76d70457%3A0x7da06cc998c9552b!2sSivinaries%20%7C%20Jasa%20Pembuatan%20Aplikasi%20Website%20Dan%20Mobile!5e0!3m2!1sid!2sid!4v1743344748457!5m2!1sid!2sid"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen="1" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </motion.div>
        </div>
    )
}

export default Map