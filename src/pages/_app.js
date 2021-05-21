import '../assets/styles/main.scss'

import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MoviesDB</title>
        <meta name="description" content="Movies Database List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
