import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {

  return (
    <section className="container">
      <h1>Web3 Stuff</h1>
      <p>This is the HomePage.</p>

      <Link to="/page-two" className="button">
        MetaMask playground
      </Link>

      <br/>

      <Link to="/page-three" className="button">
        Zokrates playground
      </Link>
    </section>
  );
}

export default HomePage;
