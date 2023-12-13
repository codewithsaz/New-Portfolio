import React, { useCallback } from "react";
import IntroImage from "../assets/IntroImage2.png";
// import MainNavbar from "./MainNavbar";
// import { Icon } from "@iconify/react";
import { Typewriter } from "react-simple-typewriter";

import { Button, Typography } from "@material-tailwind/react";
const Intro = () => {
  const handleClick = (linkToOpen) => {
    // Open the link in a new tab
    window.open(linkToOpen, "_blank");
  };
  return (
    <div className="w-full   flex flex-col  items-center py-4 dark:bg-gradient-to-b dark:from-[#2e1065]  dark:to-[#181229] mb-10   ">
      {/* <MainNavbar /> */}
      <div className=" lg:w-3/4 h-max flex flex-col justify-evenly items-center p-2  lg:flex-row-reverse gap-2 mt-12 pt-10   ">
        <div className="w-full md:w-max px-2 py-2  text-lg md:text-2xl lg:text-2xl flex justify-center items-center   ">
          <img
            className="h-[20em] w-[20em]   object-contain object-center "
            src={IntroImage}
            alt="nature image"
          />
        </div>

        <div className="w-full md:max-w-2xl h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-start p-2 gap-1  ">
          <Typography variant="h3" className="">
            Hi, it's me
          </Typography>
          <Typography variant="h1" className="">
            Saz Cherukat
          </Typography>
          {/* className="text-xl md:text-xl lg:text-3xl" */}
          <div className="w-full flex flex-wrap justify-center items-center lg:justify-start gap-2">
            <Typography variant="h3" className="">
              I'm a
            </Typography>
            <Typography
              variant="h3"
              className=" text-accentSecondary dark:text-accentPrimary"
            >
              <Typewriter
                words={[
                  "Software Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Flutter Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="items-stretch text-center lg:text-start  "
          >
            I'm a versatile software developer passionate about crafting web and
            mobile applications that seamlessly combine{" "}
            <span className=" font-semibold text-accentSecondary dark:text-accentPrimary">
              functionality
            </span>{" "}
            and{" "}
            <span className=" font-semibold text-accentSecondary dark:text-accentPrimary">
              aesthetics
            </span>
            . With a strong drive for learning and a growth mindset, I'm
            motivated to take on new challenges and consistently deliver
            high-quality results.
          </Typography>
          {/* <div className=" w-max h-max flex gap-4 items-center my-5">
            <Icon icon="skill-icons:twitter" width="30" height="30" />
            <Icon icon="skill-icons:instagram" width="30" height="30" />
          </div> */}

          <div className=" w-full md:w-3/4 h-max flex gap-4 items-center my-2">
            <Button
              className=" w-full bg-accentSecondary dark:bg-accentPrimary text-white mt-3 "
              onClick={() => {
                handleClick(
                  "https://drive.google.com/file/d/1DdTffUUr-Fpv_KtflQeGV9-ri7eUIoAh/view?usp=drive_link"
                );
              }}
            >
              View Resume
            </Button>
            <Button
              className=" w-full  bg-accentSecondary dark:bg-accentPrimary text-white mt-3  justify-center "
              onClick={() => {
                handleClick("https://github.com/codewithsaz");
              }}
            >
              Github
            </Button>
          </div>
          <div class="mt-5 grid grid-cols-3 gap-6 divide-blue-200 md:grid-cols-3 md:gap-8 lg:mt-2 lg:grid-cols-3">
            <div class="">
              <div class="flex flex-col justify-center items-center gap-1">
                <h3 class=" text-4xl font-bold leading-none">2+</h3>
                <span class=" text-base font-medium capitalize">
                  Years of Experience
                </span>
              </div>
            </div>

            <div class="">
              <div class="flex flex-col justify-center items-center gap-1">
                <h3 class="text-4xl font-bold leading-none">10+</h3>
                <span class="text-base font-medium capitalize">
                  Project Completed
                </span>
              </div>
            </div>

            <div class="">
              <div class="flex flex-col justify-center items-center gap-1">
                <h3 class="  text-4xl font-bold leading-none">100%</h3>
                <span class="text-base font-medium capitalize">
                  On time Completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
