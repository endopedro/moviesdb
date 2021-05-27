import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { NextSeo } from 'next-seo'

import getImageUrl from '../../services/getImageUrl'
import moviesApi from '../../services/moviesApi'

import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
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

  return (
    <Layout>
      {movie && (
        <NextSeo
          title={`${movie.title} | MoviesDB`}
          openGraph={{
            title: `${movie.title} | MoviesDB`,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/movie/${movie.id}`,
            description: `Movie: ${movie.title} | MoviesDB`,
            images: [{ url: getImageUrl(movie.poster_path, 'w300') }],
          }}
        />
      )}
      {loading ? (
        <Loader className="mt-5" />
      ) : (
        <div className="movie">
          <Background src={movie?.backdrop_path} title={movie?.title} />
          <div className="container position-relative">
            <Navigation />
            <PageHeader movie={movie} className="mb-5" />
            <Cast cast={movie.cast} />
            <Similar similar={movie.similar} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Movie
