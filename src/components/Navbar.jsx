import { Link as ScrollLink } from "react-scroll";
import useScrollPosition from "../hook/useScrollPosition";
import { useGeneralData } from "./../hook/useGeneralData";
import lightLogo from "../assets/logo-light.png";
import darkLogo from "../assets/logo-dark.png";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const { theme } = useGeneralData();
  const navList = (
    <>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="home"
          spy={true}
          offset={-150}
          smooth={true}
          duration={500}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="about"
          smooth={true}
          spy={true}
          offset={-150}
          duration={500}>
          About Me
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="services"
          smooth={true}
          spy={true}
          offset={-150}
          duration={500}>
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="projects"
          smooth={true}
          spy={true}
          offset={-150}
          duration={500}>
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="Testimonials"
          smooth={true}
          spy={true}
          offset={-150}
          duration={500}>
          Testimonials
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="active cursor-pointer"
          to="contact"
          smooth={true}
          spy={true}
          offset={-150}
          duration={500}>
          Contact
        </ScrollLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar justify-between max-w-[1420px] fixed z-20 ${
        scrollPosition > 300
          ? "bg-white dark:bg-[#1e1e1e]"
          : "bg-white/50 dark:bg-[#1e1e1e]/50"
      } dark:text-slate-300 px-5`}>
      <div className="w-full lg:max-w-fit flex justify-between lg:block">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  xl:hidden hover:bg-orange-400 hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 !text-black rounded-md w-52 space-y-2 ">
            {navList}
          </ul>
        </div>
        <div className="mr-4">
          <ScrollLink to="home" smooth={true} duration={500}>
            <img
              className="w-36 sm:w-44 md:w-52 xl:max-w-72 xl:max-h-20 h-auto"
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="logo"
            />
          </ScrollLink>
        </div>
      </div>

      <div className="hidden lg:flex flex-row lg:gap-5 xl:gap-10 pr-4">
        <ul className="flex flex-row lg:text-base xl:text-xl lg:gap-5 xl:gap-8 2xl:gap-12 mainmenu">
          {navList}
        </ul>
        <button className="py-2 px-4 text-nowrap bg-[#FD6F00] text-white border-none lg:text-base xl:text-lg rounded-lg hover:bg-orange-400 mr-7">
          Download CV
        </button>
      </div>
    </div>
  );
}
