import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Experince = () => {
  return (
    <div
      id="experience"
      className="w-full    flex flex-col  items-center bg-[#dfccfc] dark:bg-[#140b2d] "
    >
      <div className="w-full lg:w-3/4 my-10 lg:my-20 flex justify-center items-center ">
        <div className=" w-full lg:w-3/4 flex flex-col gap-2  h-max p-4">
          <Typography variant="h2" className="text-center">
            Workflow
          </Typography>
          <Timeline className=" text-black dark:text-white mt-10">
            <TimelineItem>
              <TimelineConnector className=" " />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Initial consultation
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  Before starting a new project, I usually have an initial
                  consultation with the client to discuss their needs and goals
                  for the project. This helps me understand the scope of the
                  project and determine the best approach to take.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Proposal and contract
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  After the initial consultation, I create a proposal and
                  contract that outlines the scope of the project, the
                  deliverables, and the timeline. This helps ensure that both
                  the client and I have a clear understanding of the terms of
                  the project
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Design phase
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  During the design phase, I create wireframes and mockups to
                  help visualize the layout and functionality of the website. I
                  work with the client to refine the design until it meets their
                  needs and goals.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Development phase
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 mb-2"
                >
                  I start by crafting and configuring the database, defining
                  data models, and setting up MongoDB. On the backend, I dive
                  into building robust server-side logic and APIs using Node.js
                  and Express.js, ensuring security and implementing
                  authentication.
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600 mb-2"
                >
                  Concurrently, on the frontend using React, I craft a
                  user-friendly interface, integrate state management, and
                  establish seamless communication with the backend through
                  APIs.
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  Throughout this process, I maintain close collaboration with
                  the client, gathering feedback and making necessary
                  adjustments. Thorough documentation and version control are
                  integral parts of my workflow, contributing to the overall
                  success of the project.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Testing and quality assurance
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  Before launching the website, I perform testing, including
                  unit and integration testing to ensure the application's
                  functionality, security and quality is working properly and is
                  free of errors.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />
                <Typography variant="h6" className="leading-none">
                  Launch
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-10">
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  Once the website is complete and has passed testing, I then
                  deploy the application to a carefully chosen hosting solution
                  to make it live for the public to access. Optimize for
                  performance and incorporating monitoring and logging tools.
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader className="h-3">
                <TimelineIcon className="dark:bg-accentPrimary bg-accentSecondary" />

                <Typography variant="h6" className="leading-none">
                  Maintenance
                </Typography>
              </TimelineHeader>
              <TimelineBody>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  After the website is launched, I may continue to work with the
                  client on an ongoing basis to provide maintenance and updates
                  as needed
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Experince;
