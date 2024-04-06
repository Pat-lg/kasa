import React from 'react';
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src= "src/images/LOGO-kasa.png" alt="logo Kasa"/>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;