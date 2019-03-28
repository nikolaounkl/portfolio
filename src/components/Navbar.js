import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <Link className="navbar-brand" to="/">
            <span className="d-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="my_avatar.png" alt="" />
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link" exact activeClassName="activeLink">
                    <i className="fas fa-home" />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    );
}