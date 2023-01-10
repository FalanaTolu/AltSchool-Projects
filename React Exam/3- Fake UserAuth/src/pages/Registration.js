import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO, Navigation, useAuthContext } from "../components";

const Registration = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { user, setUser, password, setPassword, setAuthed } = useAuthContext();

  const register = (event) => {
    event.preventDefault();
    if (validatePassword()) {
    alert("Registration completed successfully");
    setAuthed(true);
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem(`user`, `${user}`);
    navigate("/dashboard");
  }
};

  const validatePassword = () => {
    setIsValid(true);
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        setIsValid(false);
        alert("Passwords do not match");
      }
    }
    return isValid;
  };

  return (
    <>
      <SEO
        title="Registration"
        name="Registration Page"
        description="Shows registration for new user using fake authentication"
        type="page"
      />
      <Navigation />
      <section className="form-container">
        <form onSubmit={register}>
          <h1>Registration</h1>
          <div className="reg-form-content">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="reg-form-content">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>
          <div className="reg-form-content">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>
          <button
            className="sign-btn"
            id="reg-form-btn"
            name="btn"
            type="submit"
          >
            Submit
          </button>
          <p>
            By Clicking the button you are agreeing to our Terms & Conditions
          </p>
          <p>
            Already have an account?{" "}
            <Link
              style={{ color: "#d87093", textDecoration: "underline" }}
              to="/"
            >
              Log in
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Registration;
