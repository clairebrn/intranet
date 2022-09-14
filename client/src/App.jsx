import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./views/Accueil";
import { useState } from "react";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
