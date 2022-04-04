import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Tag from './Tag'
// Images & Icons
import { ChevronDownIcon } from '@heroicons/react/outline'
import GenericTrack from '../images/generic-track.png'

export default function TrackSelect({ tracks, trackCounts, totalCount, handleTrackFilter }) {
  const [selectedTrack, setSelectedTrack] = useState(
    <img src={GenericTrack} alt=""></img>
  )

  function handleSelection(selected) {
    setSelectedTrack(selected)
    handleTrackFilter(selected.props.id)
  }

  return (
    <Listbox as="div" className="relative" value={selectedTrack} onChange={handleSelection}>
      <Listbox.Button
        className='flex items-center'
      >
        {selectedTrack}
        <ChevronDownIcon className='w-5 ml-3' />
      </Listbox.Button>
      <Listbox.Options className="absolute h-96 p-2 bg-white border rounded-lg shadow-theme-lg overflow-y-scroll z-10">
        <Listbox.Option
          key="all"
          value={<img className='h-10' src={GenericTrack} alt=""></img>}
          className={({ active }) => {
            return active ?
              'bg-theme-light-200' :
              'bg-white'
          }}
        >
          <>
            <div className='flex items-center justify-between w-80 py-2 px-6'>
              <div className='flex items-center'>
                <img
                  className='h-10 mr-4'
                  src={GenericTrack}
                  alt=""
                />
                <span>All</span>
              </div>
              <Tag label={totalCount} />
            </div>
          </>
        </Listbox.Option>
        {tracks
          .filter(track => track.slug in trackCounts)
          .map((track) => (
          <Listbox.Option
            key={track.slug}
            value={<img id={track.slug} className='h-10' src={track.icon_url} alt=""></img>}
            className={({ active }) => {
              return active ?
                'bg-theme-light-200' :
                'bg-white'
            }}
          >
            {({selected, active}) => {
              return (
                <>
                  <div className='flex items-center justify-between py-2 px-6'>
                    <div className='flex items-center'>
                      <img
                        className='h-10 mr-4'
                        src={track.icon_url}
                        alt=""
                      />
                      <span>{track.title}</span>
                    </div>
                    <Tag label={trackCounts[track.slug]} />
                  </div>
                </>
              )
            }}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}



// import { Fragment, useEffect, useState } from 'react'
// import { Listbox, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/outline'
// import GenericIcon from '../images/generic-track.png'
// import Tag from './Tag'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function TrackSelect({ tracks, trackCounts, totalCount }) {
//   const [selected, setSelected] = useState('All')
//   console.log(selected)
// console.log(tracks)
//   return (
//     <Listbox value={selected} onChange={setSelected}>
//       {({ open }) => (
//         <>
//           <div className="mt-1 relative">
//             <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
//               <span className="flex items-center">
//                 <img src={''} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
//                 {selected}
//               </span>
//               <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//                 <ChevronDownIcon className="w-5" aria-hidden="true" />
//               </span>
//             </Listbox.Button>

//             <Transition
//               show={open}
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
//                 <Listbox.Option
//                   key="all"
//                   className={({ active }) =>
//                     classNames(
//                       active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                       'cursor-default select-none relative py-2 pl-3 pr-9'
//                     )
//                   }
//                   value={"All"}
//                 >
//                   {({ selected, active }) => (
//                     <>
//                       <div className="flex items-center">
//                         <img src={GenericIcon} alt='All' className="flex-shrink-0 h-6 w-6 rounded-full" />
//                         <span
//                           className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
//                         >
//                           {"All"}
//                         </span>
//                         <Tag label={totalCount} />
//                       </div>
//                     </>
//                   )}
//                 </Listbox.Option>
//                 {tracks
//                   .filter((track) => track.slug in trackCounts)
//                   .map((track) => (
//                     <Listbox.Option
//                       key={track.title}
//                       className={({ active }) =>
//                         classNames(
//                           active ? 'text-white bg-indigo-600' : 'text-gray-900',
//                           'cursor-default select-none relative py-2 pl-3 pr-9'
//                         )
//                       }
//                       value={track.title}
//                     >
//                       {({ selected, active }) => (
//                         <>
//                           <div className="flex items-center">
//                             <img src={track.icon_url} alt={track.slug} className="flex-shrink-0 h-6 w-6 rounded-full" />
//                             <span
//                               className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
//                             >
//                               {track.title}
//                             </span>
//                             <Tag label={trackCounts[track.slug]} />
//                           </div>
//                         </>
//                       )}
//                     </Listbox.Option>
//                 ))}
//               </Listbox.Options>
//             </Transition>
//           </div>
//         </>
//       )}
//     </Listbox>
//   )
// }
