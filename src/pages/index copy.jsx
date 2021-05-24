import React, { useEffect } from 'react'
import moviesApi from '../services/moviesApi'
import getImageUrl from '../services/getImageUrl'

const index = () => {
  useEffect(() => {
    moviesApi()
      .getPopular()
      .then((res) => console.log(res.data))
  }, [])

  return (
    <div className="container">
      <h1>MoviesDB</h1>
    </div>
  )
}

export default index
