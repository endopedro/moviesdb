import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import _ from 'lodash'
import { isMobile } from 'react-device-detect'

import moviesApi from '../services/moviesApi'
import Loader from './Loader'

const TrailerModal = ({ showModal, closeModal, movieId }) => {
  const [url, setUrl] = useState(null)
  const [videoNotFound, setVideoNotFound] = useState(false)

  useEffect(() => {
    if (showModal) {
      setVideoNotFound(false)
      setUrl(null)
      moviesApi()
        .getVideos(movieId)
        .then(({ data }) => {
          const trailerKey = _.find(data.results, {
            type: 'Trailer',
            site: 'YouTube',
          })?.key
          if (trailerKey)
            setUrl(`https://www.youtube.com/watch?v=${trailerKey}`)
          else setVideoNotFound(true)
        })
        .catch(() => setVideoNotFound(true))
    }
  }, [showModal])

  return (
    <Modal
      contentClassName="bg-transparent align-items-center border-0"
      centered
      size="lg"
      show={showModal}
      onHide={() => closeModal()}
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
