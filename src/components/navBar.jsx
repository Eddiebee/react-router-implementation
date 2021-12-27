import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul className="nav justify-content-center bg-black p-3">
        <li className="nav-item">
          <NavLink
            className="nav-link text-info text-opacity-75"
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-info text-opacity-75" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link text-info text-opacity-75"
            to="/location"
          >
            Visit Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-info text-opacity-75" to="/give">
            Spread Love
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
