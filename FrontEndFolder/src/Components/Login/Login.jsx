import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [LoginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  let [IsLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const HandelLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((log) => {
      return {
        ...log,
        [name]: value,
      };
    });
  };

  const GetLoginCred = async () => {
    try {
      const RespData = await axios.get("http://localhost:4000/register");
      console.log(RespData.data);
    } catch (err) {
      console.log(err);
    }
  };

  const HandelLoginSubmit = async (e) => {
    setIsLoggedIn(true);
    e.preventDefault();
    try {
      const LoginFetch = await axios.post("http://localhost:4000/login", {
        userName: LoginData.userName,
        password: LoginData.password,
      });
      const Token = LoginFetch.data.AuthToken;
      setLoginData({
        userName: "",
        password: "",
      });
      Navigate("/Home");
      localStorage.setItem("UserToken", Token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetLoginCred();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form action="">
        <h1>LogIn</h1>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            name="userName"
            id="username"
            value={LoginData.userName}
            onChange={HandelLoginChange}
          />
          {LoginData.userName === "" && IsLoggedIn === true ? (
            <p style={{ color: "red", fontSize: "1rem" }}>
              Enter the required Field
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="pass"
            value={LoginData.password}
            onChange={HandelLoginChange}
          />
          {LoginData.userName === "" && IsLoggedIn === true ? (
            <p style={{ color: "red", fontSize: "1rem" }}>
              Enter the required Field
            </p>
          ) : null}
        </div>
        <button type="submit" onClick={HandelLoginSubmit}>
          Login
        </button>
      </form>
      <p>
        Do not have an account?
        <Link to="/Register" style={{ fontWeight: "600" }}>
          SignUp
        </Link>
      </p>
    </div>
  );
}

export default Login;
