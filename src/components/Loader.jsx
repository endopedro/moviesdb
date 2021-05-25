import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderComponent = ({ className }) => {
  return (
    <div className={`d-flex ${className ? className : ''}`}>
      <Loader
        className="mx-auto"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  )
}

export default LoaderComponent
