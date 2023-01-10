import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, SEO } from "../components";
import { auth, sendPasswordResetEmail } from "../config";

function Reset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  if (email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset link sent! Check your inbox");
      navigate("/");
    })
    .catch((error) => {
      console.error(error);
      // alert(error.message);
    });
  }
  return (
    <section>
      <SEO
        title="Reset"
        name="Reset Page"
        description="Email reset page"
        type="page"
      />
      <Navigation />
      <article className="form-container">
        <form onSubmit={() => sendPasswordResetEmail}>
          <h1>Send password reset email</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="reg-form-content"
            placeholder="Email"
            name="Email"
            required
          />
          <button className="sign-btn reg-form-btn" type="submit">
            Reset
          </button>
          <div>
            Don't have an account?{" "}
            <Link className="form-links" to="/registration">
              Register
            </Link>{" "}
            now.
          </div>
        </form>
      </article>
    </section>
  );
}
export default Reset;
