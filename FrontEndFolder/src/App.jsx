import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import DireectingPage from "./Components/DirectingPage/DireectingPage";
function App() {
  const UserIsSignedIn = localStorage.getItem("UserToken");

  return (
    <div>
      <NavBar />

      <Routes>
        {UserIsSignedIn && <Route index element={<DireectingPage />} />}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
