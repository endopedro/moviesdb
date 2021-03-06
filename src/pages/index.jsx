import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import formatDate from '../utils/formatDate'
import moviesApi from '../services/moviesApi'

import { darkToast } from '../data/toastStyles'
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import Loader from '../components/Loader'

const index = ({ popularMovies }) => {
  const [movies, setMovies] = useState(popularMovies)
  const [totalPages, setTotalPages] = useState(500)
  const [hasMoreMovies, setHasMoreMovies] = useState(!!popularMovies)

  useEffect(() => {
    if (!popularMovies) toast.error("Can't load movies", darkToast)
  }, [])

  const fetchMovies = (page) => {
    if (hasMoreMovies) {
      axios
        .get('/api/movies', { params: { page: page, type: 'movies' } })
        .then(({ data }) => {
          setMovies([...movies, ...data.results])
          if (data.page == data.total_pages) setHasMoreMovies(false)
          if (page === 1) setTotalPages(data.total_pages)
        })
        .catch(() => {
          toast.error("Can't load movies", darkToast)
          setHasMoreMovies(false)
        })
    }
  }

  return (
    <Layout>
      <div className="container mb-5">
        <h1 className="mt-4 pt-2 pb-4 border-bottom border-2 text-center text-md-start">
          Popular movies
        </h1>
        <InfiniteScroll
          className="row"
          pageStart={1}
          loadMore={(page) => {
            if (page <= totalPages) fetchMovies(page)
            else setHasMoreMovies(false)
          }}
          hasMore={hasMoreMovies}
          loader={<Loader key={0} />}
        >
          {movies?.map((movie) => (
            <div className="col-xl-2 col-md-3 col-sm-6 mb-3" key={movie.id}>
              <MovieCard movie={movie} />
              <h6 className="mt-3 mb-1 text-center text-md-start">
                {movie.title}
              </h6>
              <p className="text-center text-md-start text-gray-300 font-size-14">
                {formatDate(movie.release_date)}
              </p>
            </div>
          ))}
        </InfiniteScroll>
        {!hasMoreMovies && (
          <h5 className="text-center mb-5">No more movies to load.</h5>
        )}
      </div>
      <Toaster />
    </Layout>
  )
}

export async function getStaticProps() {
  const popularMovies = await moviesApi()
    .getPopular(1)
    .then(({ data }) => data.results)
    .catch(() => null)

  return {
    props: { popularMovies },
    revalidate: 600,
  }
}

export default index
