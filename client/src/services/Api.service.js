import axios from "axios";

const instance = axios.create({
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

export function getCollaborateurs() {
  return instance.get("/collaborateurs").then((response) => response.data);
}

export function getRandomCollaborateur() {
  return instance
    .get("/collaborateurs/random")
    .then((response) => response.data);
}
