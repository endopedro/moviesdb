import React from 'react'

import getImageUrl from '../../../services/getImageUrl'
import MovieScore from '../../../components/MovieScore'

const Poster = ({ src, title, score }) => {
  return (
    <div className="poster">
      <MovieScore score={score} lg />
      <img
        className="poster-image"
        src={getImageUrl(src, 'w500')}
        alt={title}
      />
    </div>
  )
}

export default Poster
