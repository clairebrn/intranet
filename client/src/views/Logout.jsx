import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../reducers/user.reducer";

export default function Logout() {
  const navigate = useNavigate();
  const disptach = useDispatch();

  useEffect(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();

    disptach(userInfo());

    navigate("/login");
  }, []);

  return (
    <div>
      <h1>Deconnexion en cours ...</h1>
    </div>
  );
}
