import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import * as APIService from "../services/Api.service";

import style from "../styles/UserCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ collaborateur }) => {
  // const [collaborateurs, setCollaborateurs] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await APIService.getCollaborateurs();
  //     console.log("réponse du serveur", response);
  //     setCollaborateurs(response);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className={style.card_container}>
      <p>
        <span>{collaborateur.firstname}</span> {collaborateur.lastname}
      </p>

      <div>
        <img src="https://picsum.photos/100/100" alt="photo de profil" />
      </div>

      <p>
        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Paris, France
      </p>

      <p>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> john.doe@email.com
      </p>

      <p>
        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01 02 03 04 05
      </p>

      <p>
        <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon> 17 janvier
        (35ans)
      </p>
    </div>
  );
};

export default UserCard;
