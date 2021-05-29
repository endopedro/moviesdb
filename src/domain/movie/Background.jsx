import React from 'react'
import { mobile } from '../../states/mobile'

import getImageUrl from '../../services/getImageUrl'

const Background = ({ src, title }) => {
  const isMobile = mobile.use()

  return (
    <div className="background">
      <img
        className="background-image"
        src={getImageUrl(src, isMobile ? 'w780' : 'w1280')}
        alt={title}
      />
      <div className="background-gradient" />
    </div>
  )
}

export default Background
