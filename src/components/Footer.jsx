import React from "react"
import Button from "./Button"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline"

export default function Footer(props) {
  console.log(props)
  return (
    <footer className="absolute bottom-0 flex justify-between w-full px-8 py-4 bg-white border-t border-slate-300">
      <Button
        style="mx-0"
        label="Previous"
      />
      <div>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        ...
        <Button label="10" />
        <Button label="11" />
        <Button label="12" />
      </div>
      <Button
        style="mx-0"
        label="Next"
      />
    </footer>
  )
}