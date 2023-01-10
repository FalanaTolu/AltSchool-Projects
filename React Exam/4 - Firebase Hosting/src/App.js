import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {
  Home,
  Dashboard,
  NotFound,
  Test,
  Registration,
  Reset,
} from './pages';
import './index.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Loader, FetchData, BackendData } from './components';
import { auth } from './config';

export default function App() {
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      <Loader />;
    }
    if (!user) navigate("/");
    if (user) navigate("/dashboard");
    return;
  }, [loading, user]);


  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />
        <Route path="reset" element={<Reset />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="allsubscribers" element={<FetchData />}/>
          <Route path="premiumsubscribers" element={<BackendData />}/>
        </Route>
        <Route path="test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
