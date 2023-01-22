import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, NotFound, Test, Registration, Reset } from "./pages";
import { FetchData, BackendData, PrivateRoutes } from "./components";
import "./index.css";

export default function App() {

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="reset" element={<Reset />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="allsubscribers" element={<FetchData />} />
            <Route path="premiumsubscribers" element={<BackendData />} />
          </Route>
        </Route>
      </Routes>
    </section>
  );
}
