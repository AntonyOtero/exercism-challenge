import React, { useState, useEffect } from 'react'
import { ReactComponent as TestimonialsIcon } from './images/testimonials-icon.svg'
import { ReactComponent as HeaderDivider } from './images/header-divider.svg'
import Tag from './components/Tag'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState([])

  useEffect(() => {
    fetch('https://exercism.org/api/v2/hiring/testimonials?page=2&track=python&exercise=ming&order=newest_first')
      .then(res => res.json())
      .then(data => {
        setResults(data.testimonials.results)
        setPagination(data.testimonials.pagination)
      })
  }, [])

  return (
    <div id='app'>
      <main>
        <header className='flex flex-col items-center pt-10 pb-8'>
          <TestimonialsIcon />
          <div className='flex items-center mt-3 mb-4'>
            <h1 className='mx-4 font-bold text-3xl text-[#130B43]'>Testimonials I've Left</h1>
            <Tag label={pagination.total_count} />
          </div>
          <HeaderDivider />
        </header>
        <div className='relative mx-auto mb-10 w-[1376px] h-[791px] rounded-lg shadow-[0_4px_42px_rgba(79,114,205,0.15)]'>
          {/* Listing Header */}
          <div>
            {results.map(result => <Testimonial key={result.id} {...result} />)}
          </div>
          <Footer {...pagination}/>
        </div>
      </main>
    </div>
  );
}

export default App;
// pageHeader: `flex flex-col items-center pt-10 pb-8`,
//   pageLabel: `flex items-center`,
//   pageTitle: `mt-3 mx-4 mb-4 font-bold text-3xl text-[#130B43]`,