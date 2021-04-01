//NPM packages
import React from "react";
import { Link } from "react-router-dom";

//Project files
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <nav>
      <img
        className="logo"
        src={logo}
        alt="Logo of the company"
      />
      <ul className="nav-links">
        <Link to="/" >
          <li>Home</li>
        </Link>
        <Link to="/Faq">
          <li>Faq</li>
        </Link>
      </ul>
    </nav>
  );
}