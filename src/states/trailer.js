import { entity } from 'simpler-state'

export const movieIdHandler = entity(null)
export const trailerHandler = entity(false)

export const reset = () => {
  movieIdHandler.set(null)
  trailerHandler.set(false)
}

export const setMovieId = (id) => {
  movieIdHandler.set(id)
  trailerHandler.set(true)
}
