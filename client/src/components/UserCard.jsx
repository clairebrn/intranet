import React, { useEffect, useState } from "react";

import style from "../styles/UserCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ collaborateur }) => {
  return (
    <div className={style.card_container}>
      <div className={style.service}>{collaborateur.service}</div>

      <p>
        <span>{collaborateur.firstname}</span> {collaborateur.lastname}
      </p>

      <div>
        <img src={collaborateur.photo} alt="photo de profil de l'utilisateur" />
      </div>

      <p>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={style.icon}
        ></FontAwesomeIcon>
        {collaborateur.city}, {collaborateur.country}
      </p>

      <p>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={style.icon}
        ></FontAwesomeIcon>
        {collaborateur.email}
      </p>

      <p>
        <FontAwesomeIcon
          icon={faPhone}
          className={style.icon}
        ></FontAwesomeIcon>
        {collaborateur.phone}
      </p>

      <p>
        <FontAwesomeIcon
          icon={faBirthdayCake}
          className={style.icon}
        ></FontAwesomeIcon>
        {collaborateur.birthdate}
      </p>
    </div>
  );
};

export default UserCard;
