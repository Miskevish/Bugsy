import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import PrivateLayout from "./layouts/PrivateLayout";

// Vistas públicas
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";

// Vistas privadas
import Dashboard from "./features/dashboard/Dashboard";
import Tasks from "./features/tasks/Tasks";
import Focus from "./features/focus/Focus";
import Profile from "./features/profile/Profile";

function App() {
  return (
    <Routes>
      {/* 🟣 Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔐 Rutas privadas (requieren sesión activa) */}
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="focus" element={<Focus />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
