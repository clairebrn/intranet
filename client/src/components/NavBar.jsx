import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/listecollaborateurs">Liste</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </div>
  );
};

export default NavBar;
