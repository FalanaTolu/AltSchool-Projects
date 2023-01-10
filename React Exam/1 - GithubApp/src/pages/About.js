import React from 'react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO, Navigation } from '../components';

const About = () => {
  return (
    <m.section
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className="about-section"
    >
      <SEO
        title="About"
        name="About Page"
        description="About page for Github Profile App."
        type="Info Page"
      />
      <Navigation />
      <h1>About Page</h1>
      <p>
        This app displays the user's Github profile information. This was
        achieved by fetching data containing the details of the user's Github
        account from the Github API.
      </p>
      <p>
        The information displayed includes the user's repositories, the user's
        most recent activities, a snapshot of Github accounts following the user
        and accounts the user follows.
      </p>
      <p>
        Only information available publicly through the Github API was used.
      </p>
      <div className="link">
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
      <div className="about-image">
        <img
          src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png?width=480&format=webpll"
          alt="astrocat"
        />
        <p>credit: www.github.com</p>
      </div>
    </m.section>
  );
};

export default About;
