import React from 'react';
import { DotLoader } from 'react-spinners';
import '../stylesheets/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <DotLoader color = "Green" size={100} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;