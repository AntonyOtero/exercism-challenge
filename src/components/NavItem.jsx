import React from "react"

import IconBackground from '../images/icon-bg.svg'

export default function NavItem({ name, icon, path, selected }) {

  return (
    <>
      <li className="mr-8 text-theme-default">
        <a className='flex items-center' href={ path }>
          <div className={`relative ${selected ? "stroke-white" : "stroke-theme-faded-300"}`}>
            <img className={selected ? "opacity-1" : "opacity-0"} src={IconBackground} alt="" />
            { icon }
          </div>
          <span>{ name }</span>
        </a>
      </li>
    </>
  )
}