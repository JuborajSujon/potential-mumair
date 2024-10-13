import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import info from "../data/user_info";

const ProjectTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { projects } = info;

  const allProjectsData = projects;
  const uiProjectsData = projects.filter(
    (project) => project.category_name === "UI/UX"
  );
  const webProjectsData = projects.filter(
    (project) => project.category_name === "Web Design"
  );
  const appProjectsData = projects.filter(
    (project) => project.category_name === "App Design"
  );
  const graphicsProjectsData = projects.filter(
    (project) => project.category_name === "Graphics Design"
  );

  return (
    <div className="mt-10 px-4">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-lg font-semibold flex flex-wrap justify-center items-center gap-4 pt-6 pb-10 md:pb-20">
          <Tab
            className={`btn font-normal text-sm md:text-lg xl:text-xl rounded-md focus-visible:outline-none ${
              tabIndex === 0 ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            } border border-gray-300`}>
            All
          </Tab>
          <Tab
            className={`btn font-normal text-sm md:text-lg xl:text-xl rounded-md focus-visible:outline-none ${
              tabIndex === 1 ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            } border border-gray-300`}>
            UI/UX
          </Tab>
          <Tab
            className={`btn font-normal text-sm md:text-lg xl:text-xl rounded-md focus-visible:outline-none ${
              tabIndex === 2 ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            } border border-gray-300`}>
            Web Design
          </Tab>
          <Tab
            className={`btn font-normal text-sm md:text-lg xl:text-xl rounded-md focus-visible:outline-none ${
              tabIndex === 3 ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            } border border-gray-300`}>
            App Design
          </Tab>
          <Tab
            className={`btn font-normal text-sm md:text-lg xl:text-xl rounded-md focus-visible:outline-none ${
              tabIndex === 4 ? "bg-[#FD6F00] text-white" : "bg-white text-black"
            } border border-gray-300`}>
            Graphics Design
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjectsData.map((project) => (
              <div key={project.id} className="">
                <img
                  src={project.project_photo}
                  alt="project_photo"
                  className="w-full h-[200px] sm:h-[300px] md:h-[480px] object-cover rounded-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-normal mt-6 mb-2 text-[#FD6F00]">
                  {project.category_name}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold ">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {uiProjectsData.map((project) => (
              <div key={project.id} className="">
                <img
                  src={project.project_photo}
                  alt="project_photo"
                  className="w-full h-[200px] sm:h-[300px] md:h-[480px] object-cover rounded-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-normal mt-6 mb-2 text-[#FD6F00]">
                  {project.category_name}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold ">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {webProjectsData.map((project) => (
              <div key={project.id} className="">
                <img
                  src={project.project_photo}
                  alt="project_photo"
                  className="w-full h-[200px] sm:h-[300px] md:h-[480px] object-cover rounded-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-normal mt-6 mb-2 text-[#FD6F00]">
                  {project.category_name}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold ">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {appProjectsData.map((project) => (
              <div key={project.id} className="">
                <img
                  src={project.project_photo}
                  alt="project_photo"
                  className="w-full h-[200px] sm:h-[300px] md:h-[480px] object-cover rounded-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-normal mt-6 mb-2 text-[#FD6F00]">
                  {project.category_name}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold ">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {graphicsProjectsData.map((project) => (
              <div key={project.id} className="">
                <img
                  src={project.project_photo}
                  alt="project_photo"
                  className="w-full h-[200px] sm:h-[300px] md:h-[480px] object-cover rounded-lg"
                />
                <h2 className="text-base sm:text-lg md:text-xl font-normal mt-6 mb-2 text-[#FD6F00]">
                  {project.category_name}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold ">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProjectTab;
