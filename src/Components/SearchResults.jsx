import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();

  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div>
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((movie, index) => (
            <div key={movie.id} className="search-result" data-testid={`search-result-${index}`}>
              <div className="result-img">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  data-testid={`search-result-image-${index}`}
                />
              </div>
              <p data-testid={`search-result-title-${index}`}>{movie.title}</p>
              <p data-testid={`search-result-release-date-${index}`}>{movie.release_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p data-testid="no-results">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
