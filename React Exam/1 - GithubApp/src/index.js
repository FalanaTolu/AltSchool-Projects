import React, { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { HelmetProvider } from "react-helmet-async";
import { Loader } from "./components";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  </Router>
);
