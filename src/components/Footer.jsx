import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useGeneralData } from "../hook/useGeneralData";
import LightLogo from "../assets/logo-light.png";
import DarkLogo from "../assets/logo-dark.png";

const Footer = () => {
  const { theme } = useGeneralData();
  return (
    <div className="dark:bg-[#1e1e1e] bg-[#f8f8f8] border-slate-300">
      <footer className="grid grid-cols-1 justify-items-center">
        <div className="flex flex-col justify-center items-center pt-10 md:pt-28 pb-16">
          {/* Conditional rendering of the logo */}
          <div className="mb-16 md:mb-20">
            <img
              src={theme === "dark" ? DarkLogo : LightLogo}
              alt="Logo"
              className="w-44 md:w-72 h-auto"
            />
          </div>
          <nav className="flex flex-row flex-wrap justify-center gap-5 md:gap-11 text-lg md:text-xl mb-16 md:mb-24 tracking-wide px-6">
            <ScrollLink
              to="home"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              About Me
            </ScrollLink>
            <ScrollLink
              to="services"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              Services
            </ScrollLink>
            <ScrollLink
              to="projects"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              Projects
            </ScrollLink>
            <ScrollLink
              to="testimonials"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact"
              offset={-150}
              smooth={true}
              duration={500}
              className="link link-hover underline-offset-4">
              Contact
            </ScrollLink>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-9">
              <a href="#" target="_blank">
                <FaFacebook className="text-2xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaTwitter className="text-2xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaInstagram className="text-2xl md:text-4xl hover:text-orange-600" />
              </a>
              <a href="#" target="_blank">
                <FaLinkedin className="text-2xl md:text-4xl hover:text-orange-600" />
              </a>
            </div>
          </nav>
        </div>
        <aside className="h-20 bg-[#545454] w-full text-white dark:bg-[#121212] dark:text-white flex justify-center items-center px-4">
          <p className="font-light text-base md:text-xl leading-8 tracking-wider">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-orange-600">Mumair</span> All rights
            reserved , Inc.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
