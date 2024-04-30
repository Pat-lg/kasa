import React from 'react';
import './Banner.css';

const Banner = ({ src, overlayText }) => {

  if (overlayText) {
    return (
      <div className='banner'>
        <img src={src} alt="bannière" className='banner-image' />
        <div className="opacity"></div>
        <h1 className='h1-banner'>{overlayText}</h1>
      </div>
    );
  };

  return (
    <div className='banner'>
      <img src={src} alt="bannière" className='banner-image' />
      <div className="opacity"></div>
    </div>
  );
};

export default Banner;