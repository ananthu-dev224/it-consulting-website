import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 mt-4">
            Reach Out
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Have any questions or need assistance? Reach out to us via the
            contact information or send us a message using the form.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <HiOutlineMail className="text-3xl text-blue-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Email Us
                </h4>
                <p className="text-gray-600 text-sm">
                  ananthu9526official@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiOutlinePhone className="text-3xl text-green-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Call Us</h4>
                <p className="text-gray-600 text-sm">+91 9526952719</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiOutlineLocationMarker className="text-3xl text-red-500" />
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Visit Us
                </h4>
                <p className="text-gray-600 text-sm">
                  123 Tech Street, Thrissur, Kerala
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inquiry Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-lg p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-6 mt-4">
            Start the Conversation
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
