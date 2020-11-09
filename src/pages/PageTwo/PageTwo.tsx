import React from 'react';
import { Link } from 'react-router-dom';

export default function PageTwo(): JSX.Element {
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
