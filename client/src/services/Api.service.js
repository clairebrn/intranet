import axios from "axios";

// création d'une instance pour qu'axios effectue les requetes
// on récupère la base d'url qui sera utilisée comme route
// `headers` correspond à des headers spécifiques à utiliser pour la requête.
const instance = axios.create({
  baseURL: "http://localhost:7000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// récupère le token de sécurité
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// fonction pour le login
// méthode post permet de récupérer de nouvelles données
// méthode qui sera appelé sur le formulaire de la page login
// "./login" correspond à l'url de l'appel Api
// callback then pour retourner une réponse
export function login(credentials) {
  return instance.post("/login", credentials).then((response) => response.data);
}

//fonction pour récupérer les collaborateurs en random
// méthode get pour  récupérer et afficher les donnés
// méthode qui sera appelé dans la page accueil
export function getRandomCollaborateur() {
  return instance
    .get("/collaborateurs/random")
    .then((response) => response.data);
}

//fonction pour récupérer les collaborateurs
// méthode get pour  récupérer et afficher les donnés
// méthode qui sera appelé dans la page liste des collaborateurs
// "/collaborateurs" correspond à l'url de l'appel Api
export function getCollaborateurs() {
  return instance.get("/collaborateurs").then((response) => response.data);
}

//fonction pour mettre à jour le profil de l'utilisateur connecté
// méthode put pour modifier les données
// méthode qui sera appelé dans la page profil au submit du formulaire
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
