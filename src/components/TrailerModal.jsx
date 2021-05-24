import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import _ from 'lodash'

import moviesApi from '../services/moviesApi'

const TrailerModal = ({ showTrailer, setShowTrailer, movieId, setMovieId }) => {
  const [url, setUrl] = useState(null)
  const [videoNotFound, setVideoNotFound] = useState(false)

  useEffect(() => {
    if (showTrailer) {
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
  }, [showTrailer])

  return (
    <Modal
      contentClassName="bg-transparent align-items-center border-0"
      centered
      size="lg"
      show={showTrailer}
      onHide={() => {
        setShowTrailer(false)
        setMovieId(null)
      }}
    >
      {videoNotFound ? (
        <h5 className="text-bold">There's no trailer for this movie.</h5>
      ) : (
        <>
          {url ? (
            <ReactPlayer url={url} controls />
          ) : (
            <Loader
              className="mx-auto"
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />
          )}
        </>
      )}
    </Modal>
  )
}

export default TrailerModal
