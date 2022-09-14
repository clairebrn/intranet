import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./views/Login";
import Accueil from "./views/Accueil";
import ListeCollaborateurs from "./views/ListeCollaborateurs";

function App() {
  const [token, setToken] = useState(null);

  const localStorageToken = localStorage.getItem("token");

  console.log("token :", token);

  // if (!token && localStorageToken) {
  //   setToken(localStorageToken);
  // }

  if (!token && !localStorageToken) {
    return <Login setToken={setToken} />;
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route
              path="/listecollaborateurs"
              element={<ListeCollaborateurs />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
