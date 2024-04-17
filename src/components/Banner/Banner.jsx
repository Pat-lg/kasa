import React from 'react';
import './Banner.css';

const Banner = ({ src,overlayText}) => {
  return (
    <div className='banner'>
        <img src= {src} alt="bannière" className='banner-image'/>
        <div className="opacity"></div>
         <h1>{overlayText}</h1>
      </div>
  );
};

export default Banner;