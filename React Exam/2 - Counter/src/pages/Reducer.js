import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Navigation, SEO } from "../components";

const Reducer = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0, value: 0 });

  function countReducer(state, action) {
    switch (action.type) {
      case "set":
        return { ...state, count: action.payload };
        break;
      case "count":
        return { ...state, value: action.payload };
        break;
      default:
        return state;
    }
  }

  return (
    <m.section
      initial={{ x: "-50%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <SEO
        title="Reducer"
        name="Reducer Page"
        description="Shows implementation of the counter using useReducer"
        type="App"
      />
      <Navigation />
      <article>
        <div className="counter-container">
          <div className="counter-label">{state.count}</div>
          <div className="action-btns">
            <button
              onClick={() =>
                dispatch({ type: "set", payload: state.count - 1 })
              }
            >
              Decrement -
            </button>
            <button
              onClick={() =>
                dispatch({ type: "set", payload: state.count + 1 })
              }
            >
              Increment +
            </button>
          </div>
          <div className="action-btns">
            <input
              type="number"
              value={state.value}
              onChange={(e) => {
                // Convert the string value to a number
                dispatch({ type: "count", payload: +e.target.value });
              }}
            />
            <button
              onClick={() => {
                dispatch({ type: "set", payload: state.value });
                dispatch({ type: "count", payload: (state.value = 0) });
              }}
            >
              Set
            </button>
          </div>
          <div className="action-btns">
            <button
              onClick={() =>
                dispatch({ type: "set", payload: (state.count = 0) })
              }
            >
              Reset
            </button>
          </div>
        </div>
        <div className="link">
          <Link to="/">
            <button>Custom Hook Version</button>
          </Link>
        </div>
      </article>
    </m.section>
  );
};

export default Reducer;
