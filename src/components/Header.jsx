import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline'

const options = ['Newest First', 'Oldest First']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({handleSorting}) {
  const [selected, setSelected] = useState(options[0])

  useEffect(() => {
    handleSorting(selected)
  }, [selected])

  return (
    <div className='absolute top-0 w-full px-8 py-4 bg-white border-b'>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="w-80  relative">
              <Listbox.Button className="relative w-full bg-theme-light-200 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-theme-active focus:border-theme-active sm:text-sm">
                <span className="flex items-center">
                  <span className="block my-3 mx-5 text-base text-theme-faded-300 truncate">
                    Sort by {selected}
                  </span>
                </span>
                <span className="ml-1.5 absolute inset-y-0 right-5 flex items-center pr-2 pointer-events-none">
                  <ChevronDownIcon className="w-5 stroke-theme-faded-300" aria-hidden="true" />
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
                          active ? 'text-white bg-theme-active' : 'text-theme-faded-400',
                          'cursor-default select-none relative py-2 pl-3 pr-9'
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3')}
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
          </>
        )}
      </Listbox>
    </div>
  )
}