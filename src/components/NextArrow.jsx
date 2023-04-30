import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className='next'>
      <FiChevronRight />
    </button>
  )
}

export default NextArrow
