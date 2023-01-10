import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO, Navigation } from "../components";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  // Handle increment
  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  // Handle decrement
  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  // Handle Set Value
  const handleSetValue = (event) => {
    event.preventDefault();
    setCounter(value);
    setValue(0);
  };

  // Handle Reset
  const handleReset = (event) => {
    event.preventDefault();
    setCounter(0);
    setValue(0);
  };

  return (
    <m.section
      initial={{ x: "50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <SEO
        title="Home"
        name="Home Page"
        description="Shows implementation of the counter using custom hooks"
      />
      <Navigation />
      <article>
        <div className="counter-container">
          <div className="counter-label">{counter}</div>
          <div className="action-btns">
            <button onClick={handleDecrement}>Decrement -</button>
            <button onClick={handleIncrement}>Increment +</button>
          </div>
          <div className="action-btns">
            <input
              type="number"
              value={value}
              onChange={(e) => {
                // Convert the string value to a number
                setValue(+e.target.value);
              }}
            />
            <button onClick={handleSetValue}>Set</button>
          </div>
          <div className="action-btns">
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
        <div className="link">
          <Link to="/reducer">
            <button>Reducer Version</button>
          </Link>
        </div>
      </article>
    </m.section>
  );
};

export default Home;
