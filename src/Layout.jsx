import React from "react";
import MainNavbar from "./components/MainNavbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experince from "./components/Experince";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToAnchor from "./components/ScrollToAnchor";

const Layout = () => {
  return (
    <div className=" w-full  h-full flex flex-col justify-center items-center ">
      <MainNavbar />
      <Intro />
      <Skills />
      <Project />
      <Experince />
      <Contact />
      <Footer />
      <ScrollToAnchor />
    </div>
  );
};

export default Layout;
