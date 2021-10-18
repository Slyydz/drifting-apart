import React from "react"
import { Link } from "react-router-dom"
import logo from "../../images/Drifting-Apart-logo-fixed.png"
import { useHistory } from "react-router";
import "../nav/NavBar.css"


export const NavBar = () => {

const history = useHistory();  

  return (
    <nav className="nav__flex">
      <Link to="/"> <img className="logo" src={logo} alt="Drifting Apart Logo" /></Link>
      <ul className="nav">
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
      <button className="nav__button" onClick={() => {
            sessionStorage.removeItem("drifting_user");
            history.push("/login")
        }}>Logout</button>
    </nav>
  )
}