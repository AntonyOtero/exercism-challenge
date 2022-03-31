import React from "react"
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function Testimonial({id, track, exercise, mentor, content, created_at}) {
  return (
    <div className="flex items-center justify-between max-h-16 w-full px-2.5 py-4 border-b" id={id}>
      <div className="flex items-center">
        <img className="max-h-8 mr-6" src={track.icon_url} alt={track.slug} />
        <img className="h-full max-h-11 mr-4 rounded-full" src={mentor.avatar_url} alt={mentor.handle} />
        <div>
          <p className="font-medium">{mentor.handle}</p>
          <p className="text-sm text-slate-500">on <span>{exercise.title}</span> in <span>{track.title}</span></p>
        </div>
      </div>
      <p className="w-1/3">{content}</p>
      <div className="flex items-center">
        <p className="mr-12 text-right text-sm font-medium text-slate-500">
          {created_at}
        </p>
        <ChevronRightIcon className="h-4 stroke-slate-500" />
      </div>
    </div>
  )
}