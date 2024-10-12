import React from "react";
import SectionTitle from "./SectionTitle";
import { Element } from "react-scroll";

const Testimonials = () => {
  return (
    <Element name="testimonials" id="testimonials">
      <div className="py-16 px-6 md:py-20">
        <SectionTitle
          title="Testimonials"
          desc="The Testimonial section highlights feedback and reviews from clients or colleagues who have worked with you. It provides social proof of your skills, professionalism, and the impact of your work."
        />
        {/* swiper component */}
        <div></div>
      </div>
    </Element>
  );
};

export default Testimonials;
