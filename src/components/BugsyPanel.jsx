import React from "react";
import Bugsy from "./Bugsy";

const BugsyPanel = ({ mood = "feliz", mensaje = "¡Sigue así!" }) => {
  return (
    <section className="bugsy-side">
      <div className="bugsy-bubble">{mensaje}</div>
      <Bugsy mood={mood} />
    </section>
  );
};

export default BugsyPanel;
