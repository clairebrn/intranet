import React, { useEffect, useState } from "react";
import style from "../styles/Accueil.module.css";
import * as APIService from "../services/Api.service";

const Accueil = () => {
  const [collaborateurs, setCollaborateurs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await APIService.getCollaborateurs();

      console.log("réponse dy serveur", response);

      setCollaborateurs(response);
    }

    fetchData();
  }, []);

  return (
    <div className={style.accueil_container}>
      <div className={style.accueil_title}>
        <h1>Hello xxx !!</h1>
        <h2>Connais-tu xxx ?</h2>
      </div>
      <div className={style.card_container}>
        <div>
          <img src="https://picsum.photos/100/100" alt="" />
        </div>
        <p>John Doe (35ans)</p>
        <p>Paris, France</p>
        <p>email</p>
        <p>01 02 03 04 05</p>
        <p>Anniversaire : 17 janvier</p>
      </div>
      <button>Dire bonjour à quelqu'un d'autre</button>
    </div>
  );
};

export default Accueil;
