import { useEffect, useState } from 'react'
import { list as data } from './data.js'
import Carousel from './components/Carousel.jsx'
import Slide from './components/Slide.jsx'

const App = () => {
  const [people, setPeople] = useState(data)

  return (
    <section className='section'>
      <Carousel people={people}></Carousel>

      {/* {people.map((person) => (
        <Slide key={person.id} {...person} />
      ))} */}
    </section>
  )
}

export default App
