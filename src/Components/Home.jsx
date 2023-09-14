import React from "react";
import Navbar from "./Navbar";
import background from "../images/Poster.png";
import imb from "../images/imdb.png";
import likes from "../images/fruit.png";
import play from "../images/Play.png";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar />
      <div className="Container">
        <div className="cont-2">
          <div className="hero-text">
            <h1>John Wick 3 :</h1>
            <h1>Parabellum</h1>
            <div className="likes-cont">
              <div className="likes">
                <img src={imb} alt="" />
                <p>20/100</p>
              </div>
              <div className="likes">
                <img src={likes} alt="" />
                <p>97%</p>
              </div>
            </div>
            <p className="hero-desc">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <button>
              <img src={play} alt="" />
              Watch trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
