import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userInfo } from "../reducers/user.reducer";

import style from "../styles/Login.module.css";
import image from "../assets/logoipsum-271.svg";
import * as APIService from "../services/Api.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //fonction pour récupérer les valeurs du formulaire login
  function updateForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  console.log("formdata :", formData);

  // fonction pour l'authentification
  // si le login et mdp sont correct alors nous serons connecté
  // récupérons le token d'authentification et les informations du user
  async function login(event) {
    event.preventDefault();
    const response = await APIService.login(formData);
    console.log("réponse du serveur", response);

    //envoyer les informations du user au reducer
    dispatch(userInfo(response.user));

    //stockage du user dans le navigateur
    // sera utilisé sur la page d'accueil et la page profil
    sessionStorage.setItem("user", JSON.stringify(response.user));

    // stockage du token dans le local storage
    localStorage.setItem("token", response.token);

    navigate("/"); // une fois connecté, je suis redirigé vers la page l'accueil
  }

  return (
    <div className={style.body}>
      <div className={style.post}>
        <div className={style.post_logo}></div>

        <div className={style.post_info}>
          <h1 className={style.post_title}>Connexion</h1>

          <div className={style.post_form}>
            <form action="" onSubmit={login}>
              <div className={style.post_label}>
                <label htmlFor="email">Login</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  onInput={updateForm}
                />
              </div>
              <div className={style.post_label}>
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="password"
                  onInput={updateForm}
                />
              </div>
              <div className={style.btn_container}>
                <button type="submit" className={style.shadow}>
                  Let's go !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
