import React from 'react'

import TrailerModal from '../TrailerModal'
import Topbar from './Topbar'

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
      <TrailerModal />
    </>
  )
}

export default Layout
