/** @jsx jsx */
import React from 'react';
import { Link } from 'react-router-dom'
import UpdateMovieForm from './UpdateMovieForm'
import {css, jsx} from '@emotion/core'




const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <Link 
      css={{
          textDecoration: 'none',
          color: 'white',
          border: '1px solid grey',
          padding: '5px 10px',
          backgroundColor: 'lightblue'
      }}
      to={`/update-movie/${props.movie.id}`}
      >Edit</Link>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
