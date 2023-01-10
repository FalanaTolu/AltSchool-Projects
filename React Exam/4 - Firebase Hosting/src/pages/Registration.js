import React from "react";
import { SEO, Navigation, RegistrationForm } from "../components";

const Registration = () => {

  return (
    <section>
      <SEO
        title="Registration"
        name="Registration Page"
        description="Shows registration for new user using email and password method"
        type="page"
      />
      <Navigation />
      <RegistrationForm />
    </section>
  );
};

export default Registration;
