import React from 'react'
import { mobile } from '../../states/mobile'
import Image from 'next/image'

import getImageUrl from '../../services/getImageUrl'

const Background = ({ src, title }) => {
  const isMobile = mobile.use()

  return (
    <div className="background">
      <Image
        className="background-image"
        src={getImageUrl(src, isMobile ? 'w780' : 'w1280')}
        alt="Backdrop image"
        layout="fill"
      />
      <div className="background-gradient" />
    </div>
  )
}

export default Background
