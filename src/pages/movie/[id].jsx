import React from 'react'
import { NextSeo } from 'next-seo'

import getImageUrl from '../../services/getImageUrl'
import moviesApi from '../../services/moviesApi'

import Layout from '../../components/Layout'
import Navigation from '../../domain/movie/Navigation'
import Background from '../../domain/movie/Background'
import PageHeader from '../../domain/movie/PageHeader'
import Cast from '../../domain/movie/Cast'
import Similar from '../../domain/movie/Similar'

const Movie = ({ movie }) => (
  <Layout>
    <NextSeo
      title={`${movie.title} | MoviesDB`}
      openGraph={{
        title: `${movie.title} | MoviesDB`,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/movie/${movie.id}`,
        description: `Synopsis, casting and other details about the movie "${movie.title}".`,
        images: [{ url: getImageUrl(movie.poster_path, 'w300') }],
      }}
    />
    <div className="movie">
      <Background src={movie?.backdrop_path} title={movie?.title} />
      <div className="container position-relative">
        <Navigation />
        <PageHeader movie={movie} className="mb-5" />
        <Cast cast={movie.cast} />
        <Similar similar={movie.similar} />
      </div>
    </div>
  </Layout>
)

export async function getStaticProps(context) {
  const movie = await moviesApi().getMovie(context.params.id)

  if (!movie) return { notFound: true }
  return { props: { movie } }
}

export async function getStaticPaths() {
  const movies = await moviesApi()
    .getPopular(1)
    .then(({ data }) => data.results)

  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }))

  return { paths, fallback: 'blocking' }
}

export default Movie
