import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as APIService from "../services/Api.service";

import UserCard from "../components/UserCard";

import style from "../styles/Accueil.module.css";

const Accueil = () => {
  const [collaborateurs, setCollaborateurs] = useState(null);

  const user = useSelector((state) => state.user.value);
  // console.log("user ? : ", user);

  useEffect(() => {
    async function fetchData() {
      const response = await APIService.getCollaborateurs();
      // console.log("réponse du serveur", response);
      setCollaborateurs(response);
    }
    fetchData();
  }, []);

  return (
    <div className={style.accueil_container}>
      {/* logo */}
      <div className={style.post_logo}></div>
      {/* titre */}
      <div className={style.accueil_title}>
        <h1>
          Hello <span>{user?.firstname}</span>
        </h1>
        <p>Aujourd'hui, je te présente : </p>
      </div>
      {/* composant pour afficher une carte profil */}
      <UserCard />
      {/* bouton pour afficher un autre profil */}
      <div className={style.btn_container}>
        <button type="submit" className={style.shadow}>
          Dire bonjour à quelqu'un d'autre
        </button>
      </div>
    </div>
  );
};

export default Accueil;
