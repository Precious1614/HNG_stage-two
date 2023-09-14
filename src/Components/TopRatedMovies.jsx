import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import right from "../images/Chevron right.png";
import heart from "../images/Heart.png";

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [movieClicks, setMovieClicks] = useState([]);

  useEffect(() => {
    const apiKey = "63a72c8fdfcc6febafd31bf2f0198d0a";
    const baseUrl = "https://api.themoviedb.org/3";

    axios
      .get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
      .then((response) => {
        const movies = response.data.results;
        const top10Movies = movies.slice(0, 10);
        setTopRatedMovies(top10Movies);
        setLoading(false);

        setMovieClicks(Array(top10Movies.length).fill(false));
      })
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (index) => {
    const updatedClicks = [...movieClicks];
    updatedClicks[index] = !updatedClicks[index];
    setMovieClicks(updatedClicks);
  };

  return (
    <div className="Movie-cont">
      <div className="cont-3">
        <div className="see-more">
          <h1>Featured Movies</h1>
          <Link>
            See More <img src={right} alt="" />
          </Link>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="movie-list">
            {topRatedMovies.map((movie, index) => (
              <div className="movie-card" key={movie.id}>
                <button onClick={() => handleButtonClick(index)}>
                  <img
                    src={heart}
                    alt=""
                    className={movieClicks[index] ? "heart clicked" : "heart"}
                  />
                </button>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="poster-card"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h2 className="title">{movie.title}</h2>
                </Link>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TopRatedMovies;
