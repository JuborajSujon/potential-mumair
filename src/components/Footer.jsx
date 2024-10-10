import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useGeneralData } from "../hook/useGeneralData";

const Footer = () => {
  const { theme } = useGeneralData();
  console.log(theme);
  return (
    <div className="dark:bg-[#1e1e1e] border-slate-300">
      <footer className="footer footer-center">
        {/* Conditional rendering of the logo */}
        <div>
          <img
            src={theme === "dark" ? "" : ""}
            alt="Logo"
            className="w-32 h-auto"
          />
        </div>
        <nav className="flex flex-col sm:flex-row gap-4">
          <ScrollLink
            to="home"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            About Me
          </ScrollLink>
          <ScrollLink
            to="services"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            Projects
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            Testimonials
          </ScrollLink>
          <ScrollLink
            to="contact"
            offset={-150}
            smooth={true}
            duration={500}
            className="link link-hover">
            Contact
          </ScrollLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link target="_blank" to={"https://www.linkedin.com/in/sujonmiah/"}>
              <FaLinkedin size={24} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/juboraj.sujon/"}>
              <FaFacebookF size={24} />
            </Link>
            <Link target="_blank" to={"https://twitter.com/sujon_miah"}>
              <FaXTwitter size={24} />
            </Link>
          </div>
        </nav>
        <aside className="h-20 bg-[#545454] w-full text-white dark:bg-[#121212] dark:text-white">
          <p className="font-normal text-xl leading-8">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-orange-600">Mumair</span> All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
