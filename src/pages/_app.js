import '../assets/styles/main.scss'

import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
