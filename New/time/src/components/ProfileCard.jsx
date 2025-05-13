import React from 'react'

function ProfileCard() {
    return (
        <>
            <div className="bg-Navy-900 w-full max-w-[280px] mx-auto min-h-[180px] md:max-w-[300px] md:min-h-[523px] relative rounded-2xl overflow-hidden">

                <div className="bg-Purple-600 flex lg:flex-col lg:items-start items-center h-[120px] p-4 md:absolute md:top-0 md:left-0 md:w-full md:min-h-[65%] md:h-auto md:rounded-xl md:p-8">

                    <img src="/images/image-jeremy.png" alt="profile" className="w-12 h-12 rounded-full outline-white outline-3 md:max-w-[60px] md:w-auto md:h-auto"/>

                    <div className="ml-4 md:ml-0 md:mt-8">
                        <p className="text-Navy-200 text-sm md:text-base">
                            Report for
                        </p>
                        <h2 className="text-white text-lg md:text-4xl font-light">
                            Jeremy Robson
                        </h2>
                    </div>
                </div>


                <div className="absolute bottom-0 w-full flex justify-between p-6 md:grid md:grid-cols-1 md:gap-5 md:p-8 ">

                    <p className="text-Navy-200 text-sm md:text-base">Daily</p>
                    <p className="text-white font-medium text-sm md:text-[18px]">
                        Weekly
                    </p>
                    <p className="text-Navy-200 text-sm md:text-base">Monthly</p>

                </div>
            </div>
        </>
    )
}

export default ProfileCard
