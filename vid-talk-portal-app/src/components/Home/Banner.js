import React from 'react';
import '../../home.css';


const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>A place to gather</p>
      </div>
    </div>
  );
};

export default Banner;