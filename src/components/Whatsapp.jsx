import { Link } from "react-router-dom";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa6";

function Whatsapp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="z-50 fixed bottom-2 md:bottom-8 left-3 md:left-5 opacity-85 hover:opacity-100">
        <button onClick={scrollToTop}>
          <div className=" xl:p-2 rounded-md bg-black px-2 py-6  hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </div>
      <div className="z-50 fixed bottom-5 md:bottom-10 right-3 md:right-5 opacity-85 shadow-emerald-200 hover:opacity-100">
        <Link to="">
          <FaWhatsapp
            className="w-14 md:w-16 h-14 md:h-16 text-white"
          />
        </Link>
      </div>
    </>
  );
}

export default Whatsapp;
