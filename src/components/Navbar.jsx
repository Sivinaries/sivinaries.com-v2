/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "Products", to: "/product" },
    { title: "Services", to: "/service" },
    { title: "Works", to: "/work" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingUp(currentScrollPos < prevScrollPos);
      setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedLink = navLinks.find((link) => link.to === currentPath);
    setActivePage(matchedLink);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modalVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        type: "tween",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  const navLinksVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  if (isMobileView) {
    navLinks.push({ title: "Contact Us", to: "/contact" });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          className={`shadow-xl z-50 fixed bg-opacity-50 top-0 right-0 left-0 p-5 ${
            isScrollingUp ? "bg-black" : "bg-black"
          }`}
          variants={navLinksVariants}
        >
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
              <a className="flex items-center" href="/">
                <img
                  className="w-16 h-8 md:w-24 md:h-12"
                  src={logo}
                  alt="Logo"
                />
                <div className="ml-2 md:ml-4">
                  <p className="text-white text-left text-xl md:text-2xl font-light">
                    Sivinaries
                  </p>
                </div>
              </a>
            </div>
            {isMobileView ? (
              <button className="text-black">
                {showModal ? (
                  <FaTimes
                    onClick={toggleModal}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  />
                ) : (
                  <FaBars
                    onClick={toggleModal}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  />
                )}
              </button>
            ) : (
              <div className="hidden md:flex md:gap-16 items-center">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.to}
                    className={`text-white text-xl font-light hover:scale-110 duration-200 delay-150 ${
                      activePage && activePage.to === link.to
                        ? "border-b-2 border-white"
                        : ""
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            )}
            <div className="hidden md:block py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl shadow-md transition-transform transform hover:scale-105">
              <a
                className="text-white text-center text-2xl font-light"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
          <AnimatePresence>
            {showModal && isMobileView && (
              <motion.div
                className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FaTimes
                  className="absolute top-5 right-5 text-white cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                  onClick={toggleModal}
                />
                <motion.div
                  className="relative w-full"
                  variants={navLinksVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex flex-col gap-6 sm:gap-8 justify-center mx-6 h-full text-right">
                    {navLinks.map((link, index) => (
                      <motion.span
                        key={index}
                        className={`text-white text-4xl font-light ${
                          activePage && activePage.to === link.to ? "" : ""
                        }`}
                        variants={linkItemVariants}
                        onClick={closeModal}
                      >
                        <a href={link.to}>{link.title}</a>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
