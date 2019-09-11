import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import uuid from 'uuid';
import { DataContext } from "../contexts/DataContext";

export default function Navbar() {
    const { menu } = useContext(DataContext);
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
                    {menu.map(item => (
                        <li key={uuid()} className="nav-item">
                            <NavLink
                                to={item.to}
                                className="nav-link"
                                activeClassName="active"
                                exact
                            >
                                <i className={item.fa} />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
