import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../images/facebook.png";
import Insta from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="media-cont">
        <Link>
          <img src={Facebook} alt="" />
        </Link>
        <Link>
          <img src={Insta} alt="" />
        </Link>
        <Link>
          <img src={Twitter} alt="" />
        </Link>
        <Link>
          <img src={youtube} alt="" />
        </Link>
      </div>
      <div className="privacy">
        <Link>Conditions of Use</Link>
        <Link>Privacy & Policy</Link>
        <Link>Press Room</Link>
      </div>
      <div className="footnote">
        <p>&copy; 2021 MovieBox by AdrianaEka Prayudha</p>
      </div>
    </div>
  );
};

export default Footer;
