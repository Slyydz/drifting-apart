import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/Drifting-Apart-logo-fixed.png"
import { useHistory } from "react-router";
import "./footer.css"


export const Footer = () => {

    const history = useHistory();

    return (
        <footer className="footer">
            <div className="contain-footer">
            <ul className="nav-footer">
                <li className="nav__item">
                    <Link className="nav__link" to="/vehicles">My Vehicles</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/upcoming">Upcoming Events</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/past">Past Events</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" to="/gallery">Photo Gallery</Link>
                </li>
            </ul>
            <p>&copy; Nashville Software School</p>
            </div>
        </footer>
    )
}