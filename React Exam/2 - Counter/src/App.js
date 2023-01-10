import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Reducer,
  NotFound,
  Test,
} from './pages';
import './index.css';

export default function App() {

  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reducer" element={<Reducer />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
