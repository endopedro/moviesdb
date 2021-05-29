import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

import getImageUrl from '../../../services/getImageUrl'

const Crew = ({ crew, className }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <div className={`movie-crew ${className ? className : ''}`}>
      <h6 className="text-iris text-center text-sm-start">Crew</h6>
      <Slider {...settings}>
        {crew.slice(0, 10).map((member) => (
          <div className="crew-member" key={member.id}>
            <Image
              className="picture"
              src={
                member.profile_path
                  ? getImageUrl(member.profile_path, 'w200')
                  : '/images/no-avatar.png '
              }
              alt={`Picture of ${member.name}`}
              width={40}
              height={40}
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
