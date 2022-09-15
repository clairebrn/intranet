import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    navigate("/login");
  }, []);

  return (
    <div>
      <h1>Deconnexion en cours ...</h1>
    </div>
  );
}
