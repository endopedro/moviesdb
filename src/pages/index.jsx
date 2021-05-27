import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Moment from 'react-moment'

import moviesApi from '../services/moviesApi'

import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'

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
      <div className="container">
        <h1 className="mt-4 pt-2 pb-4 border-bottom border-2 text-center text-md-start">
          Popular movies
        </h1>
        <InfiniteScroll
          className="row"
          pageStart={0}
          loadMore={fetchMovies}
          hasMore={hasMoreMovies}
          loader={<Loader key={0} />}
        >
          {movies.map((movie) => (
            <div className="col-xl-2 col-md-3 col-sm-6 mb-3" key={movie.id}>
              <MovieCard movie={movie} />
              <h6 className="mt-3 mb-1 text-center text-md-start">
                {movie.title}
              </h6>
              <p
                className="text-center text-md-start"
                style={{ fontSize: '14px', color: '#DEE2E6' }}
              >
                <Moment date={movie.release_date} format="ll" />
              </p>
            </div>
          ))}
        </InfiniteScroll>
        {!hasMoreMovies && (
          <h5 className="text-center mb-5">No more movies to load.</h5>
        )}
      </div>
    </Layout>
  )
}

export default index
