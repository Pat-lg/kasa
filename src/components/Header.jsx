import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src="src/images/LOGO-kasa.png" alt="logo Kasa" />
      <nav>
        <ul>
          <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "underline" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;