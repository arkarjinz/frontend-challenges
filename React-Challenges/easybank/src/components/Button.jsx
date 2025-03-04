import React from 'react'

const Button = ({text}) => {
    return (
        <>
            <button
                className="bg-gradient-to-r from-lime-green to-bright-cyan text-very-light-gray px-7 py-3 rounded-4xl capitalize">
                {text}
            </button>
        </>
    )
}
export default Button
