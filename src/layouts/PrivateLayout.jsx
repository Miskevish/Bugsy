import React from "react";
import Sidebar from "../components/Sidebar";
import BugsyPanel from "../components/BugsyPanel";
import { Outlet } from "react-router-dom";
import "./PrivateLayout.css"

const PrivateLayout = () => {
  return (
    <div className="home-wrapper">
      <Sidebar />
      <main className="dashboard">
        <Outlet />
      </main>
      <BugsyPanel mood="feliz" mensaje="¡Sigue así!" />
    </div>
  );
};

export default PrivateLayout;
