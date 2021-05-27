import api from './api'

const moviesApi = () => ({
  getPopular: (page) => api.get('/movie/popular', { params: { page: page } }),
  getVideos: (id) => api.get(`/movie/${id}/videos`),
  getMovie: (id) =>
    Promise.all([
      api.get(`/movie/${id}`).then(({ data }) => data),
      api.get(`/movie/${id}/credits`).then(({ data }) => data),
      api.get(`/movie/${id}/similar`).then(({ data }) => data.results),
    ]).then((values) => ({
      ...values[0],
      ...values[1],
      similar: [...values[2]],
    })),
})

export default moviesApi
