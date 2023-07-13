import React, { useState, useEffect} from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";

function Header() {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const config =  { 
    headers:{ 'content-type': 'multipart/form-data; boundary=<calculated when request is sent>' 
    ,"Authorization" : `Bearer ${userToken}`}};
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setIsLoggedIn(userToken !== null);
  }, []);

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  };
  const handleClick = () => {
    if (isLoggedIn) {
      // User is logged in, perform logout action
      // Clear the token from localStorage and update login state
      axios.post("http://localhost:5000/users/logout", {}, config)
        .then((res) => {
          console.log(res);
          localStorage.removeItem("userToken");
          setIsLoggedIn(false);
          navigate("/"); // Redirect to home page or any other desired location
        })
        .catch((err) => {
          console.log(err);
          // Handle error

        });
    } else {
      // User is not logged in, navigate to login page
      navigate("/Login");
    }
  };

  const handleProfileButton = () => {
    if (!userToken) {
      Swal.fire('Please login to see your profile', '', 'info');
      return;
  }
    navigate("/User-Profile");
  }

  return (
    <div className="header">
      <div className={scroll ? "header-box header-scroll" : `header-box`}>
        <div className="h-logo">
          <a title="RealHomes 3rd Header" href="#">
            <img
              alt="RealHomes 3rd Header"
              src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/logo.png"
            />
          </a>
        </div>
        <div className={menu ? "h-links active" : `h-links`}>
          <ul >
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <a href="">
                Properties
              </a>
              <ul>
                <li>
                  <Link to="/Sale-Page">
                    Sale
                  </Link>
                </li>
                <li>
                <Link to="/Rent-Page">
                    Rent
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a>
                Areas
              </a>
              <ul>
                <li>
                  <Link to="/Cairo-Page">
                    Cairo
                  </Link>
                </li>
                <li>
                <Link to="/Giza-Page">
                    Giza
                </Link>
                </li>
                <li>
                  <Link to="/Alex-Page">
                    Alexandria
                </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/HomeServices">
                Home-Services
              </Link>
            </li>
            <li>
              <Link to="/Submit">
                Submit
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-user">
          <ul>
            <li>
              <button className="profile-button" onClick={() => handleProfileButton()}>
                <AccountCircleIcon />
              </button>
            </li>
            <li>
            <button onClick={() => handleClick()}>
                {isLoggedIn ? "Logout" : "Login"} {/* Update button text */}
              </button>
            </li>
            <MenuIcon onClick={() => setMenu(!menu)} />
          </ul>
        </div>
      </div>
      <div className="h-search">
        <form></form>
      </div>
    </div>
  );
}

export default Header;
