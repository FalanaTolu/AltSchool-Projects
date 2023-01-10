import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { user, password, authedValue, setAuthed } = useAuthContext();
  const [username, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    fakeAsyncLogin()
    .then((result) => {
      if (result && user === username && password === pass) {
        setAuthed(true);
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem(`user`, `${user}`);
        navigate("/dashboard");
      } else {
        alert("User not authorized");
      }
    })
  };

  const fakeAsyncLogin = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('new Login');
      }, 300);
    });
  }

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
    <section className="form-container">
      <form onSubmit={handleLogin}>
        <div>
          <h1 style={{ textAlign: "center" }}>Welcome</h1>
          <p>Login to get the latest updates</p>
        </div>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          required
        />
        <input
          type="password"
          id="login-password"
          placeholder="Password"
          name="password"
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          required
        />
        <button className="link-btn" name="btn" type="submit">
          SIGN IN
        </button>
        <p>
          Not yet registered?{" "}
          <Link
            style={{ color: "#d87093", textDecoration: "underline" }}
            to="/registration"
          >
            Register Now!
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
