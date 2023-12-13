import React, { useState } from "react";
import MainNavbar from "../MainNavbar";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Typography,
  Carousel,
} from "@material-tailwind/react";
import { webProjectData } from "../../constants/data";

const projectDetails = webProjectData[2];

const SpendWise = () => {
  const handleLinkClick = (linkToOpen) => {
    window.open(linkToOpen, "_blank"); // Notify the parent component about the close action
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-2">
      <MainNavbar />
      <div className="w-full flex flex-col items-center  max-w-screen-lg  mt-20 p-2">
        <div className=" w-full flex justify-between items-center p-2 text-black dark:text-white">
          <div className="w-full flex justify-between">
            <div>
              <Typography variant="h5" className=" uppercase ">
                {projectDetails.name}
              </Typography>
              <Typography variant="paragraph" className=" uppercase ">
                {projectDetails.year}
              </Typography>
            </div>
            <Button
              className=" bg-accentSecondary"
              onClick={() => {
                handleLinkClick(projectDetails.github_URL);
              }}
            >
              Github Link
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <Carousel className="rounded-xl w-full aspect-video mt-2 ">
            {projectDetails.thumbnail_URL && (
              <img
                src={projectDetails.thumbnail_URL}
                alt="image 1"
                className=" h-full w-full object-cover"
              />
            )}
            {projectDetails.light_theme_URL && (
              <img
                src={projectDetails.light_theme_URL}
                alt="image 1"
                className=" h-full w-full object-contain"
              />
            )}
            {projectDetails.dark_theme_URL && (
              <img
                src={projectDetails.dark_theme_URL}
                alt="image 2"
                className="h-full w-full object-contain"
              />
            )}
            {projectDetails.demo_video_URL && (
              <iframe
                className="w-full h-full"
                src={projectDetails.demo_video_URL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </Carousel>
          {/* <div className=" p-4 w-full flex justify-center items-center gap-2">
                <Button
                  className=" bg-accentSecondary"
                  onClick={() => {
                    handleLinkClick(projectDetails.github_URL);
                  }}
                >
                  Github Link
                </Button>
                <Button
                      className=" bg-accentSecondary"
                      onClick={() => {
                        handleLinkClick(projectDetails.live_website_URL);
                      }}
                    >
                      Live Demo
                    </Button>
              </div> */}

          <Card className="w-full bg-transparent text-black dark:text-white px-2 shadow-none drop-shadow-none ">
            <CardBody className=" flex flex-col gap-2 p-0 px-2">
              <div className="">
                <Typography variant="paragraph" className=" text-justify">
                  {projectDetails.description}
                </Typography>
              </div>
              <div className="flex flex-wrap justify-center items-center  gap-2 mb-5 ">
                {projectDetails.techStack.map((value, index) => (
                  <Chip
                    size="sm"
                    key={index}
                    value={value}
                    className=" normal-case text-xs font-extralight bg-accentSecondary"
                  />
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SpendWise;
