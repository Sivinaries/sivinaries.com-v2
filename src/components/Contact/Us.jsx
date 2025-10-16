import { motion } from "framer-motion";
import { GrTechnology } from "react-icons/gr";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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


function Us() {
  return (
    <section className="relative h-full bg-black px-4 md:px-20 overflow-hidden text-white">
      {/* Background Glow Effects */}
      <motion.div
        className="absolute top-20 right-0 w-44 md:w-60 h-44 md:h-60 bg-cyan-400 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-44 md:w-60 h-44 md:h-60 bg-blue-500 opacity-60 blur-3xl rounded-full"
        animate={{ scale: [1, 0.8, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      {/* Content Container */}
      <div className="space-y-4 md:space-y-8 relative z-10 md:max-w-7xl mx-auto my-28 md:my-44">
        {/* Headline and Subcopy */}
        <motion.h1 animate={electricEffect.animate} className="text-3xl md:text-5xl font-extrabold flex items-center justify-center gap-3 text-white">
          <GrTechnology className="text-cyan-400" />
          Let's Build Together
          </motion.h1>
        <p className="text-lg md:text-2xl text-white md:max-w-5xl mx-auto text-center">
          Whether you're launching a new product, revamping an existing platform, or just exploring an idea — our team is ready to turn your vision into reality.
          Fill out the form below and let’s talk about how we can help you grow.
        </p>

        {/* Form */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          whileHover={{ scale: 1.015 }}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">
            {/* Left Column */}
            <div className="space-y-2 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white focus:ring-2 focus:ring-cyan-400 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g., Johndoe@yourcompany.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white focus:ring-2 focus:ring-cyan-400 text-gray-600"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-2 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="e.g., +62 812-3456-7890"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white focus:ring-2 focus:ring-cyan-400 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="companyName">
                  Company / Startup Name *
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  placeholder="Sivinaries"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-white focus:ring-2 focus:ring-cyan-400 text-gray-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Tell us about your project or idea
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="What are you looking to build? Any specific tech or timelines?"
                className="w-full px-4 py-3 rounded-lg bg-white border border-white focus:ring-2 focus:ring-cyan-400 text-gray-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="inline-block px-10 py-3 text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Request a Proposal
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Us;
