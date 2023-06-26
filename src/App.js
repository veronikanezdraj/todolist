import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./config/routes";
import Header from "./components/Header/Header";
import styled from "styled-components";
const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export default function App() {
  return (
    <StyledBody>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={() => <Navigate to="/local_storage" />} />
      </Routes>
    </StyledBody>
  );
}
// () => <Navigate to="/local_storage" />
