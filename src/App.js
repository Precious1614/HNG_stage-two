import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Page/Homepage";
import MovieDetails from "./Components/MovieDetails";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
