import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";
import info from "../data/user_info.js";
import ServiceCard from "./ServiceCard.jsx";

const Services = () => {
  const { services } = info;
  return (
    <Element name="services" id="services">
      <div className="py-16 px-6 md:py-20">
        <div>
          <SectionTitle
            title="Services"
            desc="Offering comprehensive design services, including intuitive UI/UX design, engaging web and app design, and captivating graphics."
          />
        </div>
        <div className="w-full mt-10 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4 justify-items-center items-center">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
