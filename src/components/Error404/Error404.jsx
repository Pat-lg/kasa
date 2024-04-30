import React from 'react';
import { NavLink } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className='error'>
      <h1 className='number-404'>404</h1>
      <p className='message-error'>Oups ! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" >
        <p className='link-home'>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Error404;