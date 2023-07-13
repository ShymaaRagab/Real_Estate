import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="top-footer">
          <div className="left-footer">
            <a title="RealHomes 3rd Header" href="#">
              <img
                alt="RealHomes 3rd Header"
                src="https://rhheaderthree.b-cdn.net/wp-content/uploads/sites/3/2017/06/logo.png"
              />
            </a>
          </div>
          <div className="right-footer">
            <ul>
              <li>
                <a>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a>
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a>
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                <a>
                  <RssFeedIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="center-footer">
          <div className="box-footer">
            <ul>
              <li>
              <Link exact to="/">
                Home
              </Link>
              </li>
              <li>
              <Link to="/HomeServices">
                Home Services
              </Link>
              </li>
              <li>
              <Link to="/Contact">
                Contact
              </Link>
              </li>
            </ul>
          </div>
          <div className="box-footer">
            <ul>
              <li>
                <a href="#">
                  <FmdGoodIcon />
                  3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
                </a>
              </li>
              <li>
                <a href="#">
                  <LocalPhoneIcon />
                  +123-456-789
                </a>
              </li>
              <li>
                <a href="#">
                  <EmailIcon />
                  robot@inspirythemes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="end-footer">
          <div className="left-footer">© 2023. All rights reserved.</div>
          <div className="right-footer">Designed by Inspiry Themes</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
