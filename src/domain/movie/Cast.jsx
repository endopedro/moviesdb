import React from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

import getImageUrl from '../../services/getImageUrl'
import SlickButtonFix from '../../components/SlickButtonFix'

const Cast = ({ cast, className }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: (
      <SlickButtonFix>
        <FaChevronRight />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <FaChevronLeft />
      </SlickButtonFix>
    ),
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
      <h3 className="mb-3 text-center text-sm-start">
        Casting <span className="top-10">(top 10)</span>
      </h3>
      <div className="cast-wrapper">
        <Slider {...settings}>
          {cast.slice(0, 10).map((member) => (
            <div className="cast-member" key={member.id}>
              <Image
                className="picture"
                src={
                  member.profile_path
                    ? getImageUrl(member.profile_path, 'w200')
                    : '/images/no-avatar.png'
                }
                alt={`Picture of ${member.name}`}
                width={140}
                height={140}
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
