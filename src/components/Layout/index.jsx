import React from 'react'
import Head from 'next/head'

import getImageUrl from '../../services/getImageUrl'

import TrailerModal from '../TrailerModal'
import Topbar from './Topbar'

const Layout = ({ children, title, movie }) => {
  return (
    <>
      <Topbar />
      {title && (
        <Head>
          <title>{title} | MoviesDB</title>
          {movie && (
            <>
              <meta
                property="og:title"
                content={`${movie.title} | MoviesDB`}
                key="ogtitle"
              />
              <meta
                property="og:description"
                content={movie.overview}
                key="ogdescription"
              />
              <meta
                property="og:image"
                content={getImageUrl(movie.poster_path, 'w300')}
                key="ogimage"
              />
              <meta
                property="og:url"
                content={`${process.env.NEXT_PUBLIC_SITE_URL}/movie/${movie.id}`}
                key="ogurl"
              />

              <meta
                property="twitter:title"
                content={`${movie.title} | MoviesDB`}
                key="twtitle"
              />
              <meta
                property="twitter:description"
                content={movie.overview}
                key="twdescription"
              />
              <meta
                property="twitter:image"
                content={getImageUrl(movie.poster_path, 'w300')}
                key="twimage"
              />
              <meta
                property="twitter:url"
                content={`${process.env.NEXT_PUBLIC_SITE_URL}/movie/${movie.id}`}
                key="twurl"
              />
            </>
          )}
        </Head>
      )}
      {children}
      <TrailerModal />
    </>
  )
}

export default Layout
