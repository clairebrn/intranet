import React from "react";

import { NavLink } from "react-router-dom";

import style from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {
  const userStock = useSelector((state) => state.user.value);

  return (
    <>
      {/* //condition, si un utilisateur est connecté la navbar s'affichera */}
      {userStock && (
        <div className={style.body}>
          <ul>
            <li className={style.logo}>
              <NavLink to="/">INTRANET</NavLink>
            </li>
            <li>
              <NavLink to="/listecollaborateurs">
                Liste des collaborateurs
              </NavLink>
            </li>
            <li>
              <NavLink to="/profil">Mon profil</NavLink>
            </li>
            <li>
              <NavLink to="/logout">
                <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
