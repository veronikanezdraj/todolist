import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./config/routes";
import HeaderButtons from "./components/Header/HeaderButtons";

export default function App() {
  return (
    <div>
      <ul>
        <HeaderButtons />
      </ul>

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={() => <Navigate to="/local_storage" />} />
      </Routes>
    </div>
  );
}
// () => <Navigate to="/local_storage" />
