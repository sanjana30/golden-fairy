import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg transparent navcolor">

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" ? "nav-link navcolor active" : "nav-link navcolor"
                        }
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/rooms"
                        className={
                            window.location.pathname === "/rooms" ? "nav-link navcolor active" : "nav-link navcolor"
                        }
                    >
                        Rooms
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/halls"
                        className={
                            window.location.pathname === "/halls" ? "nav-link navcolor active" : "nav-link navcolor"
                        }
                    >
                        Halls
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={
                            window.location.pathname === "/contact" ? "nav-link navcolor active" : "nav-link navcolor"
                        }
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;
