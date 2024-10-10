import React from "react";
import PropTypes from "prop-types";

const ServiceCard = (service = { service: {} }) => {
  const { icon, name, desc } = service?.service;
  return (
    <div className="max-w-[330px] min-h-[350px] h-full bg-[#F8F8F8] dark:text-black rounded-lg py-11 px-5 space-y-5 flex flex-col justify-between">
      <img
        className="h-[70px] w-[70px] object-contain mt-2"
        src={icon}
        alt=""
      />
      <h3 className="text-3xl font-semibold">{name}</h3>
      <p className="text-lg tracking-wide leading-6 ">{desc}</p>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
