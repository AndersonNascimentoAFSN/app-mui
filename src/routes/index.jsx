import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Collaborators from "../pages/Collaborators";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/collaborators" exact element={<Collaborators />} />
      </Routes>
    </Router>
  );
}
