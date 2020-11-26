import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">
            List of todos
          </a>
        </li>
        <li>
          <NavLink to="/about">
            About us
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
