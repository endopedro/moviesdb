import '../assets/styles/main.scss'

import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>MoviesDB</title>
        <meta name="description" content="Movies Database" />

        <meta property="og:title" content="Movies Database" />
        <meta
          property="og:description"
          content="A website to take a look in which movies are popular now."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />

        <meta property="twitter:title" content="Movies Database" />
        <meta
          property="twitter:description"
          content="A website to take a look in which movies are popular now."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
        />
        <meta
          property="twitter:url"
          content={process.env.NEXT_PUBLIC_SITE_URL}
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
