import React from "react";
import Home from "../Components/Home";
import Footer from "../Components/Footer";
import TopRatedMovies from "../Components/TopRatedMovies";

const Homepage = () => {
  return (
    <div>
      <Home />
      <TopRatedMovies />
      <Footer />
    </div>
  );
};

export default Homepage;
