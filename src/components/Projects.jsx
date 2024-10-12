import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectTab from "./ProjectTab";

const Projects = () => {
  return (
    <div>
      <SectionTitle
        title="My Projects"
        desc="A collection of user-focused design solutions that emphasize intuitive navigation, seamless interactions, and enhanced user experiences across web and mobile platforms."
      />

      <ProjectTab />
    </div>
  );
};

export default Projects;
