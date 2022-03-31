import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline"

export default function Button({type, label, style, currentPage,  handlePageChange}) {
  return (
    <button className={`min-w-[37px] px-4 py-2 mx-1.5 text-sm font-medium border rounded-md border-slate-200 ${currentPage === label ? "text-theme-default bg-theme-faded-100 border-theme-faded-200" : "text-theme-faded-200 bg-white border-theme-light-500"} ${style}`} onClick={handlePageChange}>
      { type === "Prev" && <ArrowLeftIcon className="h-3 mr-2.5 pointer-events-none"/> }
      {label}
      { type === "Next" && <ArrowRightIcon className="h-3 ml-2.5 pointer-events-none"/> }
    </button>
  )
}