import React, { useState } from "react";
import { SEO, Navigation } from "../components";

export default function Test() {
  const [error, setError] = useState(false);

  if (error)
    throw new Error(
      "Oh! See! Should have warned you. This page tests the error boundary!"
    );

  return (
    <section>
      <Navigation />
      <SEO
        title="Test Error"
        name="Test Error"
        description="Test the error boundary"
      />
      <div className="link">
        <h1>Hello!</h1>
        <button
          onClick={() => {
            setError(true);
          }}
        >
          Click Me!
        </button>
      </div>
    </section>
  );
}
