import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css"
import logo from "../images/Drifting-Apart-logo-fixed.png"

export const Dashboard = () => {
  return (
    <>
      <div className="main-content">

        <div className="dash-content">
          <img className="dash-image" src={logo} alt="Drifting Apart Logo" />
          <h1>Welcome To Drifting Apart!</h1>
          <div className="events-vehicles">
            <li className="dash__item">
              <Link className="nav__link" to="/vehicles">My Vehicles</Link>
            </li>
            <li className="dash__item">
              <Link className="nav__link" to="/upcoming">Upcoming events</Link>
            </li>
          </div>

          <div className="past-gallery">
            <li className="dash__item">
              <Link className="nav__link" to="/past">Past Events</Link>
            </li>
            <li className="dash__item">
              <Link className="nav__link" to="/gallery">Photo Gallery</Link>
            </li>
          </div>
        </div>

      </div>
    </>
  )
}