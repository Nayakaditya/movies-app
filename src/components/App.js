import React from "react";
import { data } from "../data/data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>

        <div className="list">
          {data.map((movie, index) => (
            <MovieCard movie={movie} key={`movie-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
