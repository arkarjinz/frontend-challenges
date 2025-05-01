import React from 'react'
import {Background} from "./Background.jsx";

export const HeroSection = () => {
    return (
        <>
            <div className="min-h-screen">
                <Background customClass="bg-gradient-to-t from-Light-Violet to-Light-Magenta min-h-[85vh] w-[30%] rounded-b-full -translate-x-26"/>
                {/*<h1>*/}
                {/*    Simple booking*/}
                {/*</h1>*/}
                {/*<p>*/}
                {/*    Stay in touch with our dog walkers through the chat interface. This makes it easy to*/}
                {/*    discuss arrangements and make bookings. Once the walk has been completed you can rate*/}
                {/*    your walker and book again all through the chat.*/}
                {/*</p>*/}
                <Background customClass="bg-amber-500 min-h-[85vh] w-[30%] rounded-t-full absolute right-0 translate-x-16 bottom-0  "/>
            </div>
        </>
    )
}
