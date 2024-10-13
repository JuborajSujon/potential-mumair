import React from "react";
import SectionTitle from "./SectionTitle";
import { Element } from "react-scroll";
import TestimonialCenterSlider from "./TestimonialCenterSlider/TestimonialCenterSlider";

const Testimonials = () => {
  return (
    <Element name="Testimonials" id="Testimonials">
      <div className="py-16 px-6 md:py-20">
        <SectionTitle
          title="Testimonials"
          desc="The Testimonial section highlights feedback and reviews from clients or colleagues who have worked with you. It provides social proof of your skills, professionalism, and the impact of your work."
        />
        {/* swiper component */}
        <div className="w-full mt-7 md:mt-12">
          <TestimonialCenterSlider />
        </div>
      </div>
    </Element>
  );
};

export default Testimonials;
