import React, { useState, useEffect } from 'react'
import LoadingCircle from './components/LoadingCircle'
import { ReactComponent as TestimonialsIcon } from './images/testimonials-icon.svg'
import { ReactComponent as HeaderDivider } from './images/header-divider.svg'
import Tag from './components/Tag'
import Header from './components/Header'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [sortFilter, setSortFilter] = useState("")

  function handlePageChange(e) {
    switch (e.target.textContent) {
      case "Next":
        setCurrentPage(prevPage => prevPage + 1)
        break
      case "Previous":
        setCurrentPage(prevPage => prevPage - 1)
        break
      default:
        setCurrentPage(e.target.textContent)
        break
      }
  }
  
  function handleSorting(selected) {
    setSortFilter('&order=' + selected.replace(" ", "_").toLowerCase())
  }
    
  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true)
    }
      fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}${sortFilter}`)
      .then(res => res.json())
      .then(data => {
        setResults(data.testimonials.results)
        setPagination(data.testimonials.pagination)
        setIsLoading(false)
      })
    }, [currentPage, sortFilter])
  
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
        <div className='relative mx-auto pt-20 pb-[70px] mb-10 w-[1376px] h-[791px] rounded-lg shadow-[0_4px_42px_rgba(79,114,205,0.15)]'>
          <Header handleSorting={handleSorting} />
          <div className='max-h-full overflow-y-scroll'>
            {results.map(result => <Testimonial key={result.id} {...result} />)}
          </div>
          <Footer {...pagination} handlePageChange={handlePageChange} />
          {/* Loading Circle */}
          {isLoading && <LoadingCircle />}
        </div>
      </main>
    </div>
  );
}

export default App;