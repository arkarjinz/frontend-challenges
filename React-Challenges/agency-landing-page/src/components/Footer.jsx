import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex flex-col justify-center items-center px-6 py-7 font-barlow bg-emerald-200 min-h-96">
                <img src="/images/logo2.svg" alt="logo" className=""/>
                <ul className="flex my-8 gap-10 text-Dark-desaturated-cyan">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
                <div className="flex my-7 gap-8">
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                    <img src="/images/icon-instagram.svg" alt="facebook"/>
                    <img src="/images/icon-twitter.svg" alt="facebook"/>
                    <img src="/images/icon-pinterest.svg" alt="facebook"/>
                </div>

            </div>
        </>
    )
}

export default Footer
