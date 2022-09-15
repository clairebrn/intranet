import React from "react";

import { NavLink } from "react-router-dom";

import style from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import logo from "../assets/logoipsum-271.svg";

const NavBar = () => {
  return (
    <div className={style.body}>
      <ul>
        <li className={style.logo}>
          <NavLink to="/">{/* <img src={logo} alt="logo" /> */}LOGO</NavLink>
        </li>
        <li>
          <NavLink to="/listecollaborateurs">Liste des collaborateurs</NavLink>
        </li>
        <li>
          <NavLink to="/logout">
            <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
