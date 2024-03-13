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

  return (
    <>
      <div id="projects" className="w-full lg:w-3/4 my-10 lg:my-20">
        <div className="w-full flex flex-col gap-2 h-max p-2">
          <h1 className=" text-center text-2xl leading-tight  sm:text-3xl sm:leading-tight lg:text-5xl lg:leading-tight">
            <span class="relative inline-flex justify-center whitespace-nowrap font-light decoration-accentPrimary underline underline-offset-4 sm:no-underline">
              <svg
                class="absolute -bottom-8 hidden  w-full text-accentPrimary sm:block "
                viewBox="10 5 300 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6312 17.089C14.4676 17.089 18.4867 16.911 22.3231 16.733C23.9673 16.733 25.4288 16.555 27.073 16.555C34.0151 16.199 40.9571 15.8429 47.8992 15.4869C56.3028 15.1309 64.5237 14.5969 72.9272 14.2408C84.8018 13.5288 96.6764 12.9948 108.551 12.2827C111.291 12.1047 114.032 12.1047 116.772 11.9267C123.714 11.5707 130.656 11.2147 137.598 11.0366C144.54 10.6806 151.482 10.3246 158.424 10.1466C161.165 9.96859 163.905 9.79058 166.645 9.79058C177.606 9.43455 188.75 9.07853 199.712 8.72251C206.471 8.5445 213.23 8.36649 220.172 8.01047C222.913 8.01047 225.47 7.83246 228.211 7.83246C238.806 7.65445 249.585 7.47644 260.181 7.29843C270.776 7.12042 281.19 6.94241 291.785 6.7644C294.526 6.7644 297.266 6.7644 300.189 6.7644C307.131 6.7644 313.89 6.7644 320.832 6.7644C331.611 6.7644 342.207 6.7644 352.985 6.58639C356.456 6.58639 359.927 6.58639 363.398 6.58639C370.706 6.58639 378.013 6.58639 385.321 6.58639C385.869 6.58639 386.6 6.58639 387.148 6.58639C370.706 6.7644 354.081 6.94241 337.64 7.29843C330.698 7.47644 323.938 7.47644 316.996 7.65445C314.073 7.65445 310.967 7.65445 308.044 7.83246C297.997 8.01047 288.132 8.36649 278.084 8.5445C266.575 8.90052 255.065 9.07853 243.556 9.43455C241.547 9.43455 239.72 9.61256 237.71 9.61256C231.499 9.96859 225.47 10.1466 219.259 10.5026C206.836 11.0366 194.414 11.5707 181.991 12.1047C180.164 12.1047 178.337 12.2827 176.51 12.4607C170.482 12.8168 164.27 13.3508 158.242 13.7068C147.281 14.4188 136.502 15.1309 125.541 15.8429C122.618 16.0209 119.512 16.377 116.589 16.555C109.647 17.089 102.705 17.623 95.763 18.3351C86.9941 19.0471 78.0424 19.7592 69.2735 20.4712C57.0335 21.5393 44.6109 22.6073 32.3709 23.6754C29.4479 23.8534 26.5249 24.2094 23.4193 24.3874C18.1213 24.9215 12.8234 25.4555 7.52554 25.9895C6.97749 25.9895 6.42943 26.3455 6.42943 27.0576C6.42943 27.5916 6.97749 28.1257 7.52554 28.1257C9.53509 28.1257 11.362 28.3037 13.3715 28.3037C13.0061 29.1937 12.8234 29.7277 12.8234 30.2618C12.8234 32.2199 14.4676 34 16.6599 34C31.8228 33.1099 46.8031 32.0419 61.9661 31.3298C75.1195 30.7958 88.2729 30.0838 101.426 29.5497C115.859 28.8377 130.473 28.1257 144.906 27.5916C149.473 27.4136 154.04 27.2356 158.607 26.8796C159.886 26.8796 161.165 26.7016 162.626 26.7016C186.01 26.1675 209.394 25.4555 232.778 24.9215C245.2 24.5654 257.806 24.2094 270.228 24.0314C274.796 23.8534 279.18 23.8534 283.747 23.6754C307.679 23.3194 331.611 22.9634 355.543 22.6073C365.773 22.4293 376.004 22.2513 386.234 22.0733C395.003 21.8953 403.772 21.8953 412.541 21.5393C419.848 21.3613 426.973 21.0052 434.281 20.8272C437.934 20.6492 441.588 20.6492 445.059 20.4712C453.28 19.9372 461.501 19.4031 469.722 18.8691C469.174 19.5812 469.174 20.6492 469.356 21.3613C469.539 22.2513 470.087 22.9633 471.001 23.3194C471.731 23.6754 472.827 24.0314 473.558 23.6754C475.385 22.9634 477.212 22.2513 478.856 21.5393C478.856 21.5393 478.856 21.5393 478.673 21.5393C478.856 21.5393 478.856 21.3613 479.039 21.3613C479.221 21.3613 479.404 21.1832 479.404 21.1832H479.221C480.135 20.8272 481.048 20.4712 482.144 19.9372C483.058 19.5812 484.154 19.0471 485.067 18.6911C486.164 18.1571 487.077 17.623 488.173 17.089C489.269 16.555 490 15.1309 490 13.8848C490 13.1728 489.817 12.6387 489.452 11.9267C489.087 11.2147 488.173 10.3246 487.26 10.1466C486.346 9.96859 485.433 9.79058 484.519 9.79058C484.337 9.79058 484.154 9.79058 483.971 9.79058C483.423 9.79058 482.693 9.79058 482.144 9.96859C480.683 10.1466 479.404 10.3246 477.943 10.3246C476.847 10.3246 475.75 10.5026 474.472 10.5026C471.366 10.6806 468.443 10.8586 465.337 11.2147C464.607 11.2147 463.693 11.3927 462.962 11.3927C463.328 11.0366 463.51 10.6806 463.51 10.3246C463.693 9.96859 463.693 9.61257 463.693 9.25654C463.693 9.07853 463.693 8.72251 463.876 8.5445C463.876 8.18848 463.876 7.83246 463.693 7.65445C463.693 7.65445 463.876 7.65445 463.876 7.47644C464.424 7.12042 464.972 6.7644 465.337 6.05236C465.703 5.51832 465.885 4.80628 465.885 4.09424C465.885 3.3822 465.703 2.84817 465.337 2.13613C465.155 1.95812 464.972 1.60209 464.789 1.42408C464.241 0.890052 463.693 0.712042 463.145 0.534031C462.049 0.17801 460.77 0 459.491 0C458.395 0 457.482 0 456.386 0C454.924 0 453.463 0 452.001 0C449.992 0 447.799 0 445.79 0C440.309 0 434.829 0 429.348 0C424.233 0 418.935 0 413.82 0C409.07 0 404.503 0 399.753 0C380.936 0 362.302 0.17801 343.486 0.356021C329.419 0.534031 315.352 0.712042 301.285 0.712042C295.074 0.712042 288.68 0.890052 282.468 1.06806C268.402 1.42408 254.335 1.60209 240.268 1.95812C236.249 1.95812 232.23 2.13613 228.211 2.13613C225.836 2.13613 223.643 2.31414 221.268 2.31414C207.384 2.84817 193.5 3.3822 179.616 3.91623C175.414 4.09424 171.212 4.27225 166.828 4.45026C164.453 4.45026 162.078 4.62827 159.703 4.80628C145.819 5.51832 132.118 6.23037 118.233 6.94241C111.109 7.29843 103.984 7.65445 96.8591 8.18848C84.6192 8.90052 72.3792 9.61256 60.3219 10.5026C49.7261 11.2147 39.1303 11.7487 28.5345 12.2827C26.8903 12.4607 25.2461 12.4607 23.4193 12.6387C20.679 12.8168 17.9387 12.8168 15.1984 12.9948C12.8234 13.7068 10.2658 13.7068 7.89092 13.7068C7.70823 12.9948 6.97749 12.4607 6.42943 12.6387C4.78525 12.6387 3.32376 12.8168 1.67958 12.9948C0.948839 13.1728 0.218094 13.5288 0.0354073 14.2408C-0.147279 15.1309 0.40078 16.0209 1.13152 16.199C1.86227 16.377 2.59301 16.555 3.32376 16.733C4.05451 16.911 4.60256 16.911 5.33331 16.911C7.16017 17.089 8.80435 17.089 10.6312 17.089ZM438.117 11.3927C440.309 11.3927 442.684 11.3927 444.876 11.3927C445.059 11.9267 445.425 12.2827 445.79 12.6387C444.876 12.6387 443.963 12.8168 443.232 12.8168C441.588 12.8168 439.944 12.9948 438.3 12.9948C430.992 13.1728 423.868 13.5288 416.56 13.7068C413.272 13.8848 409.983 14.0628 406.695 14.0628C401.58 14.0628 396.282 14.2408 391.167 14.2408C379.292 14.4188 367.6 14.5969 355.726 14.7749C332.707 15.1309 309.871 15.4869 286.853 15.8429C270.411 16.0209 253.969 16.555 237.528 17.089C212.865 17.801 188.02 18.3351 163.357 19.0471C158.424 19.2251 153.492 19.4031 148.559 19.7592C134.493 20.4712 120.426 21.0052 106.359 21.7173C92.6573 22.4293 78.7732 22.9634 65.0717 23.6754C63.7929 23.6754 62.5141 23.8534 61.2353 23.8534C64.889 23.4974 68.7254 23.3194 72.3792 22.9633C85.3499 22.0733 98.3206 21.0052 111.291 20.1152C115.859 19.7592 120.426 19.4031 124.81 19.0471C127.185 18.8691 129.56 18.6911 131.752 18.6911C145.454 17.9791 158.972 17.089 172.491 16.377C175.049 16.199 177.789 16.0209 180.347 15.8429C184.183 15.6649 188.02 15.4869 191.673 15.4869C205.557 14.9529 219.442 14.4188 233.326 13.8848C236.431 13.7068 239.537 13.7068 242.46 13.5288C243.191 13.5288 244.104 13.5288 244.835 13.5288C247.027 13.5288 249.219 13.5288 251.229 13.3508C265.113 12.9948 279.18 12.8168 293.064 12.4607C299.458 12.2827 305.852 12.1047 312.246 12.1047C332.89 11.9267 353.716 11.7487 374.36 11.5707C395.917 11.5707 417.108 11.3927 438.117 11.3927Z"
                  fill="currentColor"
                />
                <path
                  d="M38 42C38.5523 42 39 41.5523 39 41C39 40.4477 38.5523 40 38 40C37.4477 40 37 40.4477 37 41C37 41.5523 37.4477 42 38 42Z"
                  fill="currentColor"
                />
              </svg>
              Portfolio
            </span>
          </h1>
          <Tabs value={activeTab} className="">
            {/* <TabsHeader
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
            </TabsHeader> */}
            <TabsBody>
              <TabPanel
                key="Web"
                value="Web"
                className=" mt-10 grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-2 md:text-left"
                // className=" flex flex-wrap justify-evenly items-center gap-4 pb-10 "
              >
                {webProjectData.map((project, index) => (
                  <Card
                    key={index}
                    className="mt-8   bg-[#dfccfc] dark:bg-accentPrimary dark:text-white hover:cursor-pointer lg:hover:scale-105 transition-all ease-in-out"
                    onClick={() => navigate(project.route)}
                  >
                    <CardHeader
                      color="blue-gray"
                      className="relative  shadow-black/50 shadow-lg object-cover"
                    >
                      <img
                        src={project.thumbnail_URL}
                        alt="card-image"
                        className=" object-cover"
                      />
                    </CardHeader>
                    <CardBody>
                      <div className=" w-full flex flex-col justify-between items-start text-black dark:text-white">
                        <Typography variant="h5" className=" uppercase ">
                          {project.name}
                        </Typography>
                        <Typography variant="paragraph" className=" text-xs">
                          {project.year}
                        </Typography>
                      </div>
                      <div className="line-clamp-3 mt-2 text-black/80 dark:text-white/80">
                        <Typography variant="paragraph" className="text-start">
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
