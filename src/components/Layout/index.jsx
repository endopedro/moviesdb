import React, { useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import TrailerModal from '../TrailerModal'
import Topbar from './Topbar'

import { setMobile } from '../../states/mobile'

const Layout = ({ children }) => {
  useEffect(() => setMobile(isMobile), [setMobile])

  return (
    <>
      <Topbar />
      {children}
      <TrailerModal />
    </>
  )
}

export default Layout
