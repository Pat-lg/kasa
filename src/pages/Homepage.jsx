import React from 'react';
import Banner from '../components/Banner/Banner';
import locations from "../data/data.json";
import Gallery from '../components/Gallery/Gallery';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <Banner
        src="src/images/Image-source-1.png"
        overlayText="Chez vous, partout et ailleurs"
      />
      <Gallery
        locations={locations}/>
    </>
  );
};

export default Homepage;;