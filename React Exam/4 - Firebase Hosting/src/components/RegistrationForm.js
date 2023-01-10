import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  collection,
  addDoc,
} from "../config";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          addDoc(collection(db, "users"), {
            uid: user.uid,
            name: `${form.name}`,
            authProvider: "Local",
            email: `${form.email}`,
          });
          alert("User added successfully");
          navigate("/dashboard");
          console.log(user);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("Email already in use");
          }
          if (error.code === "auth/weak-password") {
            alert("Password should be at least 6 characters");
          }
          console.log(error.message);
        });
    }
  };

  const validatePassword = () => {
    setIsValid(true);
    if (form.password !== "" && form.confirmPassword !== "") {
      if (form.password !== form.confirmPassword) {
        setIsValid(false);
        alert("Passwords do not match");
      }
    }
    return isValid;
  };

  return (
    <article className="form-container">
      <form onSubmit={register}>
        <h1>Registration</h1>
        <div className="reg-form-content">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="reg-form-content">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="reg-form-content">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <div className="reg-form-content">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            required
          />
        </div>
        <button className="sign-btn reg-form-btn" name="btn" type="submit">
          Submit
        </button>
        <p>By Clicking the button you are agreeing to our Terms & Conditions</p>
        <p>
          Already have an account?{" "}
          <Link
            className="form-links"
            to="/"
          >
            Log in
          </Link>
        </p>
      </form>
    </article>
  );
};

export default RegistrationForm;
