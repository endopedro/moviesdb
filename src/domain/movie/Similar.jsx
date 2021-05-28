import React from 'react'
import MovieCard from '../../components/MovieCard'
import Moment from 'react-moment'

const Similar = ({ similar }) => (
  <div className="row mb-5">
    <h3 className="mb-3 text-center text-sm-start">Similar Movies</h3>
    {!!similar.length ? (
      <>
        {similar.slice(0, 4).map((movie) => (
          <div className="col-xl-2 col-md-3 col-sm-6 mb-3" key={movie.id}>
            <MovieCard movie={movie} />
            <h6 className="mt-3 mb-1 text-center text-md-start">
              {movie.title}
            </h6>
            <p className="text-center text-md-start text-gray-300 font-size-14">
              <Moment date={movie.release_date} format="ll" />
            </p>
          </div>
        ))}
      </>
    ) : (
      <h6>No movies found.</h6>
    )}
  </div>
)

export default Similar
