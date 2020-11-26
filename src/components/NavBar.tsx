import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <NavLink to="/react-typescript" className="brand-logo">React + TypeScript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/react-typescript">
            List of todos
          </NavLink>
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
