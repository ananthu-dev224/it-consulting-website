import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetID = import.meta.env.VITE_SERVICES_SHEET_ID;
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/Sheet1?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const rows = response.data.values;

        // Map rows from Google Sheets to service data
        const data = rows.slice(1).map((row) => ({
          title: row[0],
          description: row[1],
          iconClass: row[2],
        }));

        setServices(data);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="services"
      className="relative w-full py-16 bg-gray-100 flex flex-col items-center"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-12 mt-4 text-center"
      >
        Our Expertise
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {/* Render Font Awesome Icon dynamically */}
              <i className={`${service.iconClass} text-4xl text-blue-500`}></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 text-center mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
