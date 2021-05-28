import moviesApi from '../../services/moviesApi'

export default async (req, res) => {
  const type = req.query.type

  if (type == 'movies') {
    const page = req.query.page
    const movies = await moviesApi()
      .getPopular(page)
      .then(({ data }) => data)
      .catch(() => null)

    if (movies) res.status(200).json(movies)
    else res.status(401).send()
  }

  if (type == 'videos') {
    const id = req.query.id
    const videos = await moviesApi()
      .getVideos(id)
      .then(({ data }) => data)
      .catch(() => null)

    if (videos) res.status(200).json(videos)
    else res.status(401).send()
  }

  return
}
