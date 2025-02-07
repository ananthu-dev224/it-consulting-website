import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { VscClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { PiHandshakeLight } from "react-icons/pi";
import {
  HiHome,
  HiOutlineInformationCircle,
  HiMail,
  HiOutlineBriefcase,
} from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-md fixed top-4 left-4 right-4 z-50 rounded-sm"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">IT Consulting</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <HiHome />
            <span>About Us</span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <HiOutlineBriefcase />
            <span>Services</span>
          </Link>
          <Link
            to="why-us"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <PiHandshakeLight />
            <span>Why Us</span>
          </Link>
          <Link
            to="how-it-works"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <HiOutlineInformationCircle />
            <span>How It Works</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <HiMail />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <VscClose size={30} /> : <CiMenuBurger size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 rounded-b-sm">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <HiHome />
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineBriefcase />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="why-us"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <PiHandshakeLight />
                <span>Why Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="how-it-works"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <HiOutlineInformationCircle />
                <span>How It Works</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <HiMail />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
