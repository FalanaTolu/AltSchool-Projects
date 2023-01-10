import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Navigation } from '../components';

const NotFound = () => {
  return (
    <section>
      <SEO
        title="Page Not Found"
        name="Page Not Found"
        description="Error 404: Page cannot be located"
      />
      <Navigation />
      <h1>404</h1>
      <p> Page Not Found</p>
      <div className="link">
        <Link to="/">
          <button>Back Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
