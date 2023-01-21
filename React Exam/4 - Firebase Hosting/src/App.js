import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Dashboard, NotFound, Test, Registration, Reset } from "./pages";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { FetchData, BackendData, PrivateRoutes } from "./components";

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
