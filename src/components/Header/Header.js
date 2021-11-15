import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header>
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/discographie">
            <li>Discographie</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
