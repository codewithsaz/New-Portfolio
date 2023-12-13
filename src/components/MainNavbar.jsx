import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ToogleThemeButton from "./ToogleThemeButton";
import scklogolight from "../assets/scklogolight.png";
import scklogodark from "../assets/scklogodark.png";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-medium dark:hover:text-accentPrimary hover:text-accentSecondary transition-colors"
      >
        <Link to="/#skills">Skills</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-medium dark:hover:text-accentPrimary hover:text-accentSecondary transition-colors"
      >
        <Link to="/#experience">Workflow</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-medium dark:hover:text-accentPrimary hover:text-accentSecondary"
      >
        <Link to="/#projects">Projects</Link>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-medium dark:hover:text-accentPrimary hover:text-accentSecondary transition-colors"
      >
        <Link to="/#contact">Contact</Link>
      </Typography>
    </ul>
  );
}

const MainNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 w-full lg:w-3/4  ">
      <Navbar className="max-w-full h-max px-6 py-3 text-black bg-gray-50 dark:text-white dark:bg-[#2e1065] drop-shadow-lg  border-0 shadow-none rounded-b-xl rounded-t-none ">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img
              className="h-[2em] w-[2em]   object-fill object-center mr-4 hidden dark:block "
              src={scklogodark}
              alt="nature image"
            />
            <img
              className="h-[2em] w-[2em] mr-4  block dark:hidden   object-fill object-center "
              src={scklogolight}
              alt="nature image"
            />
          </Link>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden  lg:flex lg:gap-2">
            <ToogleThemeButton />
            {/* <Button className=" bg-orange-800 dark:bg-accentPrimary">
              Github
            </Button> */}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <ToogleThemeButton />
          {/* <Button className="mt-2">Github</Button> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
