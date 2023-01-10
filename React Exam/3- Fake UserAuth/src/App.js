import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, NotFound, Test, Registration } from "./pages";
import "./index.css";

export default function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="registration" element={<Registration />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
