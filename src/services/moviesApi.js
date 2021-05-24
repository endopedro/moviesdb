import api from './api'

const moviesApi = () => ({
  getOne: (id) => api.get(`/movie/${id}`),
  getPopular: (page) => api.get('/movie/popular', { params: { page: page } }),
  getSimilar: (id) => api.get(`/movie/${id}/similar`),
  getCredits: (id) => api.get(`/movie/${id}/credits`),
  getVideos: (id) => api.get(`/movie/${id}/videos`),
})

export default moviesApi
