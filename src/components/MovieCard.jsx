import React from 'react'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'
import { FaPlay } from 'react-icons/fa'

import { setMovieId } from '../states/trailer'
import getImageUrl from '../services/getImageUrl'

import MovieScore from '../components/MovieScore'

const MovieCard = ({ movie }) => {
  const router = useRouter()

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={getImageUrl(movie.poster_path, 'w300')}
        alt={movie.title}
        onClick={() => {
          if (isMobile) router.push(`/movie/${movie.id}`)
        }}
      />
      <MovieScore score={movie.vote_average} />
      {isMobile ? (
        <div
          className="buttons-wrapper mobile"
          onClick={() => setMovieId(movie.id)}
        >
          <div className="big-button btn">
            <FaPlay className="icon" />
          </div>
        </div>
      ) : (
        <div className="buttons-wrapper desktop">
          <button
            type="button"
            onClick={() => setMovieId(movie.id)}
            className="btn btn-outline-pink w-100 mb-2"
          >
            Trailer
          </button>
          <button
            type="button"
            className="btn btn-pink w-100 mt-1"
            onClick={() => router.push(`/movie/${movie.id}`)}
          >
            Details
          </button>
        </div>
      )}
    </div>
  )
}

export default MovieCard
