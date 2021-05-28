import moviesApi from '../../services/moviesApi'

export default async (req, res) => {
  const page = req.query.page
  const movies = await moviesApi()
    .getPopular(page)
    .then(({ data }) => data)
    .catch(() => null)

  if (movies) res.status(200).json(movies)
  else res.status(401).send()
  return
}
