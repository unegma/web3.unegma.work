import React from 'react';
import { Link } from 'react-router-dom';

function PageTwo() {
  return (
    <section className="container">
      <h1>Page Two</h1>
      <p>This is Page Two.</p>

      <Link to="./" className="button">
        Home
      </Link>
    </section>
  );
}

export default PageTwo;
