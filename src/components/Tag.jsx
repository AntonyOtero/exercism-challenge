import React from 'react'

export default function Tag({ label }) {
  return (
    <span className='px-3 py-1 text-sm font-medium border border-[#CBC9D9] rounded-full'>
      {label}
    </span>
  )
}