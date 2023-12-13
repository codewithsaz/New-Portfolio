import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Project from "./components/Project";
import VChat from "./components/projects/VChat";
import Imaginate from "./components/projects/Imaginate";
import SpendWise from "./components/projects/SpendWise";
import S4Cloud from "./components/projects/S4Cloud";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className=" min-w-full min-h-screen flex justify-center bg-gray-50 text-black dark:bg-[#181229] dark:text-white font-sans antialiased ">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="vchat" element={<VChat />} />
        <Route path="imaginate" element={<Imaginate />} />
        <Route path="spendwise" element={<SpendWise />} />
        <Route path="s4cloud" element={<S4Cloud />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
