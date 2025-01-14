import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Welcome.css';

function Welcome() {
  return (
    <>
      <div className="welcome_page">
        <div className="centre-text">
          <h1>Welcome to ShoppyGlobe</h1>
          <p>Your one-stop shop for all your needs!</p>
          <Link to="/products">
            <button>Start Shopping</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;