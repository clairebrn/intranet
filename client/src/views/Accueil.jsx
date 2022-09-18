import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as APIService from "../services/Api.service";

import UserCard from "../components/UserCard";

import style from "../styles/Accueil.module.css";
import useToken from "../hooks/useToken";

const Accueil = () => {
  const token = useToken();
  if (!token) return;

  const [randomCollaborateur, setRandomCollaborateur] = useState(null);

  const user = useSelector((state) => state.user.value);

  console.log("user accueil ? : ", user);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await APIService.getRandomCollaborateur();
    console.log("réponse du serveur", response);
    setRandomCollaborateur(response);
  }

  return (
    <div className={style.accueil_container}>
      {/* titre */}
      <div className={style.accueil_title}>
        <h1>
          Hello <span>{user?.firstname}</span>
        </h1>
        <p>Aujourd'hui, je te présente : </p>
      </div>
      {/* composant pour afficher une carte profil */}
      {randomCollaborateur && <UserCard collaborateur={randomCollaborateur} />}

      {/* bouton pour afficher un autre profil */}
      <div className={style.btn_container}>
        <button onClick={fetchData} type="submit" className={style.shadow}>
          Next one !
        </button>
      </div>
    </div>
  );
};

export default Accueil;
