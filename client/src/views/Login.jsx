import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userInfo } from "../reducers/user.reducer";

import style from "../styles/Login.module.css";
import image from "../assets/logoipsum-271.svg";
import * as APIService from "../services/Api.service";
import { useNavigate } from "react-router-dom";

const Login = (/* { setToken } */) => {
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

  async function login(event) {
    event.preventDefault();

    const response = await APIService.login(formData);
    console.log("réponse du serveur", response);
    //envoyer les informations du user au reducer
    dispatch(userInfo(response.user));
    //stockage du user dans le navigateur
    sessionStorage.setItem("user", JSON.stringify(response.user));

    // stockage du token dans le local storage
    localStorage.setItem("token", response.token);

    // passage du token au useState
    // setToken(response.token);

    navigate("/"); // une fois connecté, on va a l'accueil
  }

  return (
    <div className={style.body}>
      <div className={style.post}>
        <div className={style.post_logo}></div>

        <div className={style.post_info}>
          <h1 className={style.post_title}>Connexion</h1>

          {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}

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
