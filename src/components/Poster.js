import React from "react";

const Poster = ({ title, rating, releaseDate, id }) => {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{releaseDate}</p>
    </div>
  );
};

export default Poster;
