import React from "react";

import "./Poster.css";

const Poster = ({ title, rating, releaseDate, id }) => {
  return (
    <div className="poster" id={id}>
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{releaseDate}</p>
    </div>
  );
};

export default Poster;
