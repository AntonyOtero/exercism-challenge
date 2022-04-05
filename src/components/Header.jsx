import { useState, useEffect } from 'react';
import TrackFilter from './TrackFilter';
import ExerciseFilter from './ExerciseFilter';
import Sort from './Sort';
import GenericTrackIcon from '../images/generic-track.png'

export default function Header({ trackCounts, totalCount, handleTrackFilter, handleExerciseFilter, handleSorting}) {
  const [tracks, setTracks] = useState({ tracks: [] })

  useEffect(() => {
    fetch('https://exercism.org/api/v2/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(data)
      })
  }, [])

  trackCounts.all = totalCount

  return (
    <div className='absolute flex justify-between top-0 w-full px-8 py-4 bg-white border-b'>
      <div className="flex items-center">
        <TrackFilter
          tracks={[
            {
              icon_url: GenericTrackIcon,
              is_new: false,
              last_touched_at: null,
              links: {},
              num_concepts: 0,
              num_exercises: 0,
              slug: "all",
              tags: [],
              title: "All",
              web_url: ""
            },
            ...tracks.tracks
          ]}
          trackCounts={trackCounts}
          handleTrackFilter={handleTrackFilter}
        />
        <ExerciseFilter handleExerciseFilter={handleExerciseFilter} />
      </div>
      <Sort handleSorting={handleSorting} />
    </div>
  )
}
