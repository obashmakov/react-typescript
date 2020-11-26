import React from 'react';

export const NavBar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">
            List of todos
          </a>
        </li>
        <li>
          <a href="/">
            About us
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
