import React from 'react'
import { FaRegCalendar, FaRegClock, FaDollarSign } from 'react-icons/fa'
import Moment from 'react-moment'

const Info = ({ movie, className }) => {
  const { release_date, runtime, budget } = movie

  const icons = [<FaRegCalendar />, <FaRegClock />, <FaDollarSign />]
  const titles = ['Release Date', 'Runtime', 'Budget']
  const infos = [
    <Moment date={release_date} format="ll" />,
    `${Math.floor(runtime / 60)}h${runtime % 60}`,
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(budget),
  ]

  return (
    <div className={`movie-info ${className ? className : ''}`}>
      {titles.map((title, index) => (
        <div className="d-flex">
          <div className="icon me-2">{icons[index]}</div>
          <div
            className={`d-flex flex-column${
              index < 2 ? ' me-4 pe-4 border-end' : ''
            }`}
          >
            <span className="title mt-1">{title}</span>
            <span className="info">{infos[index]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Info
