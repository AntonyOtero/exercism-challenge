import { useState, useEffect } from 'react';
import TrackFilter from './TrackFilter';
import ExerciseFilter from './ExerciseFilter';
import SortFilter from './SortFilter';
import GenericTrackIcon from '../images/generic-track.png'

export default function Header({ trackCounts, totalCount, handleTrackFilter, handleExerciseFilter, handleSorting}) {
  const updatedCounts = trackCounts
  updatedCounts.all = totalCount

  const [tracks, setTracks] = useState([
    {
      slug: "all",
      title: "All",
      course: false,
      num_concepts: 0,
      num_exercises: 0,
      web_url: "",
      icon_url: GenericTrackIcon,
      tags: [],
      last_touched_at: null,
      is_new: false,
      links: {},
    }
  ])

  useEffect(() => {
    fetch('https://exercism.org/api/v2/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(prevTracks => [...prevTracks, ...data.tracks])
      })
  }, [])

  return (
    <div className='absolute flex justify-between top-0 w-full px-8 py-4 bg-white border-b'>
      <div className="flex items-center">
        <TrackFilter
          tracks={tracks}
          trackCounts={updatedCounts}
          handleTrackFilter={handleTrackFilter}
        />
        <ExerciseFilter handleExerciseFilter={handleExerciseFilter} />
      </div>
      <SortFilter handleSorting={handleSorting} />
    </div>
  )
}
