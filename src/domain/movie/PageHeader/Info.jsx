import React from 'react'
import { FaCalendar } from 'react-icons/fa'

const Info = ({ movie }) => {
  return (
    <div className="d-flex">
      <div>
        <FaCalendar style={{ color: '#337180' }} className="me-2" />
      </div>
      <div className="d-flex flex-column">
        <span className="mt-1">Release</span>
        <span>data</span>
      </div>
    </div>
  )
}

export default Info
