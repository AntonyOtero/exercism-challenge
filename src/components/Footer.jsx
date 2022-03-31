import React from "react"
import Button from "./Button"

export default function Footer({ current_page, total_count, total_pages }) {
  const pages = []

  for (let i = 1; i <= total_pages; i++) {
    pages.push(
      {
        "key": i,
        "label": i,
      }
    )
  }

  return (
    <footer className="absolute bottom-0 flex justify-between w-full px-8 py-4 bg-white border-t border-slate-300">
      <Button
        type="Prev"
        label="Previous"
        style="flex items-center mx-0"
      />
      <div>
        {pages.map(page => <Button {...page} />)}
      </div>
      <Button
        type="Next"
        label="Next"
        style="flex items-center mx-0"
      />
    </footer>
  )
}