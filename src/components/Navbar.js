import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
            id="sideNav"
        >
            <Link className="navbar-brand" to="/">
                <span className="d-block">
                    <img
                        className="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src="images/my_avatar.png"
                        alt=""
                    />
                </span>
            </Link>

            <div className="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className="nav-link"
                            exact
                            activeClassName="active"
                        >
                            <i className="fas fa-address-card fa-2x" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/skills"
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className="fas fa-cogs fa-2x" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/experience"
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className="fas fa-history fa-2x" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/projects"
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className="fas fa-images fa-2x" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/interests"
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className="fas fa-thumbs-up fa-2x" />
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className="nav-link"
                            activeClassName="active"
                        >
                            <i className="fas fa-envelope fa-2x" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
