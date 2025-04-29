import React from 'react'

function ContentWithText({imgUrl, description, title}) {
    return (
        <div className="relative">
            <img src={imgUrl} alt="image" className="w-screen"/>
            <div className="absolute bottom-0 inset-0 flex flex-col items-center justify-center">
                <h3 className="text-3xl text-Dark-desaturated-cyan font-bold">
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ContentWithText
