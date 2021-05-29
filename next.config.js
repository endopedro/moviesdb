module.exports = {
  env: {
    MOVIEDB_API_TOKEN: process.env.MOVIEDB_API_TOKEN,
  },
  images: {
    domains: ['image.tmdb.org', process.env.NEXT_PUBLIC_SITE_URL],
  },
}
