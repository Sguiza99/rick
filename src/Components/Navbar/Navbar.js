import React from "react";
import "./Navbar.css"
import logo from "../../Assets/Logo Home.png"
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav>
        <div className="logo">
        <img alt="logo" src={logo} width="45" height="45" className="d-inline-block align-left " />
        </div>
        <ul className="menu  " >
          <li><Link to="/Personajes">Generador</Link></li>
        </ul>
      </nav>
    )
}
