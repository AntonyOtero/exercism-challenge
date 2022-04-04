import React from "react"
import Loader from "../images/loading-circle.png"

export default function LoadingCircle() {
  return (
    <div className="absolute grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
      <div className="absolute w-full h-full bg-theme-light-100 opacity-75"></div>
      <img className="animate-spin" src={Loader} alt="Loading..." />
    </div>
  )
}