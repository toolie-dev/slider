import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'

const Slide = ({ image, name, title, quote }) => {
  return (
    <article>
      <img src={image} alt={name} className='person-img' />
      <h5>{name}</h5>
      <p className='title'>{title}</p>
      <p className='text'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  )
}

export default Slide
