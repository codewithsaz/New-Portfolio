import React from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import contact from "../assets/contact2.png";

const Contact = () => {
  const handleClick = (linkToOpen) => {
    // Open the link in a new tab
    window.open(linkToOpen, "_blank");
  };
  return (
    <div
      id="contact"
      className="w-full    flex flex-col  items-center dark:bg-gradient-to-b dark:from-[#000000]  dark:to-[#6f41b58c] "
    >
      <div className="w-full lg:w-3/4 my-10 lg:my-20 flex justify-center items-center  ">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className=" w-full  gap-6 mt-10 flex flex-wrap justify-center items-center p-4">
            <div className=" w-full flex justify-center items-center p-2 ">
              <img
                className=" object-fill object-center mr-4 h-60 md:h-auto "
                src={contact}
                alt="nature image"
              />
            </div>
            <div className=" w-full flex flex-wrap justify-center items-center gap-4">
              <div className=" w-full max-w-sm p-4 rounded-lg  md:p-6 bg-[#dfccfc] dark:bg-[#140b2d]">
                <span className="inline-block p-3  rounded-lg bg-accentSecondary dark:bg-accentPrimary text-white">
                  <Icon
                    icon="material-symbols:mail-outline"
                    width="20"
                    height="20"
                  />
                </span>
                <Typography variant="h5" className=" mt-4 text-start">
                  Email
                </Typography>
                <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
                  Send me an email at
                </p>
                <Typography
                  variant="h6"
                  className="mt-2  text-black dark:text-blue-400 cursor-pointer underline"
                  onClick={() => {
                    handleClick("mailto:${connecttosaz@gmail.com}");
                  }}
                >
                  connecttosaz@gmail.com
                </Typography>
              </div>
              <div className=" w-full max-w-sm p-4 rounded-lg bg-[#dfccfc] md:p-6 dark:bg-[#140b2d]">
                <span className="inline-block p-3  rounded-lg bg-accentSecondary dark:bg-accentPrimary text-white">
                  <Icon icon="ri:linkedin-fill" width="20" height="20" />
                </span>
                <Typography variant="h5" className=" mt-4 text-start">
                  LinkedIn
                </Typography>
                <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
                  Connect with me through
                </p>
                <Typography
                  variant="h6"
                  className="mt-2  text-black dark:text-blue-400 cursor-pointer underline"
                  onClick={() => {
                    handleClick("https://www.linkedin.com/in/saz-cherukat/");
                  }}
                >
                  /sazcherukat
                </Typography>
              </div>
              <div className=" w-full max-w-sm p-4 rounded-lg bg-[#dfccfc] md:p-6 dark:bg-[#140b2d]">
                <span className="inline-block p-3  rounded-lg bg-accentSecondary dark:bg-accentPrimary text-white">
                  <Icon icon="simple-icons:x" width="20" height="20" />
                </span>
                <Typography variant="h5" className=" mt-4 text-start">
                  X (twitter)
                </Typography>
                <p className="mt-2 text-md text-gray-800 dark:text-gray-400">
                  Message me on
                </p>
                <Typography
                  variant="h6"
                  className="mt-2  text-black dark:text-blue-400 cursor-pointer underline"
                  onClick={() => {
                    handleClick("https://twitter.com/SazCherukat");
                  }}
                >
                  /sazcherukat
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
