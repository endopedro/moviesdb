import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loader from 'react-loader-spinner'
import Moment from 'react-moment'

import moviesApi from '../services/moviesApi'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'

const index = () => {
  const MySwal = withReactContent(Swal)

  const [movies, setMovies] = useState([])
  const [hasMoreMovies, setHasMoreMovies] = useState(true)

  const fetchMovies = (page) => {
    if (hasMoreMovies) {
      moviesApi()
        .getPopular(page)
        .then(({ data }) => {
          setMovies([...movies, ...data.results])
          if (data.page == data.total_pages) setHasMoreMovies(false)
        })
        .catch((error) => {
          if (error.response.status != 422) {
            MySwal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Failed to connect to server.',
            })
          }
          setHasMoreMovies(false)
        })
    }
  }

  return (
    <Layout title={'Home'}>
      <h1 className="mt-4 pt-2 pb-4 border-bottom border-2">Popular movies</h1>
      <InfiniteScroll
        className="row"
        pageStart={0}
        loadMore={fetchMovies}
        hasMore={hasMoreMovies}
        loader={
          <div className="d-flex" key={0}>
            <Loader
              className="mx-auto"
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
        }
      >
        {movies.map((movie) => (
          <div className="col-2 mb-3" key={movie.id}>
            <MovieCard movie={movie} hoverable />
            <h6 className="mt-3 mb-1">{movie.title}</h6>
            <p style={{ fontSize: '14px' }}>
              <Moment date={movie.release_date} format="ll" />
            </p>
          </div>
        ))}
      </InfiniteScroll>
      {!hasMoreMovies && (
        <h5 className="text-center mb-5">No more movies to load.</h5>
      )}
    </Layout>
  )
}

export default index
