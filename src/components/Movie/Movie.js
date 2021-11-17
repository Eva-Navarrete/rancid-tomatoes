import React from "react";

import Poster from "../Poster/Poster";
import "./Movie.css";

const Movie = ({ movies }) => {
  const moviePoster = movies.map((movie) => {
    return (
      <Poster
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        key={movie.id}
      />
    );
  });
  return <div className="movies-container">{moviePoster}</div>;
};

export default Movie;
