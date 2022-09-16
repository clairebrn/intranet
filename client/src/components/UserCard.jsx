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
      <p>
        <span>{collaborateur.firstname}</span> {collaborateur.lastname} <br />
      </p>

      {/* <p className={style.service}>{collaborateur.service}</p> */}

      <div>
        <img src={collaborateur.photo} alt="" />
        {/* <img src="https://picsum.photos/100/100" alt="photo de profil" /> */}
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
        {collaborateur.birthdate} - 35ans
      </p>
    </div>
  );
};

export default UserCard;
