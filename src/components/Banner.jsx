import { Element } from "react-scroll";
import BannerImage from "../assets/banner-photo.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
const Banner = () => {
  return (
    <Element name="home">
      <section
        id="home"
        className="px-6 pt-20 md:pt-28 lg:pt-36 pb-10 md:pb-16">
        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-16 xl:gap-28">
          <div className="sm:w-1/2 md:w-3/5 xl:pr-16">
            <div className="">
              <h4 className="text-base md:text-xl mb-3">Hi, I am</h4>
              <h3 className="text-lg md:text-3xl font-bold text-[#FD6F00] mb-5">
                Muhammad Umair
              </h3>
              <div className="w-1/2 sm:w-[80%] md:w-[70%] 2xl:w-[95%] mb-10">
                <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-wider leading-none text-nowrap">
                  UI & UX
                </h2>
                <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-wider leading-none text-right text-nowrap">
                  Designer
                </h2>
              </div>
              <p className="text-base md:text-lg lg:text-xl ">
                Transforming your ideas into stunning digital experiences. From
                intuitive websites to engaging apps, I design with creativity
                and precision. Let’s collaborate to build user-friendly
                solutions that make a lasting impact!
              </p>

              <button className="bg-[#FD6F00] text-white border-none text-lg mt-7 px-8 lg:px-12  py-1 lg:py-2.5 rounded">
                Hire Me
              </button>
            </div>
          </div>
          <div className="text-center sm:w-1/2 md:w-2/5 flex-1">
            <div className="relative inline-block">
              <div className="absolute bg-[#FD6F00]/50 w-[65%] h-[12%] left-0 right-0 mx-auto top-[12%]"></div>
              <img
                src={BannerImage}
                className=" mb-6 object-contain"
                alt="banner photo"
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
              <a href="#" target="_blank">
                <FaFacebook className="text-2xl sm:text-3xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaTwitter className="text-2xl sm:text-3xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaInstagram className="text-2xl sm:text-3xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl hover:text-orange-600" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Banner;
