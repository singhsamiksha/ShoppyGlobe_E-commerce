import React from 'react';
import { SyncLoader	 } from 'react-spinners';
import '../stylesheets/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <SyncLoader	 color = "#7364ff" size={30} />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;