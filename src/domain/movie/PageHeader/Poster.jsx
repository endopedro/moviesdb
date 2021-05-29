import React from 'react'
import Image from 'next/image'

import getImageUrl from '../../../services/getImageUrl'
import MovieScore from '../../../components/MovieScore'

const Poster = ({ src, title, score }) => {
  return (
    <div className="poster">
      <MovieScore score={score} lg />
      <Image
        className="poster-image"
        src={getImageUrl(src, 'w500')}
        alt={`Poster of ${title}`}
        width={350}
        height={525}
        layout="responsive"
      />
    </div>
  )
}

export default Poster
