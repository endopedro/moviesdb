import React from 'react'
import MovieCard from '../../components/MovieCard'
import Moment from 'react-moment'

const Similar = ({similar, setMovieId}) => {
  return (
    <div className="row mb-5">
      <h3 className="mb-3">Similar Movies</h3>
      {!!similar.length ? (
        <>
          {similar.slice(0, 4).map(movie => (
            <div className="col-xl-2 col-md-3 col-sm-6 mb-3" key={movie.id}>
              <MovieCard movie={movie} setMovieId={setMovieId} />
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
        </>
      ) : (
        <h6>No movies found.</h6>
      )}
    </div>
  )
}

export default Similar
