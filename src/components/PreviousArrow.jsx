import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const PreviousArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className='prev'>
      <FiChevronLeft />
    </button>
  )
}

export default PreviousArrow
