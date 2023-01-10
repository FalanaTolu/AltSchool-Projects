import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  </Router>
);
