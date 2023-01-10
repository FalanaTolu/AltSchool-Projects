import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { SEO, Navigation, Table } from "../components";
import { useAuthContext } from "../components";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("user");
  const { authedValue, setAuthed } = useAuthContext();

  const fakeAsyncLogout = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Logged Out");
      }, 300);
    });
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    fakeAsyncLogout().then((result) => {
      if (result) {
        setAuthed(false);
        sessionStorage.setItem("loggedIn", "false");
        sessionStorage.removeItem("user");
        navigate("/");
      }
    });
  };

  useEffect(() => {
    if (authedValue) {
      navigate("/dashboard");
    }
    if (!authedValue) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, [authedValue]);

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
        description="Shows implementation of the fake userAuthContext using the context API"
        type="App"
      />
      <Navigation />
      <div className="dashboard-title">
        <h1>Dashboard</h1>{" "}
        <button
          onClick={handleLogout}
          className="sign-btn"
          name="signout-btn"
          type="submit"
        >
          Log Out
        </button>
      </div>

      <h2>
        Welcome{" "}
        <span style={{ fontStyle: "italic", color: "grey" }}>{username}</span>
      </h2>
      <Table />
    </m.section>
  );
};

export default Home;
