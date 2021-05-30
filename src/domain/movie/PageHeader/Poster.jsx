import React from 'react'
import Image from 'next/image'

import getImageUrl from '../../../services/getImageUrl'
import MovieScore from '../../../components/MovieScore'

const Poster = ({ src, title, score }) => {
  return (
    <div className="poster">
      <Image
        className="poster-image"
        src={getImageUrl(src, 'w500')}
        alt={`Poster of ${title}`}
        width={350}
        height={525}
        layout="responsive"
      />
      <MovieScore score={score} lg />
    </div>
  )
}

export default Poster
