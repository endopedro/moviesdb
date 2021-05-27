import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

import { setMovieId } from '../../../states/trailer'

import Poster from './Poster'
import Info from './Info'
import Crew from './Crew'

const PageHeader = ({ movie }) => {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-md-4">
          <Poster
            src={movie.poster_path}
            title={movie.title}
            score={movie.vote_average}
          />
        </div>
        <div className="col-md-8">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-description">{movie.overview}</p>
          <button
            type="button"
            className="trailer-button btn btn-pink mb-4"
            onClick={() => setMovieId(movie.id)}
          >
            <FaPlayCircle className="mb-1 me-1" /> Watch Trailer
          </button>
          <Info movie={movie} className="mt-1 mb-5 mb-sm-4" />
          <Crew crew={movie.crew} className="mt-1" />
        </div>
      </div>
    </div>
  )
}

export default PageHeader
