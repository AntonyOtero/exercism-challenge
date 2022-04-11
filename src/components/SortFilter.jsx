import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const options = ['Newest First', 'Oldest First']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sort({ handleSorting }) {
  const [selectedSort, setSelectedSort] = useState(options[0])

  useEffect(() => {
    handleSorting(selectedSort)
  }, [selectedSort])

  return (
    <Listbox value={selectedSort} onChange={setSelectedSort} data-testid="dropdown">
      {({ open }) => (
        <div className="w-80 relative">
          <Listbox.Button className="relative w-full bg-theme-light-200 border border-transparent rounded-md shadow-sm cursor-pointer focus:outline-none focus:text-theme-default focus:bg-white focus:border focus:border-theme-active focus:shadow-theme-glow sm:text-sm">
            <span className="flex items-center">
              <span className="block my-3 mx-5 text-base text-theme-faded-300 truncate">
                Sort by {selectedSort}
              </span>
            </span>
            <span className="ml-1.5 absolute inset-y-0 right-5 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon className="w-6 stroke-theme-faded-300" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    classNames(
                      active ? 'text-theme-faded-400 bg-theme-light-200' : 'text-theme-faded-400',
                      'cursor-default select-none relative py-2 pl-3 pr-9'
                    )
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={
                            classNames(selected ?
                              'font-semibold' :
                              'font-normal', 'ml-3')
                          }
                        >
                          {option}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
