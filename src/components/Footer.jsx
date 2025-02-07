import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-blue-600 text-xl font-semibold mb-4">
            IT Consulting
          </h3>
          <p className="text-sm">
            Delivering cutting-edge IT solutions to help your business grow.
            Empowering success through technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-white transition">
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Twitter X */}
            <a
              href="https://x.com/dev_aks224?t=wUkknueY5rNGGh82kYudJQ&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition text-2xl"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ananthu-k-s-403512291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/___ananthu__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} IT Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
