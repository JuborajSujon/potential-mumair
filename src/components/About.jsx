import { Element } from "react-scroll";
import AboutPhoto from "../assets/about-photo.png";
import info from "../data/user_info";
import InputRange from "./InputRange/InputRange";

const About = () => {
  const { about } = info;
  return (
    <Element name="about" id="about">
      <section id="home" className="px-6 py-10 md:py-16">
        <div className="flex flex-col sm:flex-row-reverse gap-8">
          <div className="sm:w-1/2">
            <div>
              <h2 className="text-center sm:text-left text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold mb-6 md:mb-8 lg:mb-10">
                About Me
              </h2>
              <p className="w-[80%] sm:w-full mx-auto sm:text-left text-center text-base md:text-lg lg:text-xl tracking-wide font-normal">
                I'm Muhammad Umair, a UI & UX designer passionate about crafting
                responsive, user-friendly websites. I specialize in UX, website
                design, app design, and graphic design to create seamless
                digital experiences.
              </p>
            </div>
            <div className="mt-10">
              {about.map((skill) => (
                <InputRange key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="text-center sm:w-1/2">
            <div className="relative inline-block">
              <div className="absolute bg-[#FD6F00]/50 w-[65%] h-[12%] left-0 right-0 mx-auto top-[12%]"></div>
              <img
                src={AboutPhoto}
                className=" mb-6 object-contain"
                alt="banner photo"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
