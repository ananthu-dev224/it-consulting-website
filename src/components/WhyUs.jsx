import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative w-full py-16 bg-gray-50 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-12 mt-4 text-center"
      >
        Why We're the Best Choice ?
      </motion.h2>

      {/* Modern Layout for Propositions */}
      <div className="relative flex flex-wrap justify-center gap-12 max-w-6xl px-6">
        {/* Proposition 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Circle Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center">
              <HiOutlineLightBulb className="text-4xl text-yellow-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
            Innovative Solutions
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xs">
            We leverage cutting-edge technology to deliver innovative and
            efficient solutions.
          </p>
        </motion.div>

        {/* Proposition 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Circle Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center">
              <HiOutlineUserGroup className="text-4xl text-blue-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
            Client-Centric Approach
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xs">
            Our solutions are designed with your unique business needs at the
            core.
          </p>
        </motion.div>

        {/* Proposition 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Circle Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center">
              <HiOutlineTrendingUp className="text-4xl text-green-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
            Proven Results
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xs">
            We have a track record of delivering measurable results that boost
            business growth.
          </p>
        </motion.div>

        {/* Proposition 4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Circle Container */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center">
              <HiOutlineShieldCheck className="text-4xl text-red-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
            Security & Reliability
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xs">
            We prioritize security and ensure reliability in every solution we
            deliver.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
