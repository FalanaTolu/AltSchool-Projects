import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  Home,
  About,
  NotFound,
  Test,
  Profile,
  Repo,
  Activity,
  Following,
  Followers,
  SingleRepo,
} from './pages';
import './index.css';

export default function App() {
  const location = useLocation();
  const background = Location.state && Location.state.background;


  return (
    <section>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route exact path="/user" element={<Profile />}>
          <Route exact path="/user/repo" element={<Repo />}>
            <Route exact path=":repoid" element={<SingleRepo />} />
          </Route>
          <Route exact path="/user/activity" element={<Activity />} />
          <Route exact path="/user/following" element={<Following />} />
          <Route exact path="/user/followers" element={<Followers />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route path=":repoid" element={<SingleRepo />} />
        </Routes>
      )}
    </section>
  );
}
