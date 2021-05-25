import React from 'react'

import getImageUrl from '../../services/getImageUrl'

const Background = ({ src, title }) => (
  <div className="background">
    <img
      className="background-image"
      src={getImageUrl(src, 'original')}
      alt={title}
    />
    <div className="background-gradient" />
  </div>
)

export default Background
