import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import getImageUrl from '../../services/getImageUrl'

const Cast = ({cast, className}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={`movie-cast ${className ? className : ''}`}>
      <h3 className="mb-3">Casting <span className="top-10">(top 10)</span></h3>
      <div className="cast-wrapper">
        <Slider {...settings}>
          {cast.slice(0, 10).map((member) => (
            <div className="cast-member" key={member.id}>
              <img
                className="picture"
                src={member.profile_path ? getImageUrl(member.profile_path, 'w200') : '/no-avatar.png '}
                alt={member.name}
                onError={(e) => (e.target.src = '/no-avatar.png')}
              />
              <div className="wrapper">
                <span className="name">{member.name}</span>
                <span className="character">{member.character}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Cast