import '../assets/styles/main.scss'

import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import NProgress from 'nprogress'

import SEO from '../../next-seo.config'

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
