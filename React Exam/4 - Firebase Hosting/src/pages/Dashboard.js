import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { SEO, Navigation, Loader } from "../components";
import {
  auth,
  collection,
  db,
  query,
  getDocs,
  signOut,
  where,
} from "../config";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);

  const logout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("You have been signed out");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const getUser = () => {
    getDocs(query(collection(db, "users"), where("uid", "==", user?.uid)))
      .then((querySnapshot) => {
        const data = querySnapshot.docs[0].data();
        setName(data.name);
      })
      .catch((error) => {
        alert(`An error occured while fetching user data. ${error.message}`);
      });
  };

  useEffect(() => {
    if (loading) {<Loader />; return;}
    if (!user) return navigate("/");
    getUser();
  }, [loading, user]);

  return (
    <m.section
      initial={{ y: "50%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <SEO
        title="Dashboard"
        name="Dashboard Page"
        description="Shows implementation of firebase hosting and authentication using the Google Authentication and password methods"
        type="App"
      />
      <Navigation />
      <div className="dashboard-title">
        <h1>Dashboard</h1>
        <button onClick={logout} className="sign-btn log-out-btn">
          Log Out
        </button>
      </div>
      <h2>
        {`Welcome ${name}`}{" "}
        <span>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activated data-link" : "data-link"
            }
            to="/dashboard/allsubscribers"
            end
          >
            All Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activated data-link" : "data-link"
            }
            to="/dashboard"
            end
          >
            Hide
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activated data-link" : "data-link"
            }
            to="/dashboard/premiumsubscribers"
            end
          >
            Premium
          </NavLink>
        </span>
      </h2>
      <Outlet />
    </m.section>
  );
};

export default Dashboard;
