import React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline"

export default function Button({type, label, style}) {
  return (
    <button className={`min-w-[37px] px-4 py-2 mx-1.5 text-sm font-medium border rounded-md border-slate-200 ${style}`}>
      { type === "Prev" && <ArrowLeftIcon className="h-3 mr-2.5"/> }
      {label}
      { type === "Next" && <ArrowRightIcon className="h-3 ml-2.5"/> }
    </button>
  )
}