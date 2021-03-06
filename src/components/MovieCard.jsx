import React from 'react'
import { useRouter } from 'next/router'
import { FaPlay } from 'react-icons/fa'
import Image from 'next/image'

import { setMovieId } from '../states/trailer'
import { mobile } from '../states/mobile'
import getImageUrl from '../services/getImageUrl'

import MovieScore from '../components/MovieScore'

const MovieCard = ({ movie }) => {
  const router = useRouter()
  const isMobile = mobile.use()

  return (
    <div className="movie-card">
      <Image
        className="movie-poster"
        src={getImageUrl(movie.poster_path, 'w300')}
        alt={`Poster of ${movie.title}`}
        width={246}
        height={370}
        layout="responsive"
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
        <div className="buttons-wrapper desktop" style={{ opacity: 0 }}>
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
