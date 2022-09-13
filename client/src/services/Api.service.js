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

// function login(token) {
//   var myHeaders = new Headers();
//   myHeaders.append("Cache-Control", "no-cache");
//   myHeaders.append("Accept", "*/*");
//   myHeaders.append("Accept-Encoding", "gzip, deflate");
//   myHeaders.append("Connection", "keep-alive");
//   myHeaders.append("Authorization", `Bearer ${token}`);

//   var raw = "";

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://localhost:7000/api/login", requestOptions)
//     .then((response) => response.json())
//     .then((result) => result)
//     .catch((error) => console.log("error", error));
// }
