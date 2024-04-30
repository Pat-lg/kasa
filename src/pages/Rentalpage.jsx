import React from 'react';
import './Rentalpage.css';
import { useParams } from 'react-router-dom';
import locations from "../data/data.json";

const Rentalpage = () => {
  let {id} = useParams();

  let rentalCard =locations.find((rental) => rental.id === id);
  console.log(rentalCard);
  
  return (
<>
    <figure className="card">
      <img className='card-img' src= {rentalCard.pictures[1]} alt={rentalCard.title} />
    </figure>
    <h2 className='h2-rentalpage'>{rentalCard.title}</h2>
    <h3 className='h3-rentalpage'>{rentalCard.location}</h3>
    </>
  );
};

export default Rentalpage;