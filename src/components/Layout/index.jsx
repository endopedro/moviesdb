import React from 'react'
import Head from 'next/head'

import Topbar from './Topbar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Topbar />
      {title && (
        <Head>
          <title>{title} | MoviesDB</title>
        </Head>
      )}
      {children}
    </>
  )
}

export default Layout
