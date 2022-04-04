import React, { useState, useEffect } from 'react'

import TopBar from './components/TopBar'
import Tag from './components/Tag'
import Header from './components/Header'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

import LoadingCircle from './components/LoadingCircle'
import { ReactComponent as TestimonialsIcon } from './images/testimonials-icon.svg'
import { ReactComponent as HeaderDivider } from './images/header-divider.svg'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [trackCounts, setTrackCounts] = useState({})
  const [results, setResults] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [pagination, setPagination] = useState({})
  const [exerciseFilter, setExerciseFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [trackFilter, setTrackFilter] = useState("")
  const [sortFilter, setSortFilter] = useState("&order=newest_first")

  function handleTrackFilter(slug) {
    setTrackFilter(slug ? `&track=${slug}` : "")
  }

  function formatQuery(query) {
    return query.toLowerCase().replace(/ /g, "_")
  }

  function handleExerciseFilter(exercise) {
    const formattedQuery = formatQuery(exercise)
    if (formattedQuery !== exerciseFilter.split("=")[1]) {
      setExerciseFilter(exercise ? `&exercise=${formattedQuery}` : "")
    }
  }

  function handleSorting(selected) {
    setSortFilter('&order=' + selected.replace(" ", "_").toLowerCase())
  }

  function handlePageChange(e) {
    switch (e.target.textContent) {
      case "Next":
        setCurrentPage(prevPage => prevPage + 1)
        break
      case "Previous":
        setCurrentPage(prevPage => prevPage - 1)
        break
      default:
        setCurrentPage(parseInt(e.target.textContent))
        break
      }
  }

  // useEffect(() => {
  //   if (!isLoading) {
  //     setIsLoading(true)
  //   }
  //     fetch(`https://exercism.org/api/v2/hiring/testimonials?page=${currentPage}${trackFilter}${exerciseFilter}${sortFilter}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setTrackCounts(data.testimonials.track_counts)
  //       setResults(data.testimonials.results)
  //       if (totalCount === 0) {
  //         setTotalCount(data.testimonials.pagination.total_count)
  //       }
  //       setPagination(data.testimonials.pagination)
  //       setIsLoading(false)
  //     })
  //   }, [trackFilter, exerciseFilter, sortFilter, currentPage])

  return (
    <div id='app'>
      <TopBar />
      <main>
        <header className='flex flex-col items-center pt-10 pb-8'>
          <TestimonialsIcon />
          <div className='flex items-center mt-3 mb-4'>
            <h1 className='mx-4 font-bold text-3xl text-[#130B43]'>Testimonials I've Left</h1>
            <Tag label={totalCount} />
          </div>
          <HeaderDivider />
        </header>
        <div className='relative mx-auto pt-20 pb-[70px] mb-10 w-[1376px] h-[791px] rounded-lg shadow-theme-lg'>
          <Header
            trackCounts={trackCounts}
            totalCount={totalCount}
            handleTrackFilter={handleTrackFilter}
            handleExerciseFilter={handleExerciseFilter}
            handleSorting={handleSorting}
          />
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
