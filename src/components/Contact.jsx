import { Element } from "react-scroll";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <Element name="contact" id="contact">
      <div className="py-[140px]">
        <div>
          <SectionTitle
            title="Lets Design Together"
            desc="Ready to bring your ideas to life? Whether you need a sleek website, intuitive user interface, or custom web solution, let’s collaborate to create something extraordinary."
          />
        </div>
        <div className="w-full mt-24">
          <div className="w-3/4 mx-auto flex justify-between gap-7">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered w-3/4 h-16 font-poppins text-xl rounded-2xl bg-white focus:outline-none focus:ring-0"
            />
            <button className="btn w-1/4 h-16 bg-[#FD6F00] text-white font-semibold text-xl rounded-2xl">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
