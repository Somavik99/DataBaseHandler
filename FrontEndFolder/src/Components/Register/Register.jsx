import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
function Register() {
  const [RegisterData, setRegisterData] = useState(false);
  const [UserInput, setUserInput] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const Navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((user) => {
      return { ...user, [name]: value };
    });
  };

  const FetchUserData = async () => {
    try {
      const UserDataResponse = await axios.get(
        "http://localhost:4000/register"
      );

      console.log(UserDataResponse.data);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleSubmitForm = (e) => {

    e.preventDefault();
    setRegisterData(true)
    axios
      .post("http://localhost:4000/register", {
        email: UserInput.email,
        userName: UserInput.userName,
        password: UserInput.password,
      })
      .then(() => {
        setUserInput({
          email: "",
          userName: "",
          password: "",
        });
        FetchUserData();
        Navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchUserData();
  }, []);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
   
      <form action="">
      <h1>SignUp</h1>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            name="email"
            id="Email"
            value={UserInput.email}
            onChange={HandleChange}
          />
                    {UserInput.userName === "" && RegisterData === true ? (
            <p style={{ color: "red",fontSize:"1rem" }}>Enter the required Field</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            name="userName"
            id="username"
            value={UserInput.userName}
            onChange={HandleChange}
          />
          {UserInput.userName === "" && RegisterData === true ? (
            <p style={{ color: "red",fontSize:"1rem" }}>Enter the required Field</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="pass"
            value={UserInput.password}
            onChange={HandleChange}
          />
          {UserInput.userName === "" && RegisterData === true ? (
            <p style={{ color: "red",fontSize:"1rem" }}>Enter the required Field</p>
          ) : null}
        </div>
        <button type="submit" onClick={HandleSubmitForm}>Sign Up</button>
      </form>
      <p>Already have an account?<Link to="/Login" style={{fontWeight:"600"}}>LogIn</Link></p>
    </div>
  );
}

export default Register;
