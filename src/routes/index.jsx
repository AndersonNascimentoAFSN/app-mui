import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Layout from "../Layout";

export default function RoutesApp() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
}
