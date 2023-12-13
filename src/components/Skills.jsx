import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

const frontendTech = [
  {
    icon: <Icon icon="logos:html-5" />,
    name: "HTML5",
  },
  {
    icon: <Icon icon="logos:css-3" />,
    name: "CSS3",
  },
  {
    icon: <Icon icon="logos:javascript" />,
    name: "JavaScript",
  },
  {
    icon: <Icon icon="logos:react" />,
    name: "React",
  },
  {
    icon: <Icon icon="devicon:nextjs" />,
    name: "NextJS",
  },
  {
    icon: <Icon icon="logos:sass" />,
    name: "Sass",
  },
  {
    icon: <Icon icon="skill-icons:bootstrap" />,
    name: "Bootstrap",
  },
  {
    icon: <Icon icon="devicon:tailwindcss" />,
    name: "TailwindCSS",
  },
  {
    icon: <Icon icon="skill-icons:jquery" />,
    name: "jQuery",
  },
  {
    icon: <Icon icon="logos:flutter" />,
    name: "Flutter",
  },
  // {
  //   icon: <Icon icon="logos:dart" />,
  //   name: "Dart",
  // },
  // Add more technologies as needed
];

const backendTech = [
  {
    icon: <Icon icon="logos:nodejs" />,
    name: "Node.js",
  },
  {
    icon: <Icon icon="skill-icons:expressjs-dark" />,
    name: "Express.js",
  },
  {
    icon: <Icon icon="skill-icons:typescript" />,
    name: "TypeScript",
  },
  {
    icon: <Icon icon="logos:redis" />,
    name: "Redis",
  },
  {
    icon: <Icon icon="logos:graphql" />,
    name: "GraphQL",
  },
  {
    icon: <Icon icon="skill-icons:jest" />,
    name: "Jest",
  },
  {
    icon: <Icon icon="logos:mocha" />,
    name: "Mocha",
  },
  {
    icon: <Icon icon="logos:aws" />,
    name: "AWS",
  },
  {
    icon: <Icon icon="logos:azure" />,
    name: "Azure",
  },
  // Add more technologies as needed
];
const databaseTech = [
  {
    icon: <Icon icon="skill-icons:mongodb" />,
    name: "MongoDB",
  },
  {
    icon: <Icon icon="logos:mysql" />,
    name: "MySQL",
  },
  {
    icon: <Icon icon="logos:postgresql" />,
    name: "PostgreSQL",
  },

  {
    icon: <Icon icon="logos:sqlite" />,
    name: "SQLite",
  },
  {
    icon: <Icon icon="logos:firebase" />,
    name: "Firebase",
  },
  {
    icon: <Icon icon="skill-icons:appwrite" />,
    name: "Appwrite",
  },
  {
    icon: <Icon icon="skill-icons:docker" />,
    name: "Docker",
  },
  {
    icon: <Icon icon="logos:kubernetes" />,
    name: "Kubernetes",
  },
  // Add more database technologies as needed
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full  flex flex-col  items-center  dark:bg-transparent "
    >
      <div className="w-full lg:w-3/4 h-max flex flex-col  justify-center items-center p-2 gap-2 my-10 lg:my-20 ">
        <Typography variant="h2" className="text-center">
          Skills
        </Typography>
        <Typography variant="paragraph" className="text-center">
          Here are some of my skills that i have acquired over the years.
        </Typography>
        <div className="w-full h-max flex flex-wrap justify-evenly items-center p-2 gap-2 mt-4">
          <Card className="mt-6 max-w-sm bg-lightaccentSecondary dark:bg-accentSecondary   text-white ">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-center">
                Frontend
              </Typography>
              <div className="w-full h-max flex flex-wrap justify-center items-center gap-1">
                {frontendTech.map((item, index) => (
                  <p
                    className=" border-2 border-white py-2 px-2 rounded-lg  flex justify-center items-center gap-2"
                    key={index}
                  >
                    {item.icon}
                    {item.name}
                  </p>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 max-w-sm bg-lightaccentSecondary dark:bg-accentSecondary text-white ">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-center">
                Backend
              </Typography>
              <div className="w-full h-max flex flex-wrap justify-center items-center gap-1">
                {backendTech.map((item, index) => (
                  <p
                    className=" border-2 border-white py-2 px-2 rounded-lg  flex justify-center items-center gap-2"
                    key={index}
                  >
                    {item.icon}
                    {item.name}
                  </p>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 max-w-sm bg-lightaccentSecondary dark:bg-accentSecondary text-white ">
            <CardBody>
              <Typography variant="h5" className="mb-2 text-center">
                Database and DevOps
              </Typography>
              <div className="w-full h-max flex flex-wrap justify-center items-center gap-1">
                {databaseTech.map((item, index) => (
                  <p
                    className=" border-2 border-white py-2 px-2 rounded-lg  flex justify-center items-center gap-2"
                    key={index}
                  >
                    {item.icon}
                    {item.name}
                  </p>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
