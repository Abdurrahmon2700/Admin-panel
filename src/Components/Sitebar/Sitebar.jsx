import React from "react";
import { NavLink } from "react-router-dom";

function Sitebar(props) {
  return (
    <div>
      <ul className="d-flex flex-column nav nav-pills pe-3">
        <li>
          <NavLink
            to="/Home"
            className="nav-link text-dark"
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Restaurant"
            className="nav-link text-dark"
            aria-current="page"
          >
            Restaurant
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Branch"
            className="nav-link text-dark"
            aria-current="page"
          >
            Branch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Users"
            className="nav-link text-dark"
            aria-current="page"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Orders"
            className="nav-link text-dark"
            aria-current="page"
          >
            Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sitebar;
