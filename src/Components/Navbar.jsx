import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../images/Search.png";
import Menu from "../images/Menu alt 4.png";
import logo from "../images/Logo.png";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const apiKey = "63a72c8fdfcc6febafd31bf2f0198d0a";
      const baseUrl = "https://api.themoviedb.org/3";

      const response = await fetch(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchInput}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.results.length > 0) {
        navigate("/search-results", { state: { searchResults: data.results } });
      } else {
        console.log("No results found.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error searching for movies:", error);
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <div className="cont-1">
        <div className="Nav-cont">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="searchbox">
            <input
              type="search"
              name=""
              id=""
              placeholder="What do you want to watch?"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <img
              src={searchIcon}
              alt=""
              srcSet=""
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="sign-cont">
            <Link>Sign in</Link>
            <img src={Menu} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
