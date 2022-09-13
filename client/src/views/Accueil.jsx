import React, { useEffect, useState } from "react";
import style from "../styles/Accueil.module.css";
import * as APIService from "../services/Api.service";

const Accueil = () => {
  const [collaborateurs, setCollaborateurs] = useState(null);

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
      <div className={style.accueil_title}>
        <h1>Hello Bernardo</h1>
        <p>Connais-tu machin ?</p>
      </div>
      <div className={style.card_container}>
        <div>
          <img src="https://picsum.photos/100/100" alt="" />
        </div>
        <p>
          <span>John Doe</span> (35ans)
        </p>
        <p>Paris, France</p>
        <p>email</p>
        <p>01 02 03 04 05</p>
        <p>Anniversaire : 17 janvier</p>
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
