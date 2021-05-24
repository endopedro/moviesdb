import api from './api'

const moviesApi = () => ({
  getOne: (id) => api.get(`/movie/${id}`),
  getPopular: () => api.get('/movie/popular'),
  getSimilar: (id) => api.get(`/movie/${id}/similar`),
  getCredits: (id) => api.get(`/movie/${id}/credits`),
  getVideos: (id) => api.get(`/movie/${id}/videos`),
})

export default moviesApi
