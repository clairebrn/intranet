import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as APIService from "../services/Api.service";

import style from "../styles/Accueil.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";

const Accueil = () => {
  const [collaborateurs, setCollaborateurs] = useState(null);

  const user = useSelector((state) => state.user.value);
  console.log("user ? : ", user);

  useEffect(() => {
    async function fetchData() {
      const response = await APIService.getCollaborateurs();
      console.log("réponse du serveur", response);
      setCollaborateurs(response);
    }
    fetchData();
  }, []);

  return (
    <div className={style.accueil_container}>
      <div className={style.post_logo}></div>

      <div className={style.accueil_title}>
        <h1>Hello {user?.firstname}</h1>
        <p>Connais-tu machin ?</p>
      </div>
      <div className={style.card_container}>
        {/* <div>
          <img src="https://picsum.photos/100/100" alt="" />
        </div> */}
        <p className={style.animated_font}>
          <span>John</span> Doe
        </p>
        <div>
          <img src="https://picsum.photos/100/100" alt="" />
        </div>
        <p>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Paris, France
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          john.doe@email.com
        </p>

        <p>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01 02 03 04 05
        </p>
        {/* test pour animer l'icone */}
        {/* <p>
          <FontAwesomeIcon icon={faPhone} spin></FontAwesomeIcon> 01 02 03 04 05
        </p> */}
        <p>
          <FontAwesomeIcon icon={faBirthdayCake}></FontAwesomeIcon> 17 janvier
          (35ans)
        </p>
      </div>

      <div className={style.btn_container}>
        <button type="submit" className={style.shadow}>
          Dire bonjour à quelqu'un d'autre
        </button>
      </div>
    </div>
  );
};

export default Accueil;
