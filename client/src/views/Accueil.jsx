import React from "react";
import style from "../styles/Accueil.module.css";

const Accueil = () => {
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
