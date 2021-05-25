import React from 'react'

const MovieScore = ({ score }) => (
  <div className="movie-score">
    <div
      className={`score-indicator ${
        score >= 7 ? 'green' : score < 4 ? 'red' : 'yellow'
      }`}
    />
    <span className="score-value ms-2">{score}</span>
  </div>
)

export default MovieScore
