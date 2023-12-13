import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ToggleThemeButton = () => {
  const [darkMode, setDarkMode] = useState(true); // Set dark mode as default

  const toggleDarkMode = () => {
    // Toggle the darkMode state
    setDarkMode(!darkMode);
  };

  // Add the 'dark' class to the HTML element conditionally based on darkMode state
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="flex items-center m-0">
      <button
        className=" text-accentSecondary hover:bg-accentSecondary hover:text-white  dark:text-accentPrimary p-1 rounded dark:hover:bg-accentPrimary dark:hover:text-white"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" /> // Display sun icon in dark mode
        ) : (
          <MoonIcon className="w-6 h-6" /> // Display moon icon in light mode
        )}
      </button>
    </div>
  );
};

export default ToggleThemeButton;
