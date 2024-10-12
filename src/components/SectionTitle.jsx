import React from "react";
import PropsTypes from "prop-types";

const SectionTitle = ({ title, desc }) => {
  return (
    <div>
      <div className="w-3/4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-wide text-center font-bold mb-6 md:mb-8 lg:mb-10">
          {title}
        </h2>
        <p className="text-center text-base md:text-lg lg:text-xl tracking-wide font-normal">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropsTypes.string,
  desc: PropsTypes.string,
};
