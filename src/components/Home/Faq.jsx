import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

const faqData = [
  {
    question: "What makes our services stand out?",
    answer:
      "We deliver cutting-edge technology with high performance, advanced security systems, and customer support that's always ready to assist you anytime.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us through the 'Contact Us' page, choose the service that fits your needs, and our team will guide you through every step for the best experience.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we offer 24/7 support via chat, email, and phone to ensure you get fast and accurate solutions.",
  },
  {
    question: "Can I request custom software tailored to my business?",
    answer:
      "Absolutely! We offer custom software development services tailored to your business needs, from small-scale to enterprise-level solutions.",
  },
  {
    question: "How long does software development take?",
    answer:
      "The timeline depends on the project's complexity. Simple applications can be completed in a few weeks, while large-scale projects may take several months.",
  },
  {
    question: "Is there a warranty after the project is completed?",
    answer:
      "Yes, we provide warranty and support after the project is delivered to ensure everything runs smoothly and bug-free.",
  },
  {
    question: "How does the payment system work?",
    answer:
      "We offer various payment options, including installment payments according to agreed project milestones.",
  },
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
          <h1 className="text-xl md:text-2xl font-semibold text-cyan-400">
            Find Answers to Your Questions
          </h1>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold flex items-center gap-3 text-white"
            animate={electricEffect.animate}
          >
            <GrTechnology className="text-cyan-400" />
            FAQ!
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-300 mt-4 md:max-w-3xl">
            We provide practical and efficient solutions to support your needs.
            With a user-friendly system, stable performance, and responsive customer support,
            we ensure a seamless and hassle-free experience.
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
