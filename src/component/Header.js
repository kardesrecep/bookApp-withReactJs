import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headers">
      <div>
        <h1>React Books App</h1>
      </div>
      <Link to="/favorites" className="links">
        <h4>Your favorites</h4>
      </Link>
    </div>
  );
};

export default Header;
