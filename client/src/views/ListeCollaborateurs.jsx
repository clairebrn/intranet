import React, { useState, useEffect } from "react";
import * as APIService from "../services/Api.service";

import UserCard from "../components/UserCard";
import useToken from "../hooks/useToken";

import style from "../styles/ListeCollaborateurs.module.css";

const ListeCollaborateurs = () => {
  const token = useToken();
  if (!token) return;

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
    <div className={style.body_list}>
      <div className={style.header_container}>
        <h1>Liste des collaborateurs</h1>
      </div>

      {collaborateurs &&
        collaborateurs.map((collaborateur) => {
          return (
            <div className={style.test}>
              <UserCard key={collaborateur.id} collaborateur={collaborateur} />
            </div>
          );
        })}
    </div>
  );
};

export default ListeCollaborateurs;
