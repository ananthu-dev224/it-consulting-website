import React from "react";
import AboutUs from "../components/Aboutus";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import HowItWorks from "../components/Howitworks";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* About Us Section */}
      <AboutUs />
      {/* Services Section */}
      <Services />
      {/* Why Us Section */}
      <WhyUs />
      {/* How It Works Section */}
      <HowItWorks />
      {/* ContactUs Section */}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Main;
