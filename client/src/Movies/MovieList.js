/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

import {css, jsx} from '@emotion/core'

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
      <Link 
      css={{
          textDecoration: 'none',
          color: 'white',
          border: '1px solid grey',
          padding: '5px 10px',
          backgroundColor: 'lightblue'
      }}
      to={`/add-movie`}
      >Add New Movie</Link>
    </div>
  );
}

export default MovieList;
