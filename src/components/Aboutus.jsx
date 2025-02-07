import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import Navbar from "../components/Navbar";
import bgImage from "../assets/abt-bg.jpg";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  const headingText =
    "Empowering Business Growth with Cutting-Edge IT Solutions";

  // Split heading text into individual words
  const splitHeadingWords = headingText.split(" ");

  if (!isLoaded) {
    // Loading spinner until the background image is ready
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <ClipLoader color="black" size={60} />
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <section
        id="about"
        className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden"
      >
        {/* Static Background Image with Fade-In Animation */}
        <motion.div
          initial={{ opacity: 0 }} // Start fully transparent
          animate={{ opacity: 1 }} // Fade to full visibility
          transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth fade
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></motion.div>

        {/* Background Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-black"
        ></motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl px-6 text-center"
        >
          {/* Main Heading with Word Animation */}
          <div className="flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide">
            {splitHeadingWords.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.4,
                }}
                className="whitespace-nowrap"
              >
                {word}
              </motion.div>
            ))}
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: splitHeadingWords.length * 0.2,
            }}
            className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed"
          >
            At <span className="font-bold text-blue-600">IT Consulting</span>,
            we provide cutting-edge IT solutions tailored to meet your business
            needs. From strategy to execution, we ensure your technology helps
            your business grow.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default AboutUs;
