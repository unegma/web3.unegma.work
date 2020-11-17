import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="container">
      <h1>Home Page</h1>
      <p>This is the HomePage.</p>

      <Link to="/page-two" className="button">
        Page Two
      </Link>
    </section>
  );
}

export default HomePage;
