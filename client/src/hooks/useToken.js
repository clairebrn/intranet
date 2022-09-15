import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useToken() {
  const navigate = useNavigate();
  const [localStorageToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!localStorageToken) {
      navigate("/login");
    }
  }, []);

  return localStorageToken;
}
