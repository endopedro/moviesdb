import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import moviesApi from '../../services/moviesApi'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import TrailerModal from '../../components/TrailerModal'
import Navigation from '../../domain/movie/Navigation'
import Background from '../../domain/movie/Background'
import PageHeader from '../../domain/movie/PageHeader'
import Cast from '../../domain/movie/Cast'
import Similar from '../../domain/movie/Similar'

const Movie = () => {
  const MySwal = withReactContent(Swal)

  const router = useRouter()
  const { id } = router.query

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showTrailer, setShowTrailer] = useState(false)
  const [movieId, setMovieId] = useState(null)

  useEffect(() => {
    if (id) {
      setLoading(true)
      moviesApi()
        .getMovie(id)
        .then((data) => setMovie(data))
        .catch(() =>
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to connect to server.',
          })
        )
        .finally(() => setLoading(false))
    }
  }, [id])

  useEffect(() => {
    if (movieId) setShowTrailer(true)
  }, [movieId])

  const closeModal = () => {
    setShowTrailer(false)
    setMovieId(null)
  }

  return (
    <Layout title={movie?.title}>
      {loading ? (
        <Loader className="mt-5" />
      ) : (
        <div className="movie">
          <Background src={movie?.backdrop_path} title={movie?.title} />
          <div className="container position-relative">
            <Navigation />
            <PageHeader
              movie={movie}
              className="mb-5"
              setMovieId={setMovieId}
            />
            <Cast cast={movie.cast} />
            <Similar similar={movie.similar} setMovieId={setMovieId} />
          </div>
        </div>
      )}
      <TrailerModal
        showModal={showTrailer}
        closeModal={closeModal}
        movieId={movieId}
      />
    </Layout>
  )
}

export default Movie
