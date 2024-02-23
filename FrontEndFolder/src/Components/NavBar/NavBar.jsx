import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const SignedIn = localStorage.getItem("UserToken");
  const Navigate = useNavigate();

  const LoggingOutHandler = () => {
    localStorage.removeItem("UserToken");
    Navigate("/Login");
  };

  const LinkStyles = {
    textDecoration: "none",
    color: "white",
    border: "1px solid white",
    textAlign: "center",
    width: "80px",
    padding: "5px",
    borderRadius: "8px",
    marginLeft: "10px",
  };

  return (
    <div>
      <nav>
        {/* <Link to="/Home">Dashboard</Link> */}
        <h1>Data Table Report</h1>
        <ul>
          {!SignedIn ? (
            <>
              <Link to="/Login" style={LinkStyles}>
                <li>Login</li>
              </Link>

              <Link to="/Register" style={LinkStyles}>
                <li>SignUp</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/" style={LinkStyles}>
                Account
              </Link>
              <button onClick={LoggingOutHandler} className="Log__Out">LogOut</button>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
