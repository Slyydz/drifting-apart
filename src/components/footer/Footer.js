import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"


export const Footer = () => {


    return (
        <footer className="footer">
            <div className="contain-footer">
                <ul className="nav-footer">
                    <li className="nav__item">
                        <Link className="nav__link" to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/vehicles">My Vehicles</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/upcoming">Upcoming Events</Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/past">Past Events</Link>
                    </li>
                </ul>
                <p>&copy; Nashville Software School</p>
            </div>
        </footer>
    )
}