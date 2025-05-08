import React from 'react'

function Option({price, text}) {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-Light-Magenta to-Light-Violet  rounded-r-2xl rounded-tl-xl rounded-bl-sm px-4 py-2.5">
    <label className="flex items-center gap-3">
      <input
        type="radio"
        name="duration"
        className="accent-Light-Violet "
      />
      <span className="text-[10px] text-Light-Grayish-Violet">
       {text}
      </span>
    </label>
    <span className="font-bold text-White text-[15px]">{price}</span>
  </div>
  )
}

export default Option