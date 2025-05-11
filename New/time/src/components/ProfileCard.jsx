import React from 'react'

function ProfileCard() {
    return (
        <>
          <div className="bg-Navy-900 w-full md:max-w-[300px] min-h-[523px]  relative rounded-2xl overflow-hidden">
              <div className="bg-Purple-600 min-h-[65%] w-full absolute rounded-xl p-8">
                   <div className="">
                       <div>
                           <img src="/images/image-jeremy.png" alt="profile" className="max-w-[60px] outline-white outline-3 rounded-full "/>
                       </div>
                      <div className="mt-8">
                          <p className="text-Navy-200">
                              Report for
                          </p>
                           <h2 className="text-white text-4xl font-light">
                               Jeremy Robson
                           </h2>
                      </div>
                   </div>
              </div>

              <div className="absolute bottom-0 p-8 grid grid-cols-1 gap-5 ">
                      <p className="text-Navy-200">
                          Daily
                      </p>
                      <p className="text-white  font-medium text-[18px]">
                          Weekly
                      </p>
                      <p className="text-Navy-200">Monthly</p>

              </div>
          </div>
        </>
    )
}

export default ProfileCard
