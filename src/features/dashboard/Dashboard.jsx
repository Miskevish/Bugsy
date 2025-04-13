import React from "react";
import "../dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <h1 className="dashboard-title">Bienvenido de vuelta, Nico!</h1>

      <div className="dashboard-cards">
        <div className="home-card">
          <h4>Daily Progress</h4>
          <p>Tareas Completadas</p>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "75%" }}></div>
          </div>
          <p>Horas de Enfoque</p>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className="home-card">
          <h4>XP</h4>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
