import React, { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa'

import Poster from './Poster'
import TrailerModal from '../../../components/TrailerModal'
import Info from './Info'

const PageHeader = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false)
  const [movieId, setMovieId] = useState(null)

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
            className="btn btn-pink"
            onClick={() => setShowTrailer(true)}
          >
            <FaPlayCircle className="mb-1 me-1" /> Watch Trailer
          </button>
          <Info />
        </div>
      </div>
      <TrailerModal
        showModal={showTrailer}
        closeModal={() => setShowTrailer(false)}
        movieId={movie.id}
      />
    </div>
  )
}

export default PageHeader
