import React from "react";
import { SEO, Navigation, Login } from "../components";

const Home = () => {

  return (
    <section>
      <SEO
        title="Home"
        name="Home Page"
        description="Shows implementation of firebase hosting and authentication using the Google Authentication and password methods"
        type="page"
      />
      <Navigation />
      <Login />
    </section>
  );
};

export default Home;
