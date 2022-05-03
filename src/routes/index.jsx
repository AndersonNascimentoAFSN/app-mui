import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Collaborators from "../pages/Collaborators";
import Layout from "../Layout";

export default function RoutesApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/collaborators" element={<Collaborators />} />
      </Route>
    </Routes>
  );
}
