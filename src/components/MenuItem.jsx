import React from "react"

export default function NavItem({ icon, alert, count, size }) { 
  return (
    <>
      <li className="relative mr-10">
        {icon.length ?
          <img src={icon} alt="" /> :
          icon
        }
        <div className={`${size} ${alert &&
          "grid place-content-center absolute right-0 top-0 translate-x-1/2 -translate-y-1/3 font-semibold text-xs text-white bg-red-500 border-4 border-white rounded-full"
        }`}>
          {alert && count > 0 && count
          }
        </div>
      </li>
    </>
  )
}