import { useState } from "react";
import { motion } from "framer-motion";
import Dinkes from "../../assets/images/work/dinkes.png";
import Aqua from "../../assets/images/work/aqua.png";
import Codefy from "../../assets/images/work/codefy.png";
import Bw from "../../assets/images/work/bw.png";
import Beil from "../../assets/images/work/beil.png";
import Funnev from "../../assets/images/work/funnev.png";
import Jit from "../../assets/images/work/jit.png";
import Ram from "../../assets/images/work/ram.png";
import Kampanye from "../../assets/images/work/kampanye.png";
import Rembug from "../../assets/images/work/rembug.png";
import Mrteknik from "../../assets/images/work/mrteknik.png";
import Geprek from "../../assets/images/work/geprek.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const viewportSettings = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const workItems = [
  {
    title: "Dinas Kesehatan Kota Semarang",
    description:
      "A web-based system that simplifies the management and tracking of work letter submissions within organizations.",
    img: Dinkes,
    link: "http://119.2.50.170:5500/surat-p2p/",
  },
  {
    title: "Aquashine",
    description:
      "A sleek and responsive landing page designed to showcase Aquashine's premium products effectively.",
    img: Aqua,
    link: "https://aquashine.company/",
  },
  {
    title: "Codefy",
    description:
      "A modern personal portfolio website for Codefy, featuring project showcases, blog integration, and responsive design.",
    img: Codefy,
    link: "https://codefy.my.id/",
  },
  {
    title: "Luthfiyasin Official",
    description:
      "An engaging and informative landing page built to support a political campaign, complete with donation and volunteer features.",
    img: Kampanye,
    link: "https://www.luthfiyasinofficial.id/",
  },
  {
    title: "Rembug Jateng",
    description:
      "An interactive platform facilitating community discussions and government engagement in Central Java.",
    img: Rembug,
    link: "https://ngopeninglakoni.id/",
  },
  {
    title: "Bwteknik",
    description:
      "A fast and secure landing page designed for BW Teknik to promote its engineering solutions and services.",
    img: Bw,
    link: "https://bwteknik.com/",
  },
  {
    title: "Beilpos",
    description:
      "A high-conversion landing page crafted for Beil, emphasizing product features and customer engagement.",
    img: Beil,
    link: "https://beilpos.click/",
  },
  {
    title: "Funnev",
    description:
      "A dynamic web application for Funnev, enabling users to join, manage, and explore various online communities.",
    img: Funnev,
    link: "https://funnev.click/",
  },
  {
    title: "Javaindotrip",
    description:
      "A travel web app that helps users explore and book trips across Indonesia, with integrated maps and itinerary tools.",
    img: Jit,
    link: "https://javaindotrip.com/",
  },
  {
    title: "Mrteknik",
    description:
      "A sleek and responsive landing page designed to showcase Mr Teknik premium products effectively.",
    img: Mrteknik,
    link: "https://mrteknik.id/",
  },
  {
    title: "Ramstainless",
    description:
      "A sleek and responsive landing page designed to showcase Ram Stainless premium products effectively.",
    img: Ram,
    link: "https://ramstainless.id/",
  },
  {
    title: "Geprek Mantul",
    description:
      "A sleek and responsive landing page designed to showcase Geprek Mantul premium products effectively.",
    img: Geprek,
    link: "https://geprekmantul.com/",
  },
];

const itemsPerPage = 4;

function Us() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(workItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = workItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative bg-black px-4 md:px-20 py-20 md:py-32 overflow-hidden">
      {/* Background Animation */}
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

      {/* Cards */}
      <div className="space-y-4 md:space-y-8 md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="bg-gray-300 rounded-3xl h-60 md:h-96 flex flex-col items-center text-center overflow-hidden"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col items-center"
              >
                <img
                  className="h-40 object-cover md:object-fill md:h-64 w-full rounded-t-3xl"
                  src={item.img}
                  alt={item.title}
                />
                <div className="space-y-1 px-2 py-2">
                  <h2 className="text-base md:text-2xl font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base font-light text-gray-900 mx-1 md:mx-2">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 gap-4 items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 bg-white text-black rounded-full disabled:opacity-30 hover:bg-gray-200 transition"
          >
            <HiChevronLeft size={24} />
          </button>

          <span className="text-white text-sm md:text-base">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 bg-white text-black rounded-full disabled:opacity-30 hover:bg-gray-200 transition"
          >
            <HiChevronRight size={24} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Us;
