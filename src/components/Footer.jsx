import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative dark:bg-[#6f41b58c] px-4 pt-20 dark:text-white flex flex-col justify-center items-center">
      {/* <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-b-2  border-[#140b2d] dark:border-[#ffffff]  p-2 mt-10 sm:mt-5 flex justify-center items-center ">
        <img
          className=" object-contain object-center  cursor-pointer hidden dark:block "
          src={scklogodark}
          alt="nature image"
        />
        <img
          className="cursor-pointer block dark:hidden   object-cover object-center "
          src={scklogolight}
          alt="nature image"
        />
      </div> */}
      {/* <nav
        aria-label="Footer Navigation"
        className=" w-full mb-5 flex flex-wrap gap-6  justify-center items-center"
      >
        <a href="#" className="font-medium ">
          Demo
        </a>
        <a href="#" className="font-medium">
          Support
        </a>
        <a href="#" className="font-medium">
          Privacy Policy
        </a>
        <a href="#" className="font-medium">
          Terms & Conditions
        </a>
      </nav> */}
      <p className="py-2 text-center font-bold">
        Crafted with ❤️ by Saz Cherukat
      </p>
      <p className="py-2 pb-5 text-center font-bold">
        © 2023 codewithsaz | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
