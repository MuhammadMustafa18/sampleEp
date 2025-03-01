import React from "react";
import Hero from "../components/Hero";
import Description from "../components/homepage/Description";
import Featured from "../components/homepage/Featured/Featured";
import Testimonial from "../components/homepage/testimonials/testimonials";
import ContactForm from "../components/homepage/Contact/contact";

const Homepage = () => {
  return (
    <div className="font-primary">
      <Hero />
      <div className="mt-18 sm:mt-45">
        <Description />
      </div>
      <div className="px-3">
        <Featured />
      </div>
      <Testimonial className=""/>
      <ContactForm />
    </div>
  );
};

export default Homepage;
