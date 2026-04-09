import React from "react";
import Hero from "./Sections/Hero";
import AboutUs from "./Sections/AboutUs";
import Counters from "./Sections/Counters";
import WhyChoose from "./Sections/WhyChoose";
import FAQ from "./Sections/FAQ";
import Testimonials from "./Sections/Testimonials";
import Services from "./Sections/Services";
import ContactInfo from "./Sections/ContactInfo";
import Branches from "./Sections/Branches";
import TrustPillars from "./Sections/TrustPillars";
import BeforeAfterSlider from "./Sections/BeforeAfterSlider";
import BranchLocations from "./Sections/BranchLocations";
import Team from "../About/Sections/Team";

const Home = () => {
  return (
    <div className="">
      <Hero />
     
      {/* <TrustPillars /> */}
      {/* <ContactInfo /> */}
      {/* <Branches /> */}
      <AboutUs />
       {/* <BranchLocations /> */}
      <Services />
      <WhyChoose />
      {/* <BeforeAfterSlider /> */}
      
      <Counters />
      <Team />
      <FAQ />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
