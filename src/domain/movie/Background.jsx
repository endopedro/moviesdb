import React from 'react'
import { isMobile } from 'react-device-detect'

import getImageUrl from '../../services/getImageUrl'

const Background = ({ src, title }) => (
  <div className="background">
    <img
      className="background-image"
      src={getImageUrl(src, isMobile ? 'w780' : 'w1280')}
      alt={title}
    />
    <div className="background-gradient" />
  </div>
)

export default Background
