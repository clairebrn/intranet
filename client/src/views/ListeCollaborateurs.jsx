import React, { useState, useEffect } from "react";
import * as APIService from "../services/Api.service";

import UserCard from "../components/UserCard";
import useToken from "../hooks/useToken";

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
    <div>
      {collaborateurs &&
        collaborateurs.map((collaborateur) => {
          return (
            <UserCard key={collaborateur.id} collaborateur={collaborateur} />
          );
        })}
    </div>
  );
};

export default ListeCollaborateurs;
