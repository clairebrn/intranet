import React, { useState, useEffect } from "react";
import * as APIService from "../services/Api.service";
import useToken from "../hooks/useToken";

import UserCard from "../components/UserCard";

import style from "../styles/userProfil.module.css";
import { useSelector } from "react-redux";

const UserProfil = () => {
  const userStock = useSelector((state) => state.user.value);
  return (
    <div>
      <h1 className={style.user_profil_container}>Mon profil</h1>
      <UserCard collaborateur={userStock} />

      <div className={style.btn_modif}>
        <button>Modifier mon profil</button>
      </div>

      <div className={style.form_container}>
        <form action="">
          <div className={style.post_label}>
            <label htmlFor="lastname">Nom</label>
            <br />
            <input type="lastname" name="lastname" id="lastname" />
          </div>
          <div className={style.post_label}>
            <label htmlFor="firstname">Prénom</label>
            <br />
            <input type="firstname" name="firstname" id="firstname" />
          </div>

          <div className={style.post_label}>
            <label htmlFor="city">Ville</label>
            <br />
            <input type="city" name="city" id="city" />
          </div>
          <div className={style.post_label}>
            <label htmlFor="country">Pays</label>
            <br />
            <input type="country" name="country" id="country" />
          </div>

          <div className={style.post_label}>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
          </div>

          <div className={style.post_label}>
            <label htmlFor="phone">Telephone</label>
            <br />
            <input type="phone" name="phone" id="phone" />
          </div>

          <div className={style.post_label}>
            <label htmlFor="birthdate">Anniversaire</label>
            <br />
            <input type="birthdate" name="birthdate" id="birthdate" />
          </div>

          {/* bouton de validation */}
          <div className={style.btn_container}>
            <button type="submit" className={style.btn_update_profil}>
              Valider les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfil;
