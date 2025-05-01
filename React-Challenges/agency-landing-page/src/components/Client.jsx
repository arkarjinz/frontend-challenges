import React from 'react'

function Client({testimony, clientImg, name, position}) {
    return (
        <>
          {/*<div>*/}
          {/*    <img src={clientImg} alt="client"/>*/}
          {/*    <p>*/}
          {/*        {testimony}*/}
          {/*    </p>*/}
          {/*    <h6>{name}</h6>*/}
          {/*    <p>{position}</p>*/}
          {/*</div>*/}
            <div className="flex flex-col justify-center items-center">
                <img src={clientImg} alt="clients" className="rounded-full w-20"/>
                <p className="leading-8 mt-8 mb-12"> {testimony}
                </p>
                <h5 className="font-bold"> {name}</h5>
                <p className="text-Dark-grayish-blue mt-2">{position}</p>

            </div>

        </>
    )
}

export default Client
