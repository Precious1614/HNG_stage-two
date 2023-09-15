import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logo from "../images/Logobar.png";
import { Link } from "react-router-dom";
import home from "../images/Home.png";
import movie from "../images/Movie Projector.png";
import tv from "../images/TV Show.png";
import calender from "../images/Calendar.png";
import logout from "../images/Logout.png";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "63a72c8fdfcc6febafd31bf2f0198d0a";
    const baseUrl = "https://api.themoviedb.org/3";

    fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="movieDetails">
      <div className="side-cont">
        <div className="side-bar">
          <img className="logobar" src={logo} alt="" />
          <div className="bar-links">
            <Link className="barlink" data-testid="home-link">
              <img src={home} alt="" />
              Home
            </Link>
            <Link className="barlink" data-testid="movies-link">
              <img src={movie} alt="" />
              Movies
            </Link>
            <Link className="barlink" data-testid="tv-series-link">
              <img src={tv} alt="" />
              TV Series
            </Link>
            <Link className="barlink" data-testid="upcoming-link">
              <img src={calender} alt="" />
              Upcoming
            </Link>
          </div>
          <div className="search-bar">
            <p>Play movie quizzes and earn free tickets</p>
            <small>50k people are playing now</small>
            <button data-testid="play-button">start playing</button>
          </div>
          <Link className="loglink" data-testid="logout-link">
            <img src={logout} alt="" />
            Log out
          </Link>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="details-cont">
          <div className="detail-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          </div>
          <h2 data-testid="movie-title">{movieDetails.title}</h2>
          <p data-testid="movie-release-date">{movieDetails.release_date}</p>
          <p data-testid="movie-runtime">{movieDetails.runtime}</p>
          <p data-testid="movie-overview">{movieDetails.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
