module.exports = {
  env: {
    MOVIEDB_API_TOKEN: process.env.MOVIEDB_API_TOKEN,
  },
  images: {
    domains: ['image.tmdb.org'],
    path: `${process.env.NEXT_PUBLIC_SITE_URL}/_next/image`,
  },
}
