import React, {useEffect} from 'react'
import { SearchIcon } from '@heroicons/react/outline'

export default function ExerciseFilter({ handleExerciseFilter }) {

  function getExerciseQuery(e) {
    if (e.key === "Enter") {
      handleExerciseFilter(e.target.value)
    }
  }

  return (
    <div className="relative flex items-center ml-6">
      <span className="absolute">
        <SearchIcon className="w-6 ml-3 stroke-theme-faded-300" />
      </span>
      <input
      type="text"
      placeholder="Filter by exercise title"
      onKeyPress={getExerciseQuery}
      className="w-[416px] py-3 pr-5 pl-12 placeholder:text-theme-faded-300 bg-theme-light-200 border border-transparent rounded-md outline-0 focus:text-theme-default focus:bg-white focus:border focus:border-theme-active focus:shadow-theme-glow"
      />
    </div>
  )
}
