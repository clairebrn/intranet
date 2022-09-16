import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Accueil from "./views/Accueil";
import ListeCollaborateurs from "./views/ListeCollaborateurs";
import NavBar from "./components/NavBar";
import Logout from "./views/Logout";
import UserProfil from "./views/UserProfil";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route
              path="/listecollaborateurs"
              element={<ListeCollaborateurs />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<UserProfil />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
