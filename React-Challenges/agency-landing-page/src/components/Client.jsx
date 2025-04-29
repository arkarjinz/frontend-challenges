import React from 'react'

function Client() {
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
            <div className="flex flex-col justify-center items-center min-h-dvh">
                <img src="/images/image-emily.jpg" alt="emily" className="rounded-full w-20"/>
                <h6>  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </h6>
                <h5> Emily R.</h5>
                <p>Marketing Director</p>

            </div>

        </>
    )
}

export default Client
