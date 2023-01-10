import React from 'react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { SEO, Navigation } from '../components';

const Home = () => {
  return (
    <m.section
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="home-section"
    >
      <SEO
        title="Home"
        name="Home Page"
        description="Home page for Github Profile App."
        type="article"
      />
      <Navigation />
      <article className="home-text">
        <div className="home-title-container">
          <m.h1
            initial={{ x: '-250%' }}
            animate={{ x: '0%' }}
            transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
          >
            <span className="icon-container">
              <FaGithub />
            </span>{' '}
            GitHub Profile App
          </m.h1>
        </div>
        <p>
          This app was made to retrieve the details of the user's github account
          with the help of the Github API.
        </p>
        <div className="link">
          <Link to="/user">
            <button>Get Started</button>
          </Link>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
      </article>
    </m.section>
  );
};

export default Home;
