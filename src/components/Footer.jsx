import { FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="h-fit w-full bg-black mx-auto">
            <div className="">
                <div className="grid grid-cols-2 p-8 xl:p-10 space-y-4 xl:space-y-0">
                    <div className="flex justify-around col-span-2 xl:col-span-1">
                        <div className="my-auto">
                            <Link to="/">
                                <img src={logo}
                                className="w-24 h-12 md:w-32 md:h-16"
                                alt="Logo" />
                            </Link>
                        </div>
                        <div className='space-y-4 col-span-1'>
                            <div>
                                <h1 className='font-extrabold font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>Business</h1>
                            </div>
                            <div className='space-y-2 text-center'>
                                <h1 className='font-light font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>sivinaries@gmail.com</h1>
                                <h1 className='font-light font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>+62 877 8847 6372</h1>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4 col-span-2 xl:col-span-1'>
                        <div>
                            <h1 className='font-extrabold font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>Address</h1>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-light font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>Jl. Satrio Wibowo 3 No.73, Tlogosari Kulon, Kec. Pedurungan, Semarang City, Central Java 50196, Indonesia</h1>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2">
                    <div className='text-center order-2 xl:order-1 p-2.5 xl:p-5 my-auto'>
                        <h1 className='font-extrabold font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>
                            Copyright © Sivinaries 2024
                        </h1>
                    </div>
                    <div className='space-y-4 mx-auto p-4 order-1 xl:order-2'>
                        <div>
                            <h1 className='font-extrabold font-sans text-white text-center text-xs xl:text-lg 2xl:text-xl'>
                                Connect With Us
                            </h1>
                        </div>
                        <div className='flex gap-4 xl:gap-8 justify-center'>
                            <Link to='https://www.instagram.com/sivinaries/'>
                                <FaInstagram className='text-white w-8 h-8' />
                            </Link>
                            <Link to='https://www.tiktok.com/@sivinaries'>
                                <FaTiktok className='text-white w-8 h-8' />
                            </Link>
                            <Link to='https://wa.me/6287788476372'>
                                <IoLogoWhatsapp className='text-white w-8 h-8' />
                            </Link>
                            <Link to='https://www.linkedin.com/company/sivinaries/'>
                                <AiFillLinkedin className='text-white w-8 h-8' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;
