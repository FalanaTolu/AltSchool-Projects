import React from "react";
import { SEO, Navigation, Login } from "../components";

const Home = () => {

  return (
    <section>
      <SEO
        title="Home"
        name="Home Page"
        description="Shows implementation of the fake userAuthContext using the context API"
        type="App"
      />
      <Navigation />
      <Login />
    </section>
  );
};

export default Home;
