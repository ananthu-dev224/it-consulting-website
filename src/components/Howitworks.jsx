import React from "react";
import { motion } from "framer-motion";
import onboardingImage from "../assets/onboarding.jpg";
import {
  HiOutlineClipboardCheck,
  HiOutlineChat,
  HiOutlineCog,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="w-full py-16 flex items-center justify-center bg-white"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6">
        {/* Steps Section */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-4xl font-bold mt-4 text-gray-800 mb-6"
          >
            Steps to Success
          </motion.h2>

          <div className="flex flex-col gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <HiOutlineChat className="text-3xl sm:text-4xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Step 1: Consultation
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Connect with our team to discuss your business needs and
                  objectives.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <HiOutlineClipboardCheck className="text-3xl sm:text-4xl text-green-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Step 2: Custom Proposal
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Receive a tailored proposal outlining strategies to meet your
                  goals.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <HiOutlineCog className="text-3xl sm:text-4xl text-purple-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Step 3: Implementation
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Our experts execute the agreed solutions, ensuring precision
                  and efficiency.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0">
                <HiOutlineCheckCircle className="text-3xl sm:text-4xl text-red-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Step 4: Results & Support
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Track measurable outcomes with our support and continuous
                  optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src={onboardingImage}
            alt="Onboarding Process"
            className="w-full max-w-lg rounded-lg shadow-lg mt-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
