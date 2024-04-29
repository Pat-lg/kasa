import React from 'react';
import './Rentalcard.css';
import { useParams } from 'react-router-dom';
import locations from "../../data/data.json";

const Rentalcard = () => {
  let {id} = useParams();

  let rentalCard =locations.find((rental) => rental.id === id);
  console.log(rentalCard);
  
  return (

    <figure className="card">
      <img className='card-img' src="" alt="carousel images appartement" />
      <figcaption className='figure-title'></figcaption>
    </figure>
  );
};

export default Rentalcard;