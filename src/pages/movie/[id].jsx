import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import moviesApi from '../../services/moviesApi'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import Navigation from '../../domain/movie/Navigation'
import Background from '../../domain/movie/Background'
import PageHeader from '../../domain/movie/PageHeader'

const Movie = () => {
  const MySwal = withReactContent(Swal)

  const router = useRouter()
  const { id } = router.query

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      moviesApi()
        .getMovie(id)
        .then(data => setMovie(data))
        .catch(() =>
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to connect to server.',
          })
        )
        .finally(()=>setLoading(false))
    }
  }, [id])

  return (
    <Layout title={movie?.title}>
      {loading ? (
        <Loader className="mt-5" />
      ) : (
        <div className="movie">
          <Background src={movie?.backdrop_path} title={movie?.title} />
          <div className="container position-relative">
            <Navigation />
            <PageHeader movie={movie} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Movie