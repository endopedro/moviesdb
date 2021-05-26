import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import getImageUrl from '../../../services/getImageUrl'

const Crew = ({ crew, className }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <FaChevronRight className="text-white" />,
    prevArrow: <FaChevronLeft className="text-white" />,
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
    <div className={`crew ${className ? className : ''}`}>
      <h6 className="text-iris">Crew</h6>
      <Slider {...settings}>
        {crew.slice(0, 10).map((member) => (
          <div className="crew-member">
            <img
              className="picture"
              src={getImageUrl(member.profile_path, 'w200')}
              alt={member.name}
              onError={(e) => (e.target.src = '/no-avatar.png')}
            />
            <div className="wrapper">
              <span className="name">{member.name}</span>
              <span className="job">{member.job}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Crew
