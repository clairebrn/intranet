import React, { useState, useEffect } from "react";
import * as APIService from "../services/Api.service";

import UserCard from "../components/UserCard";
import useToken from "../hooks/useToken";

import style from "../styles/ListeCollaborateurs.module.css";

const ListeCollaborateurs = () => {
  const token = useToken();
  if (!token) return;

  // ici nous récupérons les informations de chaque collaborateurs
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
    <div className={style.list_collaborateurs_container}>
      <div>
        <div className={style.header_container}>
          <h1>Liste des collaborateurs</h1>
        </div>
      </div>
      {/* avec le .map on affiche les informations */}
      {/*  pour chaque collaborateur une carte profil sera crée*/}

      <div className={style.div_deux}>
        {collaborateurs &&
          collaborateurs.map((collaborateur) => {
            return (
              <div className={style.list_card}>
                <UserCard
                  key={collaborateur.id}
                  collaborateur={collaborateur}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListeCollaborateurs;
