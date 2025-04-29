import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-10 py-7 font-barlow bg-emerald-200">
                <img src="/images/logo.svg" alt="logo" className="bg-Dark-desaturated-cyan"/>
                <ul className="flex  gap-30 ">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
                <div className="flex gap-10">
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                </div>

            </div>
        </>
    )
}

export default Footer
