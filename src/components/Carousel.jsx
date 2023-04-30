import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Slide from './Slide'
import PreviousArrow from './PreviousArrow'
import NextArrow from './NextArrow'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
}

export default ({ people }) => {
  return (
    <section className='slider-container'>
      <Slider {...settings}>
        {people.map((person) => (
          <Slide key={person.id} {...person} />
        ))}
      </Slider>
    </section>
  )
}
