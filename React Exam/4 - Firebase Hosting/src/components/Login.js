import React, { useEffect, useState } from "react";
import {
  auth,
  provider,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getDocs,
  query,
  collection,
  db,
  where,
  addDoc,
} from "../config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/icons8-google-48.png";
import Loader from "./Loader";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [user, loading, error] = useAuthState(auth);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  // Sign in with With Email and Password
  const LoginWithEmailAndPassword = async (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password).catch(
      (error) => {
        if (error.code === "auth/wrong-password") {
          alert("Please enter the correct password");
        }
        if (error.code === "auth/user-not-found") {
          alert("User not found. Please register or try again.");
        }
        if (error.code === "auth/invalid-email") {
          alert("Please enter a valid email address");
        }
        console.log(error.code, error.message);
      }
    );
  };

  // Sign in with Google
  const SignInWithGoogle = async (event) => {
    event.preventDefault();
    navigate("/dashboard");
    signInWithRedirect(auth, provider).catch((error) => {
      console.log(error.code, error.message);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };

  useEffect(() => {
    // if (user && checked) {
    //   localStorage.setItem("authUser", JSON.stringify(user));
    // }
    if (user) {
      //If the user is new, store the user in firestore database
      getDocs(
        query(collection(db, "users"), where("uid", "==", user.uid))
      ).then((docs) => {
        if (docs.docs.length === 0) {
          addDoc(collection(db, "users"), {
            uid: user.uid,
            name: user.displayName,
            authProvider: "Google",
            email: user.email,
          });
        }
      });
      return navigate("/dashboard");
    }
    //eslint-disable-next-line
  }, [user]);

  return (
    <article className="form-container">
      <form>
        <div>
          <h1>Welcome</h1>
          <p>Login to get the latest updates</p>
        </div>
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="text"
          id="Email"
          placeholder="Email"
          name="Email"
          required
        />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          id="login-password"
          placeholder="Password"
          name="password"
          required
        />
        <button className="sign-btn" onClick={LoginWithEmailAndPassword}>
          SIGN IN
        </button>
        <button
          onClick={SignInWithGoogle}
          className="sign-btn google-signin-btn"
        >
          <img src={image} alt="google icon" />
          Sign in with Google
        </button>
        <div className="login-text">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "-10px",
            }}
          >
            <label>
              <input type="checkbox" name="remember-me"  onChange={(e) => {e.target.checked && setChecked(true);}}/>Remember me 
            </label>
              <Link className="form-links" to="/reset">
                Forgot Password?
              </Link>
          </div>

          <p style={{textAlign: "center"}}>
            Not yet registered?{" "}
            <Link className="form-links" to="/registration">
              Register
            </Link>{" "}
            now.
          </p>
        </div>
      </form>
    </article>
  );
};

export default Login;
