import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectTab from "./ProjectTab";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects" id="projects">
      <div className="py-16 px-6 md:py-20">
        <SectionTitle
          title="My Projects"
          desc="A collection of user-focused design solutions that emphasize intuitive navigation, seamless interactions, and enhanced user experiences across web and mobile platforms."
        />

        <ProjectTab />
      </div>
    </Element>
  );
};

export default Projects;
