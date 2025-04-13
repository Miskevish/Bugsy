import React from "react";
import bugsyDefault from "../assets/bugsy/bugsy-default.png";
import "./Bugsy.css";

const Bugsy = () => {
  return (
    <div className="text-center mt-4">
      <img src={bugsyDefault} alt="Bugsy" className="imagen-bugsy" />
      <p className="mt-3 fw-bold text-white">¡Hola humano! Soy Bugsy 😸</p>
    </div>
  );
};

export default Bugsy;
