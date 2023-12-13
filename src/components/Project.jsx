import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

import {
  webProjectData,
  mobileProjectData,
  otherProjectData,
} from "../constants/data";
import { useNavigate } from "react-router-dom";

const Project = () => {
  const [activeTab, setActiveTab] = useState("Web");
  const navigate = useNavigate();

  const headerData = [
    {
      label: "Web",
      value: "Web",
    },
    // {
    //   label: "Mobile",
    //   value: "Mobile",
    // },
    // {
    //   label: "Other",
    //   value: "Other",
    // },
  ];

  const techStack = [
    "MongoDB", // Database for storing expenses
    "Express.js", // Web application framework for building RESTful APIs
    "React", // Front-end library for building the user interface
    "Node.js", // Server-side JavaScript runtime for building the back end
    "Redux", // State management library for React applications
    "React Router", // Routing library for handling client-side routing
    "Mongoose", // ODM (Object Data Modeling) for MongoDB in Node.js
    "Passport.js", // Authentication middleware for Node.js
    "Axios", // HTTP client for making API requests in React
    "Bootstrap", // Front-end framework for responsive design
    "JWT (JSON Web Tokens)", // Token-based authentication for securing API
    "Cors", // Middleware for handling cross-origin requests
    "Bcrypt", // Library for hashing and salting passwords
    "Express Validator", // Middleware for input validation on the server
    "Chart.js", // Library for creating charts and data visualization
    "Material-UI", // UI framework for React with Material Design components
    "Redux Thunk", // Middleware for asynchronous actions in Redux
    "Jest and Enzyme", // Testing frameworks for both unit and component testing
  ];

  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [currentProject, setCurrentProject] = useState(null);

  // const handleEditClick = (project) => {
  //   setCurrentProject(project);
  //   setIsDialogOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setIsDialogOpen(false);
  // };
  return (
    <>
      {/* {isDialogOpen && (
        <ProjectModal
          isOpen={true}
          onClose={handleDialogClose}
          projectDetails={currentProject}
        />
      )} */}
      <div id="projects" className="w-full lg:w-3/4 my-10 lg:my-20">
        <div className="w-full flex flex-col gap-2 h-max p-2">
          <Typography variant="h2" className="mb-2 text-center">
            Projects
          </Typography>
          <Tabs value={activeTab} className="mt-10">
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 dark:border-gray-800 bg-transparent p-0 flex flex-auto z-0 "
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-accentSecondary dark:border-accentPrimary shadow-none rounded-none",
              }}
            >
              {headerData.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value
                      ? " text-accentSecondary dark:text-accentPrimary "
                      : "dark:text-white"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <TabPanel
                key="Web"
                value="Web"
                className=" flex flex-wrap justify-evenly items-center gap-4 pb-10 "
              >
                {webProjectData.map((project, index) => (
                  <Card
                    key={index}
                    className="mt-8 max-w-sm  bg-[#dfccfc] dark:bg-accentSecondary dark:text-white hover:cursor-pointer lg:hover:scale-105 transition-all ease-in-out"
                    onClick={() => navigate(project.route)}
                  >
                    <CardHeader
                      color="blue-gray"
                      className="relative min-h-max max-h-60 shadow-black/50 shadow-lg object-cover"
                    >
                      <img
                        src={project.thumbnail_URL}
                        alt="card-image"
                        className=" object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="flex flex-wrap justify-start items-center h-[90px] gap-2 overflow-hidden mb-3">
                        {project.techStack.map((value, index) => (
                          <Chip
                            size="sm"
                            key={index}
                            value={value}
                            className=" normal-case"
                          />
                        ))}
                      </div>

                      <div className=" w-full flex flex-col justify-between items-start text-black dark:text-white">
                        <Typography variant="h5" className=" uppercase ">
                          {project.name}
                        </Typography>
                        <Typography variant="paragraph" className=" text-xs">
                          {project.year}
                        </Typography>
                      </div>
                      <div className="line-clamp-3 mt-2 text-black/80 dark:text-white/80">
                        <Typography variant="paragraph" className="">
                          {project.description}
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </TabPanel>
              <TabPanel
                key="Mobile"
                value="Mobile"
                className=" flex flex-wrap justify-evenly items-center gap-4 pb-10 "
              >
                {mobileProjectData.map((project, index) => (
                  <Card
                    key={index}
                    className="mt-8 max-w-sm  bg-lightaccentSecondary dark:bg-accentSecondary text-white hover:cursor-pointer hover:ring-2 ring-accentPrimary"
                    onClick={() => handleEditClick(project)}
                  >
                    <CardHeader
                      color="blue-gray"
                      className="relative min-h-max max-h-60 shadow-black shadow-lg object-cover"
                    >
                      <img
                        src={project.thumbnail_URL}
                        alt="card-image"
                        className=" object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="flex flex-wrap justify-start items-center h-[90px] gap-2 overflow-hidden mb-3">
                        {project.techStack.map((value, index) => (
                          <Chip
                            size="sm"
                            key={index}
                            value={value}
                            className=" normal-case"
                          />
                        ))}
                      </div>

                      <div className=" w-full flex flex-col justify-between items-start text-white">
                        <Typography variant="h5" className=" uppercase ">
                          {project.name}
                        </Typography>
                        <Typography
                          variant="paragraph"
                          className=" text-xs opacity-80"
                        >
                          {project.year}
                        </Typography>
                      </div>
                      <div className="line-clamp-3 mt-2">
                        <Typography variant="paragraph" className="">
                          {project.description}
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </TabPanel>
              <TabPanel
                key="Other"
                value="Other"
                className=" flex flex-wrap justify-evenly items-center gap-4 pb-10 "
              >
                {otherProjectData.map((project, index) => (
                  <Card
                    key={index}
                    className="mt-8 max-w-sm  bg-lightaccentSecondary dark:bg-accentSecondary text-white hover:cursor-pointer hover:ring-2 ring-accentPrimary"
                    onClick={() => handleEditClick(project)}
                  >
                    <CardHeader
                      color="blue-gray"
                      className="relative min-h-max max-h-60 shadow-black shadow-lg object-cover"
                    >
                      <img
                        src={project.thumbnail_URL}
                        alt="card-image"
                        className=" object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className="flex flex-wrap justify-start items-center h-[90px] gap-2 overflow-hidden mb-3">
                        {project.techStack.map((value, index) => (
                          <Chip
                            size="sm"
                            key={index}
                            value={value}
                            className=" normal-case"
                          />
                        ))}
                      </div>

                      <div className=" w-full flex flex-col justify-between items-start text-white">
                        <Typography variant="h5" className=" uppercase ">
                          {project.name}
                        </Typography>
                        <Typography
                          variant="paragraph"
                          className=" text-xs opacity-80"
                        >
                          {project.year}
                        </Typography>
                      </div>
                      <div className="line-clamp-3 mt-2">
                        <Typography variant="paragraph" className="">
                          {project.description}
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Project;
