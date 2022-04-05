import { useState, Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import Tag from './Tag'

export default function TrackFilter({ tracks, trackCounts, handleTrackFilter }) {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])

  function handleSelection(selected) {
    setSelectedTrack(selected)
    handleTrackFilter(selected.slug)
  }

  return (
    <Listbox value={selectedTrack} onChange={handleSelection} as="div" className="relative">
      <Listbox.Button className="flex items-center border border-transparent rounded-md focus:outline-none focus:text-theme-default focus:bg-white focus:border focus:border-theme-active focus:shadow-theme-glow">
        <img className="h-10" src={selectedTrack.icon_url} alt="" />
        <ChevronDownIcon className='w-5 ml-3' />
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="absolute h-96 p-2 bg-white border rounded-lg shadow-theme-lg overflow-y-scroll z-10">
          {tracks
            .filter(track => track.slug in trackCounts)
            .map((track, index) => (
              <Listbox.Option
                key={index}
                value={track}
                className={({ active }) => {
                  return active ?
                    'bg-theme-light-200 flex items-center justify-between w-80 py-2 px-6' :
                    'bg-white flex items-center justify-between w-80 py-2 px-6'
                }}
              >
              {({ selected }) => (
                <>
                  <div className="flex items-center">
                    <span>
                      {selected ? (
                        <div className="flex items-center justify-center w-5 h-5 mr-6 border border-theme-faded-300 rounded-full">
                          <div className="w-2.5 h-2.5 bg-theme-faded-400 border rounded-full"></div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-5 h-5 mr-6 border border-theme-faded-300 rounded-full">
                        </div>
                      )}
                    </span>
                    <img className='h-10 mr-4' src={track.icon_url} alt="" />
                    <span>
                      {track.title}
                    </span>
                  </div>
                  <Tag label={trackCounts[track.slug]} />
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}