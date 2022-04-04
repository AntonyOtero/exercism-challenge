import { useState, useEffect } from 'react';
import TrackSelect from './TrackSelect';
import ExerciseFilter from './ExerciseFilter';
import Sort from './Sort';

export default function Header({ trackCounts, totalCount, handleSorting, handleTrackFilter }) {
  const [tracks, setTracks] = useState({ tracks: [] })

  useEffect(() => {
    fetch('https://exercism.org/api/v2/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(data)
      })
  }, [])

  return (
    <div className='absolute flex justify-between top-0 w-full px-8 py-4 bg-white border-b'>
      <div className="flex items-center">
        <TrackSelect tracks={tracks.tracks} trackCounts={trackCounts} totalCount={totalCount} handleTrackFilter={handleTrackFilter} />
        <ExerciseFilter />
      </div>
      <Sort handleSorting={handleSorting} />
    </div>
  )
}
