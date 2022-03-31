import React, { useState, useEffect } from 'react'
import { ReactComponent as TestimonialsIcon } from './images/testimonials-icon.svg'
import { ReactComponent as HeaderDivider } from './images/header-divider.svg'
import Tag from './components/Tag'
import Testimonial from './components/Testimonial'

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://exercism.org/api/v2/hiring/testimonials?page=1&order=newest_first')
      .then(res => res.json())
      .then(data => {
        setResults(data.testimonials.results)
      })
  }, [])

  return (
    <div id='app'>
      <main>
        <header className='flex flex-col items-center pt-10 pb-8'>
          <TestimonialsIcon />
          <div className='flex items-center mt-3 mb-4'>
            <h1 className='mx-4 font-bold text-3xl text-[#130B43]'>Testimonials I've Left</h1>
            <Tag label={47} />
          </div>
          <HeaderDivider />
        </header>
        <div className='mx-auto mb-10 w-[1376px] h-[791px] rounded-lg shadow-[0_4px_42px_rgba(79,114,205,0.15)]'>
          {/* Listing Header */}
          <div>
            {/* Testimonials */}
            {results.map(result => <Testimonial key={result.id} {...result} />)}
          </div>
          {/* Listing Footer */}
        </div>
      </main>
    </div>
  );
}

export default App;
// pageHeader: `flex flex-col items-center pt-10 pb-8`,
//   pageLabel: `flex items-center`,
//   pageTitle: `mt-3 mx-4 mb-4 font-bold text-3xl text-[#130B43]`,