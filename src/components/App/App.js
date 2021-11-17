import React, { Component } from "react";

import Movie from "../Movie/Movie";

import "./App.css";
import movieData from "../../movieData";

console.log(movieData.movies);
const moviesArr = movieData.movies;

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: moviesArr,
    };
  }

  render() {
    return (
      <div className="App">
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
