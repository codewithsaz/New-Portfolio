import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Card,
  CardBody,
  Chip,
  Typography,
  Carousel,
} from "@material-tailwind/react";

const ProjectModal = ({ isOpen, onClose, projectDetails }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    onClose(); // Notify the parent component about the close action
  };

  const handleLinkClick = (linkToOpen) => {
    window.open(linkToOpen, "_blank"); // Notify the parent component about the close action
  };

  return (
    <Dialog
      open={isOpen}
      handler={handleDialogClose}
      className="w-full h-full bg-gray-50 text-black dark:bg-[#181229] dark:text-white max-h-[80svh] overflow-auto"
      size="md"
    >
      <DialogBody className=" w-full">
        <div className=" w-full flex justify-between items-center p-2 text-black dark:text-white">
          <div>
            <Typography variant="h5" className=" uppercase ">
              {projectDetails.name}
            </Typography>
          </div>
          <button
            className=" bg-accentSecondary py-1 px-2 rounded-md text-xs"
            onClick={handleDialogClose}
          >
            X
          </button>
        </div>

        <Carousel className="rounded-xl w-full aspect-video mt-2 ">
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
        <div className=" p-4 w-full flex justify-center items-center gap-2">
          <Button
            className="w-full bg-accentSecondary"
            onClick={() => {
              handleLinkClick(projectDetails.github_URL);
            }}
          >
            View Code
          </Button>
          <Button
            className="w-full bg-accentSecondary"
            onClick={() => {
              handleLinkClick(projectDetails.live_website_URL);
            }}
          >
            Live Demo
          </Button>
        </div>
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
      </DialogBody>
    </Dialog>
  );
};

export default ProjectModal;
