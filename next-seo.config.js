export default {
  title: 'MoviesDB',
  description: 'A website to take a look in which movies are popular now.',
  openGraph: {
    title: 'MoviesDB',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    site_name: 'MoviesDB',
    description: 'A website to take a look in which movies are popular now.',
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` }],
  },
}
