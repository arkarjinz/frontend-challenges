import React from 'react'

function TimeCard({time, image, cardTitle, subTime, bgColor}) {
    return (
        <>
            <div className={`${bgColor} relative w-screen md:max-w-[300px] min-h-[250px]  rounded-xl overflow-hidden`}>
                <img src={image} alt="icon" className="absolute right-4"/>
             <div className="bg-Navy-900 absolute w-full min-h-[80%] bottom-0  rounded-t-xl p-7 flex flex-wrap flex-col justify-between">
                 <div className="flex justify-between items-center">
                     <h5 className="text-white font-medium text-[18px] ">{cardTitle}</h5>
                     <img src="/images/icon-ellipsis.svg" alt="icon"/>
                 </div>
                 <div className="">
                     <h2 className="text-white font-light text-5xl">
                         {time}
                     </h2>
                     <p className="text-Navy-200 mt-2">
                         Last Week - {subTime}
                     </p>
                 </div>

             </div>
            </div>
        </>
    )
}

export default TimeCard
