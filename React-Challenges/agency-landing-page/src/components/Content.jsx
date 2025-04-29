import React from 'react'

function Content({title,description}) {
    return (
        <>
            <div className="flex justify-center items-center order-2 md:order-1">
                <div className=" max-w-96">
                    <h3 className="font-bold text-4xl max-w-80 ">
                        {title}

                    </h3>
                    <p className="text-Very-dark-grayish-blue text-sm my-8">
                        {description}
                    </p>
                    <h6 className="uppercase">
                        Learn more
                    </h6>
                </div>

            </div>

        </>
    )
}

export default Content
