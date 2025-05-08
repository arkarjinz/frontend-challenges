import React from 'react'

function Option({price, text}) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-Light-Magenta to-Light-Violet  rounded-lg px-4 py-2.5">
    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="duration"
        className="accent-Light-Violet "
      />
      <span className="text-sm text-Pale-Violet">
       {text}
      </span>
    </label>
    <span className="font-bold text-White">{price}</span>
  </div>
  )
}

export default Option