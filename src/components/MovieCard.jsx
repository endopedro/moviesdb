import React from 'react'

import getImageUrl from '../services/getImageUrl'

const MovieCard = ({ movie, hoverable, setShowTrailer, setMovieId }) => {
  const scoreIndicator = (score) => {
    const color = score >= 7 ? '#28A745' : score < 4 ? 'red' : '#FFC107'
    return (
      <div
        className="rounded-pill"
        style={{ width: '10px', height: '10px', backgroundColor: color }}
      />
    )
  }

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={getImageUrl(movie.poster_path, 300)}
        alt=""
      />

      <div className="movie-score">
        {scoreIndicator(movie.vote_average)}
        <span className="ms-2">{movie.vote_average}</span>
      </div>

      {hoverable && (
        <div className="buttons-wrapper">
          <button
            type="button"
            onClick={() => setMovieId(movie.id)}
            className="btn btn-outline-pink w-100 mb-2"
          >
            Trailer
          </button>
          <button type="button" className="btn btn-pink w-100 mt-1">
            Details
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieCard
