import React, { useState, useEffect } from "react";
import * as APIService from "../services/Api.service";
import useToken from "../hooks/useToken";

import UserCard from "../components/UserCard";

import style from "../styles/userProfil.module.css";
import { useSelector } from "react-redux";

const UserProfil = () => {
  const { value } = useSelector((state) => state.user);
  console.log("user profil modif : ", value);
  const [formData, setFormData] = useState(value);

  const token = localStorage.getItem("token");
  console.log("user profil modif token: ", token);

  //fonction pour récupérer les valeurs du formulaire
  function updateForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  console.log("form :", formData);

  function onSave(event) {
    event.preventDefault();
    const result = APIService.updateUser(formData, value.id, token);
    result
      .then((res) => {
        sessionStorage.setItem("user", JSON.stringify(formData));
        // console.log("reeees : ", res);
      })
      .catch((error) => console.log("err : ", error));
  }

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
            <input
              defaultValue={value.lastname}
              type="text"
              name="lastname"
              id="lastname"
              onInput={updateForm}
            />
          </div>
          <div className={style.post_label}>
            <label htmlFor="firstname">Prénom</label>
            <br />
            <input
              defaultValue={value.firstname}
              type="text"
              name="firstname"
              id="firstname"
              onInput={updateForm}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="city">Ville</label>
            <br />
            <input
              defaultValue={value.city}
              type="text"
              name="city"
              id="city"
              onInput={updateForm}
            />
          </div>
          <div className={style.post_label}>
            <label htmlFor="country">Pays</label>
            <br />
            <input
              type="text"
              name="country"
              id="country"
              onInput={updateForm}
              defaultValue={value.country}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onInput={updateForm}
              defaultValue={value.email}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="phone">Telephone</label>
            <br />
            <input
              type="tel"
              name="phone"
              id="phone"
              onInput={updateForm}
              defaultValue={value.phone}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="gender">Gender</label>
            <br />
            <input
              type="text"
              name="gender"
              id="gender"
              onInput={updateForm}
              defaultValue={value.gender}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="photo">Photo</label>
            <br />
            <input
              type="text"
              name="photo"
              id="photo"
              onInput={updateForm}
              defaultValue={value.photo}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="service">Service</label>
            <br />
            <input
              type="text"
              name="service"
              id="service"
              onInput={updateForm}
              defaultValue={value.service}
            />
          </div>

          <div className={style.post_label}>
            <label htmlFor="birthdate">Anniversaire</label>
            <br />
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              onInput={updateForm}
              defaultValue={value.birthdate}
            />
          </div>

          {/* bouton de validation */}
          <div className={style.btn_container}>
            <button
              onClick={onSave}
              type="submit"
              className={style.btn_update_profil}
            >
              Valider les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfil;
