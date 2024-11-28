import React from "react";
import Header from "./Header";
import TypographyEffect from "./TypographyEffect";
import UseCalculator from "./UseCalculator";
import Features from "./Features";
import WhyToUse from "./WhyToUse";
import HowToUse from "./HowToUse";
import HowItWorks from "./HowItWorks";
import ContactUs from "./ContactUs";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <TypographyEffect />
      </div>
      <UseCalculator />
      <Features />
      <WhyToUse />
      <HowToUse />
      <HowItWorks />
      <Disclaimer />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;