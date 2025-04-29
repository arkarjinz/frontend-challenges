import React from 'react'

function ContentWithText({imgUrl, description, title}) {
    return (
        <div className="relative ">
            <img src={imgUrl} alt="image" className="w-screen"/>
            <div className="absolute mx-auto bottom-24 text-center inset-0 flex flex-col items-center justify-end w-96">
                <h3 className="text-3xl text-Dark-desaturated-cyan my-8 font-bold">
                    {title}
                </h3>
                <p className="leading-7">
                    {description}
                </p>
            </div>

        </div>
    )
}

export default ContentWithText
