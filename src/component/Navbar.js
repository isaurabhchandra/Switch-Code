import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


export default function NavBar() {
let user = JSON.parse(localStorage.getItem('user-info'))
console.warn(user)
  return (
    <div className="nav">
      <Link to="/" className="logo-name">
        Switch Code
      </Link>
      <ul>
        <li className="btnAbout">
          <Link to="/About" className="about">About</Link>
        </li>
        <li className="btnSignup">
          <Link to="/Signup" className="nav-signup">Signup</Link>
        </li>
        <li className="profile">
          profile
     
        </li>

      </ul>
    </div>
  );
}
