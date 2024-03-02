import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useEffect } from "react";

function NavBar() {
  const SignedIn = localStorage.getItem("UserToken");
  const Navigate = useNavigate();

  const LoggingOutHandler = () => {
    localStorage.removeItem("UserToken");
    Navigate("/Login");
  };

  useEffect(()=>{
    if(SignedIn){
      Navigate("/Home")
    }
  },[SignedIn,Navigate]);

  return (
    <div>
      <nav>
        {/* <Link to="/Home">Dashboard</Link> */}
        <h1>Data Table Report</h1>
        <ul>
          {!SignedIn ? (
            <>
              <Link to="/Login" className="Link__Styles">
                <li>Login</li>
              </Link>

              <Link to="/Register" className="Link__Styles">
                <li>SignUp</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/Directing" className="Link__Styles">
                Account
              </Link>
              <button onClick={LoggingOutHandler} className="Log__Out">
                LogOut
              </button>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar