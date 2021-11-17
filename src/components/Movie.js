import React from "react";

import Poster from "./Poster";

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
  return <div>{moviePoster}</div>;
};

export default Movie;
