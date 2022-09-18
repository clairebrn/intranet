import axios from "axios";

const instance = axios.create({
  // url de l'api utilisée
  baseURL: "http://localhost:7000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  // ajout du token dans la requete (s'il existe)
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function login(credentials) {
  return instance.post("/login", credentials).then((response) => response.data);
}
//fonction pour récupérer les collaborateurs
export function getCollaborateurs() {
  return instance.get("/collaborateurs").then((response) => response.data);
}

//fonction pour récupérer les collaborateurs en random
export function getRandomCollaborateur() {
  return instance
    .get("/collaborateurs/random")
    .then((response) => response.data);
}

//fonction pour mettre à jour le profil de l'utilisateur connecté
export function updateUser(credentials, id, token) {
  return instance
    .put("/collaborateurs/" + id, credentials, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer token`,
      },
    })
    .then((response) => response.data);
}
