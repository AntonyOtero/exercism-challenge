import React from "react"
import { ChevronRightIcon } from '@heroicons/react/outline'

export default function Testimonial({ id, track, exercise, mentor, content, created_at }) {

  function getDateDiff(currentDate, resultDate) {
    if (resultDate.getFullYear() !== currentDate.getFullYear()) {
      const diffYear = currentDate.getFullYear() - resultDate.getFullYear()
      return `${diffYear} ${diffYear > 1 ? 'years' : 'year'} ago`
    } else if (resultDate.getMonth() !== currentDate.getMonth()) {
      const diffMonth = currentDate.getMonth() - resultDate.getMonth()
      return `${diffMonth} ${diffMonth > 1 ? 'months' : 'month'} ago`
    } else if (resultDate.getDate() !== currentDate.getDate()) {
      const diffDate = currentDate.getDate() - resultDate.getDate()
      return `${diffDate} ${diffDate > 1 ? 'days' : 'day'} ago`
    } else if (resultDate.getHours() !== currentDate.getHours()) {
      const diffHour = currentDate.getHours() - resultDate.getHours()
      return `${diffHour} ${diffHour > 1 ? 'hours' : 'hour'} ago`
    } else if (resultDate.getMinutes() !== currentDate.getMinutes()) {
      const diffMinute = currentDate.getMinutes() - resultDate.getMinutes()
      return `${diffMinute} ${diffMinute > 1 ? 'minutes' : 'minute'} ago`
    } else if (resultDate.getSeconds() !== currentDate.getSeconds()) {
      const diffSecond = currentDate.getSeconds() - resultDate.getSeconds()
      return `${diffSecond} ${diffSecond > 1 ? 'seconds' : 'second'} ago`
    }
  }

  return (
    <a className="grid grid-cols-6 items-center w-full px-6 py-3 border-b focus:outline-none focus:text-theme-default focus:bg-white focus:border focus:border-theme-active focus:shadow-theme-glow" href={`#${id}`} id={id}>
      <div className="col-span-2 flex items-center justify-start">
        <img className="h-8 mr-6" src={track.icon_url} alt={track.slug} />
        <img className="h-full max-h-11 mr-4 rounded-full" src={mentor.avatar_url} alt={mentor.handle} />
        <div>
          <p className="font-medium">{mentor.handle}</p>
          <p className="text-sm text-slate-500">
            on
            <span> {exercise.title} </span>
             in
            <span> {track.title} </span>
          </p>
        </div>
      </div>
      <p className="col-span-3 max-w-[525px] ml-16 text-sm text-slate-700 truncate">{content}</p>
      <div className="flex items-center justify-end">
        <p className="mr-12 text-right text-sm font-medium text-slate-500">
          {getDateDiff(new Date(Date.now()), new Date(created_at))}
        </p>
        <ChevronRightIcon className="h-4 stroke-slate-500" />
      </div>
    </a>
  )
}
