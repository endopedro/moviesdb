import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import axios from 'axios'

import { movieIdHandler, trailerHandler, reset } from '../states/trailer'
import { mobile } from '../states/mobile'

import Loader from './Loader'

const TrailerModal = () => {
  const trailerMovieId = movieIdHandler.use()
  const showTrailer = trailerHandler.use()
  const isMobile = mobile.use()

  const [url, setUrl] = useState(null)
  const [videoNotFound, setVideoNotFound] = useState(false)

  useEffect(() => {
    if (showTrailer) {
      setVideoNotFound(false)
      setUrl(null)
      axios
        .get('/api/movies', { params: { id: trailerMovieId, type: 'videos' } })
        .then(({ data }) => {
          const trailerKey = data.results.find(
            (result) => result.type == 'Trailer' && result.site == 'YouTube'
          ).key
          if (trailerKey)
            setUrl(`https://www.youtube.com/watch?v=${trailerKey}`)
          else setVideoNotFound(true)
        })
        .catch(() => setVideoNotFound(true))
    }
  }, [showTrailer])

  return (
    <Modal
      contentClassName="bg-transparent align-items-center border-0"
      centered
      size="lg"
      show={showTrailer}
      onHide={reset}
    >
      {videoNotFound ? (
        <h5 className="text-bold">There's no trailer for this movie.</h5>
      ) : (
        <>
          {url ? (
            <ReactPlayer
              url={url}
              controls
              height={isMobile ? '300px' : '360px'}
              width={isMobile ? '100vw' : '640px'}
            />
          ) : (
            <Loader />
          )}
        </>
      )}
    </Modal>
  )
}

export default TrailerModal
