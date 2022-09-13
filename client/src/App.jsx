import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./views/Accueil";

function App() {
  // return (
  //   <div className="App">
  //     <Login />
  //   </div>
  // );

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/accueil" element={<Accueil />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
